// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernproject-1af00.firebaseapp.com",
  projectId: "mernproject-1af00",
  storageBucket: "mernproject-1af00.appspot.com",
  messagingSenderId: "662976642647",
  appId: "1:662976642647:web:46426156a75769e53a2d12"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);