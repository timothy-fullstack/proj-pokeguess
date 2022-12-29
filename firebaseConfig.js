import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "fir-pokeguess.firebaseapp.com",
  projectId: "fir-pokeguess",
  storageBucket: "fir-pokeguess.appspot.com",
  messagingSenderId: "1098350854853",
  appId: process.env.API_ID
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);