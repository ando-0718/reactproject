import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC7fBWnobRd2n-JcztMdfFYOvKmHqEUW9I",
    authDomain: "line-clon-220ab.firebaseapp.com",
    projectId: "line-clon-220ab",
    storageBucket: "line-clon-220ab.appspot.com",
    messagingSenderId: "680788394702",
    appId: "1:680788394702:web:46312a30f164f6270f869f"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };