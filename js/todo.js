const todoForm = document.querySelector("#todo");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todolist");

//make an array for update the todo list from new input
let todoUpdated = [];

//save the previous data on localStorage into todoUpdated list
function todoPrevious(todoUpdated){
    if(localStorage.getItem("inputs")){
        todoUpdated = JSON.parse(localStorage.getItem("inputs"));
    }
}

//save the element of list
function todoSaved(input){
    //updated from previous localStorage
    todoPrevious(todoUpdated)
    //save input on the browser

    todoUpdated.push(input);
    //save the list of inputs as a string using stringifying
    localStorage.setItem("inputs",JSON.stringify(todoUpdated));
}

//delete an element of list
function todoDelete(event){
    const li = event.target.parentElement;
    li.remove()
}
//make a new tag list on the browser
function todoPaint(input){
    //We should make the li tag in the existing ul tag
    const li = document.createElement("li");
    const span = document.createElement("span");
    //make a button
    const button = document.createElement("button");
    span.innerText = input;
    button.innerText = "X";
    //Also I'm going to add span tag in the li tag
    li.appendChild(span);
    todoList.appendChild(li);
    li.appendChild(button)
    //Delete an element of list if you press the "X" button
    button.addEventListener("click", todoDelete);
}

//get the submitted input
function todoSubmit(event){
    event.preventDefault();
    const input = todoInput.value;
    todoInput.value = "";
    todoSaved(input);
    todoPaint(input);
}

todoForm.addEventListener("submit", todoSubmit);

//Execute the todoPaint here, because when I update the page, it will be excuted
const savedTodoList = JSON.parse(localStorage.getItem("inputs"));
console.log(savedTodoList);
todoUpdated.forEach(todoPaint);