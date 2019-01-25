
const tasks = [];

//Define UI variables
const input = document.getElementById('task');
const list = document.getElementById('tasks');
const form = document.getElementById('control');
const completed = document.getElementById('completed');

form.addEventListener('submit', addTask);

function addTask(e){
  e.preventDefault();

  if (input.value != ''){
    const task = { text: input.value, checked: false};

    input.placeholder = '';
    tasks.push(task)
    console.log(task);
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

  antallCompleted = 0;

  for(let task of tasks){
    const listElement = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');

    span.innerText = task.text;
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', tasks.indexOf(task));
    checkbox.addEventListener('click', todoWasChecked);

    if (task.checked) {
      checkbox.setAttribute('checked', true);
      antallCompleted++;
      span.style.textDecoration = 'line-through';
    }

    listElement.appendChild(checkbox);
    listElement.appendChild(span);
    list.appendChild(listElement);

  }
  completed.innerText = antallCompleted + '/' + tasks.length + ' completed';
}

redrawList();
