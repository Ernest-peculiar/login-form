// firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVZrUo1RPPuTdsYqsNn9y3uOa8tbFD04U",
  authDomain: "loginapp-352fb.firebaseapp.com",
  projectId: "loginapp-352fb",
  storageBucket: "loginapp-352fb.firebasestorage.app",
  messagingSenderId: "379274897493",
  appId: "1:379274897493:web:0ad1e2e25e521cfc398cdc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
