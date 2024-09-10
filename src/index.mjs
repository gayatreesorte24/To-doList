const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoSubmit = document.querySelector(".todo-submit");
const todoList = document.querySelector(".todo-list");
let editMode = false;
let editItem = null;

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    if (editMode) {
      editItem.firstChild.textContent = todoText;
      todoSubmit.innerText = "Add todo";
      editMode = false;
      editItem = null;
    } else {
      addToItemToList(todoText);
    }

    todoInput.value = "";
  } else {
    alert("Please enter Valid Input");
  }
});

todoList.addEventListener("click", function (event) {
  event.preventDefault();
  const target = event.target;
  if (target.tagName === "BUTTON") {
    const todoItem = target.parentNode;
    if (target.innerText === "Remove") {
      todoItem.remove();
    } else if (target.innerText === "Edit") {
      editMode = true;
      editItem = todoItem;
      todoSubmit.innerText = "Edit todo";
      todoInput.value = todoItem.firstChild.textContent;
      todoInput.focus();
    }
  }
});

function addToItemToList(todoText) {
  const todoItem = document.createElement("li");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  todoItem.innerHTML = `<span>${todoText}</span>`;
  editButton.innerText = "Edit";
  deleteButton.innerText = "Remove";
  todoItem.append(editButton);
  todoItem.append(deleteButton);
  todoList.appendChild(todoItem);
}
