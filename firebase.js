// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCin7A5bNPNK_MtBb2ez0LuK8V2A9x07lA",
  authDomain: "uber-next-clone-live-a9ba5.firebaseapp.com",
  projectId: "uber-next-clone-live-a9ba5",
  storageBucket: "uber-next-clone-live-a9ba5.appspot.com",
  messagingSenderId: "645940483516",
  appId: "1:645940483516:web:bcae10aded35747f4fc7b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}