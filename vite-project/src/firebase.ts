// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtLUJnBa82Bz4IAVMs7dGSolYL7jHso4Y",
  authDomain: "pagetrack-9d66c.firebaseapp.com",
  databaseURL: "https://pagetrack-9d66c-default-rtdb.firebaseio.com",
  projectId: "pagetrack-9d66c",
  storageBucket: "pagetrack-9d66c.firebasestorage.app",
  messagingSenderId: "336058300440",
  appId: "1:336058300440:web:3f5145cf285ee4c2046b6d",
  measurementId: "G-VYTK1EE85H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);