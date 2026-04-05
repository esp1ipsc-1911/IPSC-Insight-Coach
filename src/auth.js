// ════════════════════════════════════════════════════════════════════════════
// IPSC INSIGHT - AUTHENTICATION MODULE
// Cloud Functions Integration (Server-side invite code validation)
// ════════════════════════════════════════════════════════════════════════════

import { auth, db } from './firebase.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import {
  doc,
  getDoc,
  setDoc
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getFunctions, httpsCallable } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-functions.js';

const functions = getFunctions();

// ════════════════════════════════════════════════════════════════════════════
// GLOBAL STATE
// ════════════════════════════════════════════════════════════════════════════

let currentUser = null;
let currentUserProfile = null;

// ════════════════════════════════════════════════════════════════════════════
// INIT AUTH (for main.js compatibility)
// ════════════════════════════════════════════════════════════════════════════

export function initAuth(onUserChanged) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      currentUser = user;
      try {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          currentUserProfile = { uid: user.uid, ...userDoc.data() };
        } else {
          currentUserProfile = {
            uid: user.uid,
            email: user.email,
            name: user.email ? user.email.split('@')[0] : 'Bruker',
            role: 'user'
          };
        }
        onUserChanged(currentUserProfile);
      } catch (error) {
        console.error('Feil ved lasting av brukerprofil:', error);
        currentUserProfile = {
          uid: user.uid,
          email: user.email,
          name: user.email ? user.email.split('@')[0] : 'Bruker',
          role: 'user'
        };
        onUserChanged(currentUserProfile);
      }
    } else {
      currentUser = null;
      currentUserProfile = null;
      onUserChanged(null);
    }
  });
}

// ════════════════════════════════════════════════════════════════════════════
// LOGIN (for loginUI.js)
// ════════════════════════════════════════════════════════════════════════════

export async function login(email, password) {
  try {
    const cleanEmail = (email || '').trim();
    const cleanPassword = password || '';
    
    const userCredential = await signInWithEmailAndPassword(
      auth,
      cleanEmail,
      cleanPassword
    );
    
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error('Innlogging feilet:', error);
    let errorMessage = 'Innlogging feilet';
    
    if (
      error.code === 'auth/user-not-found' ||
      error.code === 'auth/wrong-password' ||
      error.code === 'auth/invalid-credential'
    ) {
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
// REGISTER (for loginUI.js) - WITH CLOUD FUNCTION VALIDATION
// ════════════════════════════════════════════════════════════════════════════

export async function register(email, password, inviteCode, firstName, lastName, division, category, powerFactor, region, club) {
  try {
    const cleanEmail = (email || '').trim();
    const cleanPassword = password || '';
    const cleanInviteCode = (inviteCode || '').trim();
    const cleanFirstName = (firstName || '').trim();
    const cleanLastName = (lastName || '').trim();
    const cleanDivision = (division || '').trim();
    const cleanCategory = (category || '').trim();
    const cleanPowerFactor = (powerFactor || 'minor').trim();
    const cleanRegion = (region || '').trim();
    const cleanClub = (club || '').trim();

    // Step 1: Create user account first
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      cleanEmail,
      cleanPassword
    );
    const user = userCredential.user;

    // Step 2: Validate invite code via Cloud Function
    const validateCode = httpsCallable(functions, 'validateInviteCode');
    
    try {
      await validateCode({
        code: cleanInviteCode,
        userId: user.uid,
        userEmail: cleanEmail
      });
    } catch (codeError) {
      // If code validation fails, delete the user account
      await user.delete();
      
      let errorMessage = 'Ugyldig invitasjonskode';
      if (codeError.code === 'functions/not-found') {
        errorMessage = 'Ugyldig invitasjonskode';
      } else if (codeError.code === 'functions/permission-denied') {
        errorMessage = 'Denne koden er deaktivert';
      } else if (codeError.code === 'functions/resource-exhausted') {
        errorMessage = 'Denne koden har nådd maksimalt antall bruk';
      } else if (codeError.code === 'functions/already-exists') {
        errorMessage = 'Du har allerede brukt denne koden';
      } else if (codeError.message) {
        errorMessage = codeError.message;
      }
      
      return { success: false, error: errorMessage };
    }

    // Step 3: Create user profile in Firestore with all profile data
    await setDoc(doc(db, 'users', user.uid), {
      email: cleanEmail,
      firstName: cleanFirstName,
      lastName: cleanLastName,
      division: cleanDivision,
      category: cleanCategory,
      powerFactor: cleanPowerFactor,
      region: cleanRegion,
      club: cleanClub,
      role: 'user',
      inviteCode: cleanInviteCode,
      createdAt: new Date(),
      draw: null,
      reloadTime: null,
      // GDPR consent
      gdprConsent: true,
      gdprConsentDate: new Date(),
      gdprVersion: '1.0'
    });

    return { success: true, user };
  } catch (error) {
    console.error('Registrering feilet:', error);
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
// LOGOUT (for appUI.js)
// ════════════════════════════════════════════════════════════════════════════

export async function logout() {
  try {
    await firebaseSignOut(auth);
    return { success: true };
  } catch (error) {
    console.error('Utlogging feilet:', error);
    return { success: false, error: 'Kunne ikke logge ut' };
  }
}

// ════════════════════════════════════════════════════════════════════════════
// GET CURRENT USER (for appUI.js)
// ════════════════════════════════════════════════════════════════════════════

export function getCurrentUser() {
  return currentUser;
}

export function getCurrentUserProfile() {
  return currentUserProfile;
}

// ════════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ════════════════════════════════════════════════════════════════════════════

export function isAdmin() {
  return currentUserProfile && currentUserProfile.role === 'admin';
}
