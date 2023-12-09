// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-example.firebaseapp.com",
  projectId: "mern-estate-example",
  storageBucket: "mern-estate-example.appspot.com",
  messagingSenderId: "271049476352",
  appId: "1:271049476352:web:a0131592bc7707ef118be5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);