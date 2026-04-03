import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 🔥 RIKTIG CONFIG FRA FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyA11OPapSOfwLQzs-oEoF7papT9S3T5p7Q",
  authDomain: "ipsc-insight-coach.firebaseapp.com",
  projectId: "ipsc-insight-coach",
  storageBucket: "ipsc-insight-coach.firebasestorage.app",
  messagingSenderId: "864793320312",
  appId: "1:864793320312:web:c586e384bbe365444bc68d",
  measurementId: "G-3Y4NZTBBS2"
};

// 🔥 INITIALISER FIREBASE
const app = initializeApp(firebaseConfig);

// 🔥 SERVICES
export const auth = getAuth(app);
export const db = getFirestore(app);
