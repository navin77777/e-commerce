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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const creeateAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        creeateAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user : ", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(configFirebase);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
