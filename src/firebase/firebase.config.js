// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWTi3Q1ynGj4Cy03UNsZYdDr18SeCSack",
  authDomain: "learning-mates-client.firebaseapp.com",
  projectId: "learning-mates-client",
  storageBucket: "learning-mates-client.appspot.com",
  messagingSenderId: "610848319505",
  appId: "1:610848319505:web:ba7789ca7275c1f51b29b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;