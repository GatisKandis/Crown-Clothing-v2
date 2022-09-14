import { initializeApp } from "firebase/app"; //object allows us to attached  firebase
import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtAV1tT8UifkAJ_eBAGeFVd68c6MDGhM4",
  authDomain: "crown-clothing-db-5361b.firebaseapp.com",
  projectId: "crown-clothing-db-5361b",
  storageBucket: "crown-clothing-db-5361b.appspot.com",
  messagingSenderId: "774319383590",
  appId: "1:774319383590:web:e91c681cd463896ebbf2e7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userAuthRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userAuthRef);

  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userAuthRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user:", error.message);
    }
  }

  return userAuthRef;
};
