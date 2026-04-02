// ════════════════════════════════════════════════════════════════════════════
// STORAGE ADAPTER - Hybrid local + cloud storage
// ════════════════════════════════════════════════════════════════════════════
// This adapter provides a smooth transition from localStorage to Firestore
// Profile data is saved to cloud automatically
// Matches sync in real-time when online, fallback to local when offline

import {
  saveUserProfile,
  getUserProfile,
  createMatch,
  updateMatch,
  deleteMatch,
  getUserMatches,
  listenToUserMatches,
  listenToMatch
} from './dataLayer.js';
import { getCurrentUser } from './auth.js';

const STORAGE_KEY = 'ipsc_insight_v2_local';

// ════════════════════════════════════════════════════════════════════════════
// GLOBAL STATE
// ════════════════════════════════════════════════════════════════════════════

let matches = [];
let profile = {
  firstName: '',
  lastName: '',
  club: '',
  region: '',
  division: 'Standard',
  category: 'Standard',
  powerFactor: 'minor',
  draw: 1.42,
  reloadTime: 1.80
};
let activeMatchId = null;
let matchesListener = null;

// ════════════════════════════════════════════════════════════════════════════
// INITIALIZATION
// ════════════════════════════════════════════════════════════════════════════

export async function initStorage() {
  const user = getCurrentUser();
  if (!user) {
    // Not logged in, load from localStorage
    loadFromLocal();
    return { profile, matches, activeMatchId };
  }
  
  // Logged in, load from Firestore
  await loadFromCloud();
  
  // Set up real-time listener for matches
  if (matchesListener) {
    matchesListener(); // Unsubscribe previous
  }
  
  matchesListener = listenToUserMatches((cloudMatches) => {
    matches = cloudMatches;
    saveToLocal(); // Keep local backup
    
    // Trigger UI update
    if (window.onMatchesUpdated) {
      window.onMatchesUpdated(matches);
    }
  });
  
  return { profile, matches, activeMatchId };
}

// ════════════════════════════════════════════════════════════════════════════
// PROFILE OPERATIONS
// ════════════════════════════════════════════════════════════════════════════

export async function saveProfile(newProfile) {
  Object.assign(profile, newProfile);
  
  const user = getCurrentUser();
  if (user) {
    // Save to cloud
    await saveUserProfile(profile);
  }
  
  // Always save local backup
  saveToLocal();
  return profile;
}

export function getProfile() {
  return profile;
}

// ════════════════════════════════════════════════════════════════════════════
// MATCH OPERATIONS
// ════════════════════════════════════════════════════════════════════════════

export async function addMatch(matchData) {
  const user = getCurrentUser();
  
  if (user) {
    // Create in cloud
    const result = await createMatch(matchData);
    if (result.success) {
      // Match will be added via listener
      return result.matchId;
    }
    return null;
  } else {
    // Local only
    const newMatch = {
      id: Date.now().toString(),
      ...matchData,
      createdAt: new Date()
    };
    matches.push(newMatch);
    saveToLocal();
    return newMatch.id;
  }
}

export async function editMatch(matchId, updates) {
  const user = getCurrentUser();
  
  if (user) {
    // Update in cloud
    await updateMatch(matchId, updates);
    // Update will come via listener
  } else {
    // Update local
    const match = matches.find(m => m.id === matchId);
    if (match) {
      Object.assign(match, updates);
      saveToLocal();
    }
  }
}

export async function removeMatch(matchId) {
  const user = getCurrentUser();
  
  if (user) {
    // Delete from cloud
    await deleteMatch(matchId);
    // Update will come via listener
  } else {
    // Delete local
    matches = matches.filter(m => m.id !== matchId);
    if (activeMatchId === matchId) {
      activeMatchId = null;
    }
    saveToLocal();
  }
}

export function getMatches() {
  return matches;
}

export function getActiveMatchId() {
  return activeMatchId;
}

export function setActiveMatchId(matchId) {
  activeMatchId = matchId;
  saveToLocal();
}

export function getActiveMatch() {
  return matches.find(m => m.id === activeMatchId);
}

// ════════════════════════════════════════════════════════════════════════════
// STAGE OPERATIONS (within a match)
// ════════════════════════════════════════════════════════════════════════════

export async function addStageToMatch(matchId, stageData) {
  const match = matches.find(m => m.id === matchId);
  if (!match) return;
  
  if (!match.stages) match.stages = [];
  
  const newStage = {
    id: Date.now().toString(),
    ...stageData,
    results: []
  };
  
  match.stages.push(newStage);
  await editMatch(matchId, { stages: match.stages });
  return newStage.id;
}

export async function addResultToStage(matchId, stageId, resultData) {
  const match = matches.find(m => m.id === matchId);
  if (!match || !match.stages) return;
  
  const stage = match.stages.find(s => s.id === stageId);
  if (!stage) return;
  
  if (!stage.results) stage.results = [];
  
  const newResult = {
    id: Date.now().toString(),
    ...resultData,
    timestamp: new Date().toISOString()
  };
  
  stage.results.push(newResult);
  await editMatch(matchId, { stages: match.stages });
  return newResult.id;
}

export async function removeResultFromStage(matchId, stageId, resultId) {
  const match = matches.find(m => m.id === matchId);
  if (!match || !match.stages) return;
  
  const stage = match.stages.find(s => s.id === stageId);
  if (!stage || !stage.results) return;
  
  stage.results = stage.results.filter(r => r.id !== resultId);
  await editMatch(matchId, { stages: match.stages });
}

// ════════════════════════════════════════════════════════════════════════════
// LOCAL STORAGE (backup / offline support)
// ════════════════════════════════════════════════════════════════════════════

function saveToLocal() {
  try {
    const state = {
      profile,
      matches,
      activeMatchId
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Local save failed:', e);
  }
}

function loadFromLocal() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    
    const state = JSON.parse(raw);
    if (state.profile) Object.assign(profile, state.profile);
    if (state.matches) matches = state.matches;
    if (state.activeMatchId) activeMatchId = state.activeMatchId;
    
    return true;
  } catch (e) {
    console.warn('Local load failed:', e);
    return false;
  }
}

async function loadFromCloud() {
  // Load profile
  const userProfile = await getUserProfile();
  if (userProfile) {
    Object.assign(profile, {
      firstName: userProfile.firstName || '',
      lastName: userProfile.lastName || '',
      club: userProfile.club || '',
      region: userProfile.region || '',
      division: userProfile.division || 'Standard',
      category: userProfile.category || 'Standard',
      powerFactor: userProfile.powerFactor || 'minor',
      draw: userProfile.draw || 1.42,
      reloadTime: userProfile.reloadTime || 1.80
    });
  }
  
  // Load matches
  matches = await getUserMatches();
  
  // Save local backup
  saveToLocal();
}

// ════════════════════════════════════════════════════════════════════════════
// CLEANUP
// ════════════════════════════════════════════════════════════════════════════

export function cleanup() {
  if (matchesListener) {
    matchesListener();
    matchesListener = null;
  }
}
