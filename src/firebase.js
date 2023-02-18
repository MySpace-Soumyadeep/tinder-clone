// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBzsJQjHw1VYYjcnTX1jX7fHPsQ6j8YkJI",
    authDomain: "tinder-clone-7027c.firebaseapp.com",
    projectId: "tinder-clone-7027c",
    storageBucket: "tinder-clone-7027c.appspot.com",
    messagingSenderId: "908295740818",
    appId: "1:908295740818:web:f52c357ac530d7bc4fb54b",
    measurementId: "G-W4EEJGHD83"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;