// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDclUr6s-uc9_kdnMPMgo6zy7fk56OEYGA",
  authDomain: "house-market-place-ffcb5.firebaseapp.com",
  projectId: "house-market-place-ffcb5",
  storageBucket: "house-market-place-ffcb5.appspot.com",
  messagingSenderId: "153520736482",
  appId: "1:153520736482:web:d3e3a9bf4fda3dc17936bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore()