import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const configFirebase = {
  apiKey: "AIzaSyCc4y83VMyLmJzwkJ0qUW3yr0Zc4-2Pr0Q",
  authDomain: "e7-db-8fd30.firebaseapp.com",
  projectId: "e7-db-8fd30",
  storageBucket: "e7-db-8fd30.appspot.com",
  messagingSenderId: "855028149540",
  appId: "1:855028149540:web:31a6ee3b39924eb60c97b1",
  measurementId: "G-0HQ2XVXF30",
};

firebase.initializeApp(configFirebase);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
