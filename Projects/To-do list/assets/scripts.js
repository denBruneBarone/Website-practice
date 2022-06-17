// Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-btn')
const todoList = document.querySelector('.todo-list')

// Event listeners   FIXXXXXXXXXXXXXXXXXXXXX
// todoButton.addEventListener('click', (todoInput.value === "") ? alertFunc : addTodo);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', completeDeleteButtons)

// Functions
function addTodo(event) {
   // prevent form submitting continually
   event.preventDefault();

   //Exits function if no task added
   if (todoInput.value === "") { alert("No Task Added"); return; }

   createList();

   //clear todo input value
   todoInput.value = "";
}

function createList() {
   //Create DIV for todo list
   const todoDiv = document.createElement('div');
   todoDiv.classList.add("todo")

   //Create LI
   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value;
   newTodo.classList.add('todo-item');

   // add LI to DIV
   todoDiv.appendChild(newTodo);

   // complete button
   const completeButton = document.createElement('button');
   completeButton.innerHTML = '<i class="fas fa-check"></i>'
   completeButton.classList.add('complete-button')

   //add check button to Div
   todoDiv.appendChild(completeButton);

   // delete button
   const deleteButton = document.createElement('button');
   deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
   deleteButton.classList.add('delete-button')

   //add check button to DIV
   todoDiv.appendChild(deleteButton);

   // append todo DIV to UL in HTML
   todoList.appendChild(todoDiv);
}

function completeDeleteButtons(event) {
   console.log(event.target)
   const item = event.target;
   if (item.classList[0] === "delete-button") {
      const deleteButton = item.parentElement
      deleteButton.classList.add("fall");
      deleteButton.addEventListener('transitionend', function () {
         deleteButton.remove();
      });

   }

   if (item.classList[0] === "complete-button")
      item.parentElement.classList.toggle("completed");
}