// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv3G1lOgxEqMGkr5TqoWBbo0okCK7Kpu4",
  authDomain: "locus-3dc84.firebaseapp.com",
  projectId: "locus-3dc84",
  storageBucket: "locus-3dc84.appspot.com",
  messagingSenderId: "393877457212",
  appId: "1:393877457212:web:75c31725f7947df7b97639"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getDatabase(FIREBASE_APP);

