const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("h1")

function loginSubmit(event){
    event.preventDefault();
    const userInput = loginInput.value;
    localStorage.setItem(userInput_key, userInput)
    loginForm.classList.add(hidden);
    greeting.classList.remove(hidden);
    greeting.innerText = `Hello, ${userInput}`;
}
//localStorage
const userInput_key = "userInput"; //If this variable is initiated under getItem, not work.
const savedUserInput = localStorage.getItem(userInput_key)
const hidden = "hidden";

if (savedUserInput === null){
    loginForm.classList.remove(hidden);
    greeting.classList.add(hidden);
    loginForm.addEventListener("submit",loginSubmit);
}
else{
    loginForm.classList.add(hidden);
    greeting.classList.remove(hidden);
    greeting.innerText = `Hello, ${savedUserInput}`;
}


