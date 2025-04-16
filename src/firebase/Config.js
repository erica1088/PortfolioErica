import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};


//Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
console.log("Firebase Initialized:", app);