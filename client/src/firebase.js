// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "neoestate-de8aa.firebaseapp.com",
  projectId: "neoestate-de8aa",
  storageBucket: "neoestate-de8aa.appspot.com",
  messagingSenderId: "1017709025518",
  appId: "1:1017709025518:web:6529db3002f047212cfbff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);