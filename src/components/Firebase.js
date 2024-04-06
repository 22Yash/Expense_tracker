// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDTRVn86LX3F1zuuoQpLjE2Ff-3JWzj1xY",
  authDomain: "expense-tracker-d84a9.firebaseapp.com",
  projectId: "expense-tracker-d84a9",
  storageBucket: "expense-tracker-d84a9.appspot.com",
  messagingSenderId: "887465637651",
  appId: "1:887465637651:web:b66f4c0dfe14e371a4cce6",
  measurementId: "G-P33FSE0J5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;