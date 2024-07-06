import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, storage };
