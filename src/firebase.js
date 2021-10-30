// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh0uBAfvUadWbX79vA9_pCagWrwWyF12M",
  authDomain: "pony-rush.firebaseapp.com",
  projectId: "pony-rush",
  storageBucket: "pony-rush.appspot.com",
  messagingSenderId: "443178389715",
  appId: "1:443178389715:web:65f0e5374cc59a732f4426",
  measurementId: "G-DD3338P4RL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };