// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth,signInWithPopup,
signInWithEmailAndPassword,
 createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut} from "firebase/auth";
import {
    getFirestore,
    query,
   getDocs,
  collection,
   where,
addDoc} from "firebase/firestore";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/filestore";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSGDqtvhTI2JIVq4wsDPxsHxPQCXxGXPQ",
  authDomain: "meetup-5d60e.firebaseapp.com",
  projectId: "meetup-5d60e",
  storageBucket: "meetup-5d60e.appspot.com",
  messagingSenderId: "1064648260499",
  appId: "1:1064648260499:web:8e47419a8dd1fd0c538666",
  measurementId: "G-CDW46WKD8S"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const app = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  let user = null;
  try {
    const res = await signInWithPopup(auth, googleProvider);
    user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
      //redirect user to /main page

    }
  } catch (err) {
    console.error(err);
    alert(err.message);
    //redirect user to /
  }
  console.log(user);
  return user;
};
export { auth, db, signInWithGoogle };