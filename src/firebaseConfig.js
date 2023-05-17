import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAwu9nydBq3jLbfGbTfIBtYDPXeHCH7664",
  authDomain: "typeing-project.firebaseapp.com",
  projectId: "typeing-project",
  storageBucket: "typeing-project.appspot.com",
  messagingSenderId: "537328952739",
  appId: "1:537328952739:web:2bdbeb79b2833fe4e7a616",
  measurementId: "G-BYF44GX2K0",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db };
