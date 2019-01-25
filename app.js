
const tasks = [];

//Define UI variables
const input = document.getElementById('task');
const list = document.getElementById('tasks');
const form = document.getElementById('control');
const completed = document.getElementById('completed');

form.addEventListener('submit', addTask);

const number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function addTask(e){
  e.preventDefault();

  if (input.value != ''){
    const task = { text: input.value, checked: false};

    input.placeholder = '';
    tasks.push(task)
    redrawList();

  } else {
    input.placeholder = 'Give med a task';
  }
  input.value = '';

}

function todoWasChecked(e){
  const index = event.target.id;

  tasks[index].checked = !tasks[index].checked;
  redrawList();
}

function redrawList(){

  list.innerHTML = '';

  totalCompleted = 0;

  for(let task of tasks){
    const listElement = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');

    span.innerText = task.text;
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', tasks.indexOf(task));
    checkbox.addEventListener('click', todoWasChecked);
    listElement.setAttribute("class", 'card');

    if (task.checked) {
      checkbox.setAttribute('checked', true);
      totalCompleted++;
      span.style.textDecoration = 'line-through';
    }

    listElement.appendChild(checkbox);
    listElement.appendChild(span);
    list.appendChild(listElement);

  }

  let total = "";
  if (tasks.length < 10) {
    total = number[tasks.length]
  }
  let done = "";
  if (totalCompleted < 10){
    done = number[totalCompleted]
  }
  let task = "tasks";
  if (tasks.length === 1){
    task = "task"
  }
  if (tasks.length === totalCompleted && tasks.length !== 0){
    completed.innerText = 'You have completed all of your tasks'
  }else {
    completed.innerText = 'You have completed ' + done + ' of your ' + total + " " +task;
  }

}

redrawList();
