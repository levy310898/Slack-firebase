import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyCEJ3v94QBqvRJWqzedbxE-icklI9m67QY",
  authDomain: "slack-a6dcd.firebaseapp.com",
  projectId: "slack-a6dcd",
  storageBucket: "slack-a6dcd.appspot.com",
  messagingSenderId: "543092575958",
  appId: "1:543092575958:web:f664940e7979b073678377",
  measurementId: "G-ZPHJRM2673"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

const db = firebase.firestore;

export { db, auth };

export default firebase;