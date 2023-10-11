import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

initializeApp(firebaseConfig);
const auth = getAuth();

export const signin = async({ email, password }) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password); // Fixed the typo 'mail' to 'email'
        const token = await user.getIdToken()
        return {
            success: true,
            user: res.user, // You can access the signed-in user here
        };
    } catch (error) {
        return {
            success: false,
            error: error.message // Access the error message for debugging
        };
    }
};