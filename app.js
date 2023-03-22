const inputBox = document.getElementById('inputBox');
const addButton = document.getElementById('addButton');
const toDoList = document.getElementById('toDoList');

addButton.addEventListener('click', addTodo);

function addTodo() {
  if (inputBox.value === '') {
    return;
  }

  const newTodo = document.createElement('li');
  const todoText = document.createElement('span');
  todoText.innerText = inputBox.value;
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'X';
  deleteButton.addEventListener('click', deleteTodo);
  newTodo.appendChild(todoText);
  newTodo.appendChild(deleteButton);
  toDoList.appendChild(newTodo);
  inputBox.value = '';
}

inputBox.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    addTodo();
  }
});

function deleteTodo() {
  this.parentNode.remove();
}
