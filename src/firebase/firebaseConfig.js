// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAal53gGpzRIAD7V88xv_IrLW9HmZCJwus",
  authDomain: "market-coderhouse.firebaseapp.com",
  projectId: "market-coderhouse",
  storageBucket: "market-coderhouse.appspot.com",
  messagingSenderId: "1092048991345",
  appId: "1:1092048991345:web:f4c1bc43a32b9ad8a597d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//
const FirestoreDb = getFirestore(app);
    

export {
    app,
    FirestoreDb,
};