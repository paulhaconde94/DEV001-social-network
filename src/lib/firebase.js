// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
} from 'firebase/firestore';
import {
  getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBTiBiCCr1QkY-YWEuLdxb5sJ0CItpWieo',
  authDomain: 'logos-bdd22.firebaseapp.com',
  projectId: 'logos-bdd22',
  storageBucket: 'logos-bdd22.appspot.com',
  messagingSenderId: '1040180406651',
  appId: '1:1040180406651:web:c25fa68a4846b2fee8b5de',
  measurementId: 'G-5973XCLMQE',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const signInGoogle = () => signInWithPopup(auth, provider);

export const sendPost = (post) => addDoc(collection(db, 'comment'), { post });

export const getPost = () => getDocs(collection(db, 'comment'));

export const ongetPost = (callback) => onSnapshot(collection(db, 'comment'), callback);
