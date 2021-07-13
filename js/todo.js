const todoForm = document.querySelector("#todo");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todolist");

//make an array for update the todo list from new input
let todoUpdated = [];

//save the element of list
function todoSaved(){
    //save input on the browser
    //save the list of inputs as a string using stringifying
    localStorage.setItem("inputs",JSON.stringify(todoUpdated));
}

//delete an element of list
function todoDelete(event){
    const li = event.target.parentElement;
    li.remove()
    //remove the element of array with target id
    todoUpdated = todoUpdated.filter((element) => element.id !== parseInt(li.id)); // type is different
    //save to browser
    todoSaved();
}
//make a new tag list on the browser
function todoPaint(inputObj){
    //We should make the li tag in the existing ul tag
    const li = document.createElement("li");
    const span = document.createElement("span");
    //make a button
    const button = document.createElement("button");
    span.innerText = inputObj.value;
    button.innerText = "X";
    //put id into li tag
    li.id = inputObj.id;
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
    //make the element into object with value and id
    const inputObj = {id: Date.now(), value: input}
    todoUpdated.push(inputObj);
    todoSaved();
    todoPaint(inputObj);
}

todoForm.addEventListener("submit", todoSubmit);

//For Refresh 
const savedDos = localStorage.getItem("inputs")
//Execute the todoPaint here, because when I update the page, it will be excuted
if (savedDos){
    //todoUpdated array updated using previous data
    todoUpdated = JSON.parse(savedDos);
    todoUpdated.forEach(todoPaint);
}