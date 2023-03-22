// Wait for the document to finish loading before executing the JavaScript code
document.addEventListener('DOMContentLoaded', function() {

  // Get a reference to the input box and the add button
  const inputBox = document.getElementById('inputBox');
  const addButton = document.getElementById('addButton');

  // Add an event listener to the add button
  addButton.addEventListener('click', function() {
    // Get the value of the input box
    const task = inputBox.value;

    // If the input box is not empty, add the task to the to-do list
    if (task !== '') {
      addTask(task);
      // Clear the input box
      inputBox.value = '';
    }
  });

  // Add an event listener to the input box to detect when the user hits the Enter key
  inputBox.addEventListener('keydown', function(event) {
    // Check if the key pressed was the Enter key
    if (event.keyCode === 13) {
      // Get the value of the input box
      const task = inputBox.value;

      // If the input box is not empty, add the task to the to-do list
      if (task !== '') {
        addTask(task);
        // Clear the input box
        inputBox.value = '';
      }
    }
  });

  // Define a function to add a task to the to-do list
  function addTask(task) {
    // Get a reference to the to-do list
    const toDoList = document.getElementById('toDoList');

    // Create a new list item
    const li = document.createElement('li');

    // Create a new span element to hold the task text
    const span = document.createElement('span');
    span.textContent = task;

    // Create a new button element to delete the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    // Add an event listener to the delete button to remove the task when clicked
    deleteButton.addEventListener('click', function() {
      li.remove();
    });

    // Append the span and delete button to the list item
    li.appendChild(span);
    li.appendChild(deleteButton);

    // Append the list item to the to-do list
    toDoList.appendChild(li);
  }

  // Get a reference to the calendar container
  const calendarContainer = document.getElementById('calendarContainer');

  // Create a new iframe element for the Google Calendar and set its attributes
  const calendar = document.createElement('iframe');
  calendar.setAttribute('src', 'https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FNew_York');
  calendar.setAttribute('width', '800');
  calendar.setAttribute('height', '600');

  // Append the calendar to the calendar container
  calendarContainer.appendChild(calendar);

});
