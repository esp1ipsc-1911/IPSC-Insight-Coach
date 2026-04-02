// ════════════════════════════════════════════════════════════════════════════
// AUTHENTICATION MODULE - Email/Password with Invite Code System
// ════════════════════════════════════════════════════════════════════════════

import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  query, 
  where, 
  getDocs,
  updateDoc,
  increment 
} from 'firebase/firestore';
import { auth, db } from './firebase.js';

// Current user state
let currentUser = null;
let currentUserProfile = null;

// ════════════════════════════════════════════════════════════════════════════
// AUTH STATE LISTENER
// ════════════════════════════════════════════════════════════════════════════

export function initAuth(onUserChanged) {
  console.log('initAuth: Setting up auth state listener');
  onAuthStateChanged(auth, async (user) => {
    console.log('onAuthStateChanged fired! user:', user);
    if (user) {
      currentUser = user;
      console.log('User authenticated, loading profile from Firestore...');
      // Load user profile from Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      console.log('Firestore userDoc:', userDoc);
      if (userDoc.exists()) {
        currentUserProfile = { uid: user.uid, ...userDoc.data() };
        console.log('User profile loaded:', currentUserProfile);
      } else {
        console.warn('User document does not exist in Firestore! Creating minimal profile...');
        // Create minimal profile if document doesn't exist
        currentUserProfile = {
          uid: user.uid,
          email: user.email,
          name: user.displayName || user.email.split('@')[0]
        };
      }
      console.log('Calling onUserChanged callback with:', currentUserProfile);
      onUserChanged(currentUserProfile);
    } else {
      console.log('No user authenticated');
      currentUser = null;
      currentUserProfile = null;
      onUserChanged(null);
    }
  });
}

// ════════════════════════════════════════════════════════════════════════════
// INVITE CODE VALIDATION
// ════════════════════════════════════════════════════════════════════════════

async function validateInviteCode(code) {
  try {
    const inviteDoc = await getDoc(doc(db, 'inviteCodes', code));
    
    if (!inviteDoc.exists()) {
      return { valid: false, error: 'Ugyldig invitasjonskode' };
    }
    
    const data = inviteDoc.data();
    
    if (!data.active) {
      return { valid: false, error: 'Denne koden er deaktivert' };
    }
    
    if (data.usedCount >= data.maxUses) {
      return { valid: false, error: 'Denne koden har nådd maks antall brukere' };
    }
    
    return { valid: true, code: code };
  } catch (error) {
    console.error('Invite code validation error:', error);
    return { valid: false, error: 'Kunne ikke validere kode' };
  }
}

async function incrementInviteCodeUsage(code) {
  try {
    await updateDoc(doc(db, 'inviteCodes', code), {
      usedCount: increment(1)
    });
  } catch (error) {
    console.error('Failed to increment invite code usage:', error);
  }
}

// ════════════════════════════════════════════════════════════════════════════
// REGISTRATION
// ════════════════════════════════════════════════════════════════════════════

export async function register(email, password, inviteCode, name) {
  try {
    // Validate invite code first
    const codeValidation = await validateInviteCode(inviteCode);
    if (!codeValidation.valid) {
      throw new Error(codeValidation.error);
    }
    
    // Create Firebase Auth user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Create user profile in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      email: email,
      name: name || email.split('@')[0],
      role: 'user',
      inviteCode: inviteCode,
      createdAt: new Date(),
      firstName: '',
      lastName: '',
      club: '',
      region: '',
      category: 'Standard',
      draw: 1.42,
      reload: 2.5
    });
    
    // Increment invite code usage
    await incrementInviteCodeUsage(inviteCode);
    
    return { success: true, user: user };
  } catch (error) {
    console.error('Registration error:', error);
    let errorMessage = 'Registrering feilet';
    
    if (error.code === 'auth/email-already-in-use') {
      errorMessage = 'E-postadressen er allerede i bruk';
    } else if (error.code === 'auth/weak-password') {
      errorMessage = 'Passordet må være minst 6 tegn';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = 'Ugyldig e-postadresse';
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    return { success: false, error: errorMessage };
  }
}

// ════════════════════════════════════════════════════════════════════════════
// LOGIN
// ════════════════════════════════════════════════════════════════════════════

export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error('Login error:', error);
    let errorMessage = 'Innlogging feilet';
    
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      errorMessage = 'Feil e-post eller passord';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = 'Ugyldig e-postadresse';
    } else if (error.code === 'auth/user-disabled') {
      errorMessage = 'Denne kontoen er deaktivert';
    }
    
    return { success: false, error: errorMessage };
  }
}

// ════════════════════════════════════════════════════════════════════════════
// LOGOUT
// ════════════════════════════════════════════════════════════════════════════

export async function logout() {
  try {
    await firebaseSignOut(auth);
    return { success: true };
  } catch (error) {
    console.error('Logout error:', error);
    return { success: false, error: 'Kunne ikke logge ut' };
  }
}

// ════════════════════════════════════════════════════════════════════════════
// USER GETTERS
// ════════════════════════════════════════════════════════════════════════════

export function getCurrentUser() {
  return currentUser;
}

export function getCurrentUserProfile() {
  return currentUserProfile;
}

export function isAdmin() {
  return currentUserProfile && currentUserProfile.role === 'admin';
}
