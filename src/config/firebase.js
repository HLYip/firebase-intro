// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'


import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhSLsV4WYwjCvpyoM1jjOq0BXKsh5XzhM",
  authDomain: "fir-intro-d1493.firebaseapp.com",
  projectId: "fir-intro-d1493",
  storageBucket: "fir-intro-d1493.appspot.com",
  messagingSenderId: "574496894402",
  appId: "1:574496894402:web:3a27fa756ca134be67fa5b",
  measurementId: "G-52RDJFVR6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
