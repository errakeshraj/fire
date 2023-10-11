// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { createUserWithEmailAndPassword, getAuth } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyAD5LgNn2ySKawoLawe-Gv59-yajMlPWss",
    authDomain: "fire-6f9c4.firebaseapp.com",
    projectId: "fire-6f9c4",
    storageBucket: "fire-6f9c4.appspot.com",
    messagingSenderId: "762629502645",
    appId: "1:762629502645:web:4b177352229a4af7e8b0fc",
    measurementId: "G-HC1LMNG5HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the authentication instance
const auth = getAuth(app);

export const signup = async(user) => {
    try {
        // Use createUserWithEmailAndPassword to create a new user
        const res = await createUserWithEmailAndPassword(auth, user.email, user.password);
        return {
            success: true,
            user: {
                id: uid
            }
        }
    } catch (err) {
        return {
            success: false,
            error: error.message
        }
    }
}