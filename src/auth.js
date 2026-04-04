import { auth, db } from './firebase.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import {
  doc,
  getDoc,
  setDoc
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getFunctions, httpsCallable } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-functions.js';

const functions = getFunctions();

export async function login(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (error) {
    console.error('Login error:', error);
    let errorMessage = 'Innlogging feilet';
    
    if (error.code === 'auth/user-not-found') {
      errorMessage = 'Bruker ikke funnet';
    } else if (error.code === 'auth/wrong-password') {
      errorMessage = 'Feil passord';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = 'Ugyldig e-postadresse';
    } else if (error.code === 'auth/invalid-credential') {
      errorMessage = 'Ugyldig e-post eller passord';
    }
    
    return { success: false, error: errorMessage };
  }
}

export async function register(email, password, inviteCode, name) {
  try {
    // Create user account first
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Validate invite code via Cloud Function
    const validateCode = httpsCallable(functions, 'validateInviteCode');
    
    try {
      await validateCode({
        code: inviteCode,
        userId: user.uid,
        userEmail: email
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

    // Create user profile in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      email: email,
      name: name,
      createdAt: new Date(),
      inviteCode: inviteCode
    });

    return { success: true };
  } catch (error) {
    console.error('Registration error:', error);
    let errorMessage = 'Registrering feilet';
    
    if (error.code === 'auth/email-already-in-use') {
      errorMessage = 'E-postadressen er allerede i bruk';
    } else if (error.code === 'auth/weak-password') {
      errorMessage = 'Passordet er for svakt';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = 'Ugyldig e-postadresse';
    }
    
    return { success: false, error: errorMessage };
  }
}

export async function logout() {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error('Logout error:', error);
    return { success: false, error: 'Utlogging feilet' };
  }
}

export function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback);
}

export function getCurrentUser() {
  return auth.currentUser;
}

export async function getCurrentUserProfile() {
  const user = auth.currentUser;
  if (!user) return null;

  try {
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (userDoc.exists()) {
      return { uid: user.uid, email: user.email, ...userDoc.data() };
    }
    return { uid: user.uid, email: user.email };
  } catch (error) {
    console.error('Error getting user profile:', error);
    return { uid: user.uid, email: user.email };
  }
}
