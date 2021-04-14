import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCCyobSg2Gc_7vvr6HYwaHNRpo-VeD8os",
  authDomain: "reactnetflixclone-d1bc4.firebaseapp.com",
  projectId: "reactnetflixclone-d1bc4",
  storageBucket: "reactnetflixclone-d1bc4.appspot.com",
  messagingSenderId: "916689683281",
  appId: "1:916689683281:web:619268e2ae7969cce90970",
  measurementId: "G-K20ET68DER",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
