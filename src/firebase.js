import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCVhrxlP_G68Ir_QO674fFl9b7UGsI9DN0",
  authDomain: "task-manager-c0bd8.firebaseapp.com",
  projectId: "task-manager-c0bd8",
  storageBucket: "task-manager-c0bd8.appspot.com", // Fixed storageBucket format
  messagingSenderId: "410260615802",
  appId: "1:410260615802:web:9188e4165b6b2dfe3e41c3"
  // Removed measurementId as it's not needed for auth
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };