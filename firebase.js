// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAL-mGUtN7eSvsntzMh_eSGSaCRw1Fixc",
  authDomain: "shopix-eeee6.firebaseapp.com",
  projectId: "shopix-eeee6",
  storageBucket: "shopix-eeee6.appspot.com",
  messagingSenderId: "142476477767",
  appId: "1:142476477767:web:160a7ad35bb40afe1cb862",
  measurementId: "G-9RP384D5YH",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const firestore = firebase.firestore(app);
export { auth, firestore };
