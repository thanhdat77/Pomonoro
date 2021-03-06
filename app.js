// Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoFilter = document.querySelector(".filter-todo")

// Event Listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);
todoFilter.addEventListener('click', filterTodo);
//Funtions
function addTodo(event) {
    //Stop refesh html
    event.preventDefault();

    // add div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //add new Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //add button
    const completButton = document.createElement("button");
    completButton.innerHTML = '<i class="fas fa-check"><i>';
    completButton.classList.add("complete-btn");
    todoDiv.appendChild(completButton);

    // trash button
    const deletButton = document.createElement("button");
    deletButton.innerHTML = '<i class="fas fa-trash "><i>';
    deletButton.classList.add("delete-btn");
    todoDiv.appendChild(deletButton);
    todoList.appendChild(todoDiv);
    // clear value in input
    todoInput.value = "";

}
function deleteTodo(e) {
    const item = e.target;
    console.l
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
            todo.remove()
        });
    }
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "complete":
                if (todo.classList.contains("complete")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = none;
                }
                break;
            case "uncomplete":
                if (!todo.classList.contains("uncomplete")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = none;
                }
                break;
        }
    }
    );

}
