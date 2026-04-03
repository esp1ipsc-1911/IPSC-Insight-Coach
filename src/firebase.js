import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA110PapsS0fwLQzs-oEoF7papT9S3T5p7Q',
  authDomain: 'ipsc-insight-coach.firebaseapp.com',
  projectId: 'ipsc-insight-coach',
  storageBucket: 'ipsc-insight-coach.firebasestorage.app',
  messagingSenderId: '864793320312',
  appId: '1:864793320312:web:c586e384bbe365444bc68d'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
