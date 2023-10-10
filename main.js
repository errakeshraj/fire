// Selectors
const form = document.querySelector("#form");
const one = document.querySelector("#one")
const two = document.querySelector("#two")

// Function
form.onsubmit = (e) => {
    e.preventDefault();
    var value = e.target[0].value;

    if (value.startsWith('a')) {
        one.style.color = "red",
            two.style.color = "blue"
        return null
    }

    alert('hellow')

};