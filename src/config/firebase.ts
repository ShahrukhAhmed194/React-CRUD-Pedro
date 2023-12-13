// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXkb5djgpKuTlA6D0cHdCEiMcqp2oYn-g",
  authDomain: "crud-pedro-603cd.firebaseapp.com",
  projectId: "crud-pedro-603cd",
  storageBucket: "crud-pedro-603cd.appspot.com",
  messagingSenderId: "891498354579",
  appId: "1:891498354579:web:b0c0f9f0c07befed8c7a66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);