import { initializeApp } from "firebase/app"; //object allows us to attached  firebase
import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

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



var provider = null;

export const selectAuthenticate = ({str}) => {
  if (str === 'google') {
    provider = new GoogleAuthProvider();    
  } else {
    provider = new GithubAuthProvider();
  }

  const auth = getAuth();

  provider.setCustomParameters({
    prompt: "select_account",
  });



  return signInWithPopup(auth, provider);

  
} 






