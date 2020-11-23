import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD5_R9E_F1sfNwm1DDzB_lhc-qhQSSplOQ",
  authDomain: "project-clone-15213.firebaseapp.com",
  databaseURL: "https://project-clone-15213.firebaseio.com",
  projectId: "project-clone-15213",
  storageBucket: "project-clone-15213.appspot.com",
  messagingSenderId: "715179471567",
  appId: "1:715179471567:web:c676e819c0744dcf2b3dba",
};

const FirebaseApp = firebase.initializeApp(firebaseConfig);

const db = FirebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
