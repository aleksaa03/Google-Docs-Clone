import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC7ZXGFRndxOgDftpfid3xQCJ6Oy2V11vA",
  authDomain: "docs-clone-b4d95.firebaseapp.com",
  projectId: "docs-clone-b4d95",
  storageBucket: "docs-clone-b4d95.appspot.com",
  messagingSenderId: "718180389834",
  appId: "1:718180389834:web:7a40ea767c493a3f973533",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
const db = app.firestore();

const SignIn = () => auth.signInWithPopup(provider);
const SignOut = () => auth.signOut();

export { auth, db, provider, SignIn, SignOut };
