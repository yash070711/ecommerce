import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

/*const firebaseConfig = {
  apiKey: "AIzaSyBOK7x5N5UnjY4TDqndzH7l5tvdNIsWFRc",
  authDomain: "todo-app-e3cf0.firebaseapp.com",
  projectId: "todo-app-e3cf0",
  storageBucket: "todo-app-e3cf0.appspot.com",
  messagingSenderId: "940016886081",
  appId: "1:940016886081:web:91686613f16b1b1f8001c0",
  measurementId: "G-JHPC7TP12K"
};*/
const firebaseConfig = {
  apiKey: "AIzaSyDK8mcNTp4KC3R4X80MSpdPI9htxyWreN0",
  authDomain: "ecommerce-37864.firebaseapp.com",
  projectId: "ecommerce-37864",
  storageBucket: "ecommerce-37864.appspot.com",
  messagingSenderId: "1005197616705",
  appId: "1:1005197616705:web:dfbfb26915f42f46c488c0",
  measurementId: "G-4TFT2W3ZFM"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };