// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6S1L4OkiWJiqRhRnFrsjtEk9U8UoXUzs",
  authDomain: "email-pass-auth-62d1d.firebaseapp.com",
  projectId: "email-pass-auth-62d1d",
  storageBucket: "email-pass-auth-62d1d.firebasestorage.app",
  messagingSenderId: "651476625136",
  appId: "1:651476625136:web:d389151a73e368b6ecc435"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;