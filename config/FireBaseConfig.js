// firebaseConfig.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-BWhBEuZWS-4JlTGZIGXRGHwtC4D1qrE",
  authDomain: "tiendaropadeportiva-d6909.firebaseapp.com",
  projectId: "tiendaropadeportiva-d6909",
  storageBucket: "tiendaropadeportiva-d6909.appspot.com",
  messagingSenderId: "417833864707",
  appId: "1:417833864707:web:e0173eddf5e17e93430836"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp(); // Usa la app existente
}

export const db = getFirestore(app);
export const auth = getAuth(app);
