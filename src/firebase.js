// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTHUtXcCmV7r3SBRIoPVlo6nFmK22I5T8",
  authDomain: "starta-react-basic.firebaseapp.com",
  projectId: "starta-react-basic",
  storageBucket: "starta-react-basic.appspot.com",
  messagingSenderId: "216127747985",
  appId: "1:216127747985:web:7a8437ea74de91545f4c30",
  measurementId: "G-3CY7HB7EG6"
};

initializeApp(firebaseConfig);

const db = getFirestore();

// Initialize Firebase




export {db};

