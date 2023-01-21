import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAIXgtAouXus46RHtx8q9uRauHAh4iOYW0",
  authDomain: "fir-auth-machine.firebaseapp.com",
  projectId: "fir-auth-machine",
  storageBucket: "fir-auth-machine.appspot.com",
  messagingSenderId: "636152984685",
  appId: "1:636152984685:web:c42b76060502967dabfb64",
  measurementId: "G-Z9GV47H3SX"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth();

export {app,auth}
