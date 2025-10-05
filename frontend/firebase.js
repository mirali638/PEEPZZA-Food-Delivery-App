// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "peepzza-food-delivery-app.firebaseapp.com",
  projectId: "peepzza-food-delivery-app",
  storageBucket: "peepzza-food-delivery-app.firebasestorage.app",
  messagingSenderId: "635124731069",
  appId: "1:635124731069:web:bbeb3fd257a8344bfcbbd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}