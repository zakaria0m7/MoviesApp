import firebase from "firebase/app";
require("firebase/auth");

const firebaseConfig = {
    apiKey: "AIzaSyBRq2LR98ylu0j_KEpNqKCJnps12rX4mUI",
    authDomain: "moviesapp-747cb.firebaseapp.com",
    databaseURL: "https://moviesapp-747cb-default-rtdb.firebaseio.com",
    projectId: "moviesapp-747cb",
    storageBucket: "moviesapp-747cb.appspot.com",
    messagingSenderId: "39579011468",
    appId: "1:39579011468:web:b80e6ae83fb45b3fefeea9",
    measurementId: "G-ZFYEPG8FH5"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
