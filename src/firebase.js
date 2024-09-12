// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAlwCJ4dVTtPszzhGWAFqNMGNL4xQHGQA",
  authDomain: "k-ataexpo.firebaseapp.com",
  projectId: "k-ataexpo",
  storageBucket: "k-ataexpo.appspot.com",
  messagingSenderId: "234677204951",
  appId: "1:234677204951:web:aa1c3f879f5aa38011bd92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
