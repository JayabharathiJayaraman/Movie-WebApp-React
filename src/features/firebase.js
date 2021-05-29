import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // copy and paste your firebase credential here
    apiKey: "AIzaSyB5MW-hIcj60cueZhD0KRkQtnK312PMoKE",
    authDomain: "movie-webapp-cef6b.firebaseapp.com",
    projectId: "movie-webapp-cef6b",
    storageBucket: "movie-webapp-cef6b.appspot.com",
    messagingSenderId: "1004483582988",
    appId: "1:1004483582988:web:da1aaddec7430f04b32229",
    measurementId: "G-863BQJNRRM"
});

const db = firebaseApp.firestore();

export { db };