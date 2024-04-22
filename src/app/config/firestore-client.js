// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4jzBqIsYgsWzOYq_cvc6hmUIUlpektW4",
  authDomain: "jadiplatform-f1425.firebaseapp.com",
  projectId: "jadiplatform-f1425",
  storageBucket: "jadiplatform-f1425.appspot.com",
  messagingSenderId: "810594798926",
  appId: "1:810594798926:web:52fcce7f62efd6d427a21f",
  measurementId: "G-PM035TEL85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreClientDB = getFirestore(app);

export { firestoreClientDB };