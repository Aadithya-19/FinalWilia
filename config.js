import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDuci-3D7gZjO4ZbNJG-RHfd33tTVY3RMw",
  authDomain: "wilia-72582.firebaseapp.com",
  databaseURL: "https://wilia-72582.firebaseio.com",
  projectId: "wilia-72582",
  storageBucket: "wilia-72582.appspot.com",
  messagingSenderId: "1073254454671",
  appId: "1:1073254454671:web:6d9e32c0cdc2fa2801a7fa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
