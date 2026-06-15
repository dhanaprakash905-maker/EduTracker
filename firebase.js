// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoN46xnpOcyoQI_AYY71aL95Vl5R2fcjo",
  authDomain: "edutracker-1bb93.firebaseapp.com",
  projectId: "edutracker-1bb93",
  storageBucket: "edutracker-1bb93.firebasestorage.app",
  messagingSenderId: "805495020559",
  appId: "1:805495020559:web:5c1264c254fbcd306f977a",
  measurementId: "G-MCTES4T147"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
