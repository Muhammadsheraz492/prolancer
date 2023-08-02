// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlE9pOAZ62AMvPWU4XyjqI7FiCBm4g9MQ",
  authDomain: "prolancer-403a6.firebaseapp.com",
  projectId: "prolancer-403a6",
  storageBucket: "prolancer-403a6.appspot.com",
  messagingSenderId: "921434380273",
  appId: "1:921434380273:web:7f6962f7fe9018bf605650",
  measurementId: "G-8G4HTM9LC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export {auth}