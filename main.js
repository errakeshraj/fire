// Modules
import { signup } from './modules/firebase.js';

// Selectors
const signupForm = document.querySelector("#signup-form");
const result = document.querySelector("#text-show");

// Functions

signupForm.onsubmit = async(e) => {
    e.preventDefault();
    const email = e.target[0].value.trim();
    const password = e.target[1].value.trim();

    try {
        const { success, error } = await signup({ email, password });
        if (success) {
            result.innerHTML = "Registration success!";
            result.className = "text-blue-500 font-semibold";
        } else {
            result.innerHTML = error;
            result.className = "text-rose-500 font-semibold";
        }
    } catch (error) {
        console.error(error);
        result.innerHTML = "An error occurred during registration.";
        result.className = "text-rose-500 font-semibold";
    }
};