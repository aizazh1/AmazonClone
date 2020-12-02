import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAaN5JGFA9q6z_vaZMgCS7IOK4vPu_gYn4",
  authDomain: "clone-ecommerce.firebaseapp.com",
  databaseURL: "https://clone-ecommerce.firebaseio.com",
  projectId: "clone-ecommerce",
  storageBucket: "clone-ecommerce.appspot.com",
  messagingSenderId: "947858438448",
  appId: "1:947858438448:web:05f3ca7237a1c9579cf0f5"
};

const FirebaseApp = firebase.initializeApp(firebaseConfig);

const db = FirebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
