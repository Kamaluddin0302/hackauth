import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'


var firebaseConfig = {
    apiKey: "AIzaSyBafvODda7DUlGIN_uhXghXhkDJv_Ecu_A",
    authDomain: "hecathon.firebaseapp.com",
    databaseURL: "https://hecathon.firebaseio.com",
    projectId: "hecathon",
    storageBucket: "hecathon.appspot.com",
    messagingSenderId: "955347505894",
    appId: "1:955347505894:web:dd0e8752c6a0cf38a36127",
    measurementId: "G-C3R1KRP5QV"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);