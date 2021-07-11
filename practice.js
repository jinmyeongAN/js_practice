const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("h1")

function loginSubmit(event){
    event.preventDefault();
    const userInput = loginInput.value;
    loginForm.classList.add("hidden");
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello, ${userInput}`;
}

loginForm.addEventListener("submit",loginSubmit);