// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChnavwbnYsRjXq9CiKe3r1QpLVJZ7y82E",
    authDomain: "dress-warehouse-management.firebaseapp.com",
    projectId: "dress-warehouse-management",
    storageBucket: "dress-warehouse-management.appspot.com",
    messagingSenderId: "779428250304",
    appId: "1:779428250304:web:27f386d3bec4bdd05ea325"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;