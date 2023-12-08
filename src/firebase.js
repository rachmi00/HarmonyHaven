// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKHZ6uQr3u88AcmsOGcR9uBTyQm8Owb3I",
  authDomain: "harmony-13a91.firebaseapp.com",
  projectId: "harmony-13a91",
  storageBucket: "harmony-13a91.appspot.com",
  messagingSenderId: "1008456786438",
  appId: "1:1008456786438:web:145fa01e5b7bbaf45e9987",
  measurementId: "G-EHGT0WYHV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;