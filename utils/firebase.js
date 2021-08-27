import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

import Axios from "axios";

var firebaseConfig = {
  apiKey: "AIzaSyDel6_dqHwLvVCDLIsXBMDdy8KxFnWF2-I",
  authDomain: "portfolio-a6441.firebaseapp.com",
  projectId: "portfolio-a6441",
  storageBucket: "portfolio-a6441.appspot.com",
  messagingSenderId: "343608240535",
  appId: "1:343608240535:web:bddd917c90e14e5c81bcd2",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
