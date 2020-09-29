import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDhUf8NBhKa8RtN3NDRwvYxomVRYGDPgUg",
    authDomain: "todo-app-54cba.firebaseapp.com",
    databaseURL: "https://todo-app-54cba.firebaseio.com",
    projectId: "todo-app-54cba",
    storageBucket: "todo-app-54cba.appspot.com",
    messagingSenderId: "342346264670",
    appId: "1:342346264670:web:f5620e6c8ab5927b4384cf",
    measurementId: "G-BGVQE4PBWM"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };