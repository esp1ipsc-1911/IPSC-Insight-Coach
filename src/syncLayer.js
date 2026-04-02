// ════════════════════════════════════════════════════════════════════════════
// SYNC LAYER - Connects existing localStorage app with Firestore
// ════════════════════════════════════════════════════════════════════════════
// This layer sits between the existing app.js and Firebase
// - Intercepts localStorage saves → syncs to Firestore
// - Listens to Firestore changes → updates localStorage + triggers re-render
// - Enables real-time collaboration without rewriting the entire app

import {
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  serverTimestamp
} from 'firebase/firestore';
import { db } from './firebase.js';
import { getCurrentUser } from './auth.js';

const STORAGE_KEY = 'ipsc_insight_v1';
let firestoreListener = null;
let syncEnabled = false;
let lastLocalState = null;

// ════════════════════════════════════════════════════════════════════════════
// INITIALIZATION
// ════════════════════════════════════════════════════════════════════════════

export async function initSync() {
  const user = getCurrentUser();
  if (!user) {
    console.log('Sync disabled: no user');
    syncEnabled = false;
    return;
  }
  
  console.log('Initializing sync for user:', user.uid);
  syncEnabled = true;
  
  // Load from Firestore first (cloud is source of truth)
  await loadFromFirestore();
  
  // Set up real-time listener
  setupFirestoreListener();
  
  // Intercept localStorage.setItem
  interceptLocalStorage();
}

export function cleanupSync() {
  if (firestoreListener) {
    firestoreListener();
    firestoreListener = null;
  }
  syncEnabled = false;
}

// ════════════════════════════════════════════════════════════════════════════
// FIRESTORE OPERATIONS
// ════════════════════════════════════════════════════════════════════════════

async function loadFromFirestore() {
  const user = getCurrentUser();
  if (!user) return;
  
  try {
    const docRef = doc(db, 'userStates', user.uid);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const cloudState = docSnap.data();
      console.log('Loaded state from Firestore');
      
      // Update localStorage with cloud state
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cloudState.state));
      lastLocalState = JSON.stringify(cloudState.state);
      
      // Trigger app reload
      if (window.location) {
        window.location.reload();
      }
    } else {
      console.log('No cloud state found, using local');
      // Push local state to cloud
      await syncToFirestore();
    }
  } catch (error) {
    console.error('Error loading from Firestore:', error);
  }
}

async function syncToFirestore() {
  const user = getCurrentUser();
  if (!user || !syncEnabled) return;
  
  try {
    const localData = localStorage.getItem(STORAGE_KEY);
    if (!localData) return;
    
    const state = JSON.parse(localData);
    
    // Only sync if state actually changed
    if (lastLocalState === localData) {
      return;
    }
    
    lastLocalState = localData;
    
    const docRef = doc(db, 'userStates', user.uid);
    await setDoc(docRef, {
      state: state,
      updatedAt: serverTimestamp(),
      userId: user.uid
    }, { merge: true });
    
    console.log('Synced to Firestore');
  } catch (error) {
    console.error('Error syncing to Firestore:', error);
  }
}

function setupFirestoreListener() {
  const user = getCurrentUser();
  if (!user) return;
  
  const docRef = doc(db, 'userStates', user.uid);
  
  firestoreListener = onSnapshot(docRef, (doc) => {
    if (!doc.exists()) return;
    
    const cloudState = doc.data();
    const cloudStateStr = JSON.stringify(cloudState.state);
    
    // Only update if cloud state is different from local
    if (cloudStateStr !== lastLocalState) {
      console.log('Received update from Firestore');
      
      localStorage.setItem(STORAGE_KEY, cloudStateStr);
      lastLocalState = cloudStateStr;
      
      // Trigger app re-render
      if (window.reloadAppState) {
        window.reloadAppState();
      }
    }
  }, (error) => {
    console.error('Firestore listener error:', error);
  });
}

// ════════════════════════════════════════════════════════════════════════════
// INTERCEPT LOCALSTORAGE
// ════════════════════════════════════════════════════════════════════════════

function interceptLocalStorage() {
  const originalSetItem = Storage.prototype.setItem;
  
  Storage.prototype.setItem = function(key, value) {
    // Call original
    originalSetItem.call(this, key, value);
    
    // If it's our app's key, sync to Firestore
    if (key === STORAGE_KEY && syncEnabled) {
      // Debounce syncs (wait 500ms after last change)
      if (window.syncDebounceTimer) {
        clearTimeout(window.syncDebounceTimer);
      }
      
      window.syncDebounceTimer = setTimeout(() => {
        syncToFirestore();
      }, 500);
    }
  };
}

// ════════════════════════════════════════════════════════════════════════════
// MANUAL SYNC TRIGGER
// ════════════════════════════════════════════════════════════════════════════

export function forceSyncNow() {
  if (window.syncDebounceTimer) {
    clearTimeout(window.syncDebounceTimer);
  }
  syncToFirestore();
}
