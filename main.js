// Modules
import { signin } from "./modules/firebase";

// Selectors
const loginForm = document.querySelector("#login-form");

// Functions
loginForm.onsubmit = async(e) => {
    e.preventDefault();
    const user = {
        email: e.target[0].value.trim(),
        password: e.target[1].value.trim()
    };

    try {
        const res = await signin(user);
        console.log(res);
    } catch (error) {
        console.error(error);
    }
};