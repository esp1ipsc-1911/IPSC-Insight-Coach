import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  increment
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { auth, db } from "./firebase.js";

let currentUser = null;
let currentUserProfile = null;

export function initAuth(onUserChanged) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      currentUser = user;

      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));

        if (userDoc.exists()) {
          currentUserProfile = { uid: user.uid, ...userDoc.data() };
        } else {
          currentUserProfile = {
            uid: user.uid,
            email: user.email,
            name: user.email ? user.email.split("@")[0] : "Bruker",
            role: "user"
          };
        }

        onUserChanged(currentUserProfile);
      } catch (error) {
        console.error("Feil ved lasting av brukerprofil:", error);

        currentUserProfile = {
          uid: user.uid,
          email: user.email,
          name: user.email ? user.email.split("@")[0] : "Bruker",
          role: "user"
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

async function validateInviteCode(code) {
  try {
    if (!code || !code.trim()) {
      return { valid: false, error: "Du må skrive inn invitasjonskode" };
    }

    const inviteCode = code.trim();
    const inviteDoc = await getDoc(doc(db, "inviteCodes", inviteCode));

    if (!inviteDoc.exists()) {
      return { valid: false, error: "Ugyldig invitasjonskode" };
    }

    const data = inviteDoc.data();

    if (data.active === false) {
      return { valid: false, error: "Denne koden er deaktivert" };
    }

    const usedCount = Number(data.usedCount || 0);
    const maxUses = Number(data.maxUses || 0);

    if (maxUses > 0 && usedCount >= maxUses) {
      return { valid: false, error: "Denne koden har nådd maks antall brukere" };
    }

    return { valid: true, code: inviteCode };
  } catch (error) {
    console.error("Feil ved validering av invitasjonskode:", error);
    return { valid: false, error: "Kunne ikke validere invitasjonskode" };
  }
}

async function incrementInviteCodeUsage(code) {
  try {
    await updateDoc(doc(db, "inviteCodes", code), {
      usedCount: increment(1)
    });
  } catch (error) {
    console.error("Kunne ikke oppdatere bruk av invitasjonskode:", error);
  }
}

export async function register(email, password, inviteCode, name) {
  try {
    const cleanEmail = (email || "").trim();
    const cleanPassword = password || "";
    const cleanInviteCode = (inviteCode || "").trim();
    const cleanName = (name || "").trim();

    const codeValidation = await validateInviteCode(cleanInviteCode);
    if (!codeValidation.valid) {
      return { success: false, error: codeValidation.error };
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      cleanEmail,
      cleanPassword
    );

    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      email: cleanEmail,
      name: cleanName || cleanEmail.split("@")[0],
      role: "user",
      inviteCode: cleanInviteCode,
      createdAt: new Date(),
      firstName: "",
      lastName: "",
      club: "",
      region: "",
      category: "Standard",
      draw: 1.42,
      reload: 2.5
    });

    await incrementInviteCodeUsage(cleanInviteCode);

    return { success: true, user };
  } catch (error) {
    console.error("Registrering feilet:", error);

    let errorMessage = "Registrering feilet";

    if (error.code === "auth/email-already-in-use") {
      errorMessage = "E-postadressen er allerede i bruk";
    } else if (error.code === "auth/weak-password") {
      errorMessage = "Passordet må være minst 6 tegn";
    } else if (error.code === "auth/invalid-email") {
      errorMessage = "Ugyldig e-postadresse";
    } else if (error.message) {
      errorMessage = error.message;
    }

    return { success: false, error: errorMessage };
  }
}

export async function login(email, password) {
  try {
    const cleanEmail = (email || "").trim();
    const cleanPassword = password || "";

    const userCredential = await signInWithEmailAndPassword(
      auth,
      cleanEmail,
      cleanPassword
    );

    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error("Innlogging feilet:", error);

    let errorMessage = "Innlogging feilet";

    if (
      error.code === "auth/user-not-found" ||
      error.code === "auth/wrong-password" ||
      error.code === "auth/invalid-credential"
    ) {
      errorMessage = "Feil e-post eller passord";
    } else if (error.code === "auth/invalid-email") {
      errorMessage = "Ugyldig e-postadresse";
    } else if (error.code === "auth/user-disabled") {
      errorMessage = "Denne kontoen er deaktivert";
    }

    return { success: false, error: errorMessage };
  }
}

export async function logout() {
  try {
    await firebaseSignOut(auth);
    return { success: true };
  } catch (error) {
    console.error("Utlogging feilet:", error);
    return { success: false, error: "Kunne ikke logge ut" };
  }
}

export function getCurrentUser() {
  return currentUser;
}

export function getCurrentUserProfile() {
  return currentUserProfile;
}

export function isAdmin() {
  return currentUserProfile && currentUserProfile.role === "admin";
}
