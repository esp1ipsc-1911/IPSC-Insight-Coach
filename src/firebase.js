import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "SETT_INN",
  authDomain: "SETT_INN",
  projectId: "SETT_INN",
  storageBucket: "SETT_INN",
  messagingSenderId: "SETT_INN",
  appId: "SETT_INN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// LOGIN
export async function login(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

// REGISTER MED KODE
export async function register(email, password, code) {
  const codeRef = doc(db, "inviteCodes", code);
  const codeSnap = await getDoc(codeRef);

  if (!codeSnap.exists()) {
    throw new Error("Ugyldig kode");
  }

  const userCred = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", userCred.user.uid), {
    email,
    createdAt: new Date()
  });

  return userCred;
}
