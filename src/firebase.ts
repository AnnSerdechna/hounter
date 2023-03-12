import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import firebase from 'firebase/compat'
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider

const API_KEY = import.meta.env.VITE_API_KEY

const firebaseConfig = {
  apiKey: "AIzaSyB6s6QY7eXiYNptdIQnW8p9oUJkLkr-l7E",
  authDomain: "hounter-3cbd1.firebaseapp.com",
  projectId: "hounter-3cbd1",
  storageBucket: "hounter-3cbd1.appspot.com",
  messagingSenderId: "284474500758",
  appId: "1:284474500758:web:ff3e747902eaba5c8204b7"
};

export const app = initializeApp(firebaseConfig);

export const googleAuthProvider = new GoogleAuthProvider()

export const db = getDatabase(app)
