import firebase from "firebase/app";
require("firebase/auth");

const firebaseConfig = {
    /* apikey */
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
