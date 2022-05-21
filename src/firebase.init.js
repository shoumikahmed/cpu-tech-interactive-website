// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8bPE54iqftdQqphAMvTmyXOj4qjfNZb4",
    authDomain: "cpu-manufacturer-assignm-47d23.firebaseapp.com",
    projectId: "cpu-manufacturer-assignm-47d23",
    storageBucket: "cpu-manufacturer-assignm-47d23.appspot.com",
    messagingSenderId: "939508895726",
    appId: "1:939508895726:web:1a9bed157dc2ea811948ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;