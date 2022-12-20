// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
