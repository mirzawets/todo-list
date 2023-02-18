const todoInput = document.getElementById("todo-input");
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", formHandler);

function formHandler(event) {
  event.preventDefault();

  const taskText = todoInput.value;
  const newTask = document.createElement("li");

  newTask.innerText = taskText;

  todoList.append(newTask);

  const deleteBtn = document.createElement("button");
  deleteBtn.role = "button";
  deleteBtn.innerText = "Delete";
  deleteBtn.style.marginLeft = "15px";
  deleteBtn.onclick = () => newTask.remove();

  // deleteBtn.addEventListener("click", function () {
  //   this.closest("li").remove();
  // });

  newTask.append(deleteBtn);

  todoInput.value = "";
  todoInput.focus();
}
