import firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from "../configs/firebase";

firebase.initializeApp(firebaseConfig);

const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();

export function signInWithGoogle() {
  return firebase.auth().signInWithPopup(providerGoogle); // la apelare, face logarea cu google si returneaza un promise cu rezultatul logarii
}

export function signInWithFacebook() {
  return firebase.auth().signInWithPopup(providerFacebook); // la apelare, face logarea cu facebook si returneaza un promise cu rezultatul logarii
}

export function signOut() {
  return firebase.auth().signOut();
}
