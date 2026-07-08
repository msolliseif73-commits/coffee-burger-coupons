// CONFIGURAZIONE FIREBASE

const firebaseConfig = {
  apiKey: "AIzaSyBcMSMGldPfO6VriCMXEybQfCOY_iPDo-o",
  authDomain: "coffee-burger-coupons.firebaseapp.com",
  projectId: "coffee-burger-coupons",
  storageBucket: "coffee-burger-coupons.firebasestorage.app",
  messagingSenderId: "629773023583",
  appId: "1:629773023583:web:279df3b1d6fb54d36edeea"
  measurementId: "G-TET2SF5Z1Q"
};


// INIZIALIZZA FIREBASE

firebase.initializeApp(firebaseConfig);


// COLLEGAMENTO FIRESTORE

const db = firebase.firestore();


// TEST

console.log("Firebase collegato!");
