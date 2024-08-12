// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh-9tz2YB6o85eJy5l-KORy9TsLinEGAA",
  authDomain: "flashcards-b27f8.firebaseapp.com",
  projectId: "flashcards-b27f8",
  storageBucket: "flashcards-b27f8.appspot.com",
  messagingSenderId: "643412765793",
  appId: "1:643412765793:web:ec468d232473bf3a75ce20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;