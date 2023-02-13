import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBDAr5UFszJsxkxe0uobzbb6fhjfXj6fGo",
    authDomain: "roadride-5b3d5.firebaseapp.com",
    projectId: "roadride-5b3d5",
    storageBucket: "roadride-5b3d5.appspot.com",
    messagingSenderId: "733906950033",
    appId: "1:733906950033:web:7e3bf33aeba94d23f92c30"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
