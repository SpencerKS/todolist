// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcUh9HStloXrh-S5Iq-eJT2OBxAROQAuo",
  authDomain: "to-do-list-14cb4.firebaseapp.com",
  projectId: "to-do-list-14cb4",
  storageBucket: "to-do-list-14cb4.appspot.com",
  messagingSenderId: "735506231406",
  appId: "1:735506231406:web:ec20278c3ca45518e0f67f",
  measurementId: "G-6KV5HHKR13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const toDoCollectionRef = collection(db, "ToDoList");