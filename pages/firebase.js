// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDagC-kVeSfDZqi8BZz_F-baANGDumLvOA",
  authDomain: "food-palace-app.firebaseapp.com",
  projectId: "food-palace-app",
  storageBucket: "food-palace-app.appspot.com",
  messagingSenderId: "625760942632",
  appId: "1:625760942632:web:b4741fce4b2fd106ef931d",
  measurementId: "G-DXZJYEV92Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app)

export{auth,db}