// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuVOob2pYNxu5zvS8YmmmjUX19G-81uG4",
  authDomain: "medi-tracker-c0984.firebaseapp.com",
  projectId: "medi-tracker-c0984",
  storageBucket: "medi-tracker-c0984.firebasestorage.app",
  messagingSenderId: "437746570620",
  appId: "1:437746570620:web:dc8b734286f36127e500f9",
  measurementId: "G-Q49N4XBX75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)