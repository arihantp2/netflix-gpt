// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX0-JwZBz_Pn_Ucx6JJkYG3izxGEFuEuI",
  authDomain: "netflixgpt-11efe.firebaseapp.com",
  projectId: "netflixgpt-11efe",
  storageBucket: "netflixgpt-11efe.appspot.com",
  messagingSenderId: "414544237541",
  appId: "1:414544237541:web:e60300a72ba67875fcd50c",
  measurementId: "G-1Z4CGNKDYY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
