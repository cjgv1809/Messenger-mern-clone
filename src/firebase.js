import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyAjgReIMiy1GeDpbIxk7xfdll6Cxfnri3c",
  authDomain: "messenger-mern-clone-cb23d.firebaseapp.com",
  projectId: "messenger-mern-clone-cb23d",
  storageBucket: "messenger-mern-clone-cb23d.appspot.com",
  messagingSenderId: "1070197091730",
  appId: "1:1070197091730:web:5d75e6b7bec33ff134e54b",
  measurementId: "G-6E8F1VE0RL",
});

const db = firebaseApp.firestore();

export default db;
