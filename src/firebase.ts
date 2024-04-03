import { initializeApp } from "firebase/app";

console.log(process.env)
const firebaseConfig = {
  apiKey: "AIzaSyAEECCAwDqBglDr5MdDKjEvTtq4famgrEo",
  authDomain: "user-base-174bd.firebaseapp.com",
  projectId: "user-base-174bd",
  storageBucket: "user-base-174bd.appspot.com",
  messagingSenderId: "713853262121",
  appId: "1:713853262121:web:3b18e85fa306e6c93a7f38",
};


const app = initializeApp(firebaseConfig);