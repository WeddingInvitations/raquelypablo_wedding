// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
// import { enableLogging } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB6A1C7WKLCQuZTpKQebyjB5rQaZC8unLk",
  authDomain: "raquelypablowedding.firebaseapp.com",
  projectId: "raquelypablowedding",
  storageBucket: "raquelypablowedding.firebasestorage.app",
  messagingSenderId: "256521654429",
  appId: "1:256521654429:web:12e43b306de23c2876c474",
  measurementId: "G-H9XPVZHRVN"
};


export const firebaseApp = initializeApp(firebaseConfig);
// enableLogging(true);