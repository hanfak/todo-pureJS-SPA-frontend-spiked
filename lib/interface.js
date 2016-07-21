var list = new TaskList();
var taskID;
var taskName;

document.addEventListener("DOMContentLoaded", function() {
  todoList();
  edit();
});

function todoList(){
  document.getElementById("task-lists").innerHTML += '<h2>List of tasks</h2>';

  list.showList().forEach(function(task, index){
    taskID = task.id;
    taskName = task.name;

    document.getElementById("task-lists").innerHTML += _taskHtml(taskID,taskName);
  });
}

function edit() {
  var taskList =document.getElementById("task-lists");
  var tasks = taskList.querySelectorAll("div");
  var inputs = taskList.querySelectorAll("input.edit-task");

  for (var i = 0; i < tasks.length ; i++) {
    tasks[i].addEventListener("click", editItem);
    inputs[i].addEventListener("blur", updateItem);
    // inputs[i].addEventListener("keypress", itemKeypress);
  }
}

function editItem() {
  this.className = "edit";

  var input = this.querySelector("input");
  input.focus();
  input.setSelectionRange(0, input.value.length);
  taskName = input.value;
}

function updateItem() {
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = "";
  list.editTask(this.value, taskName);
}

// function itemKeypress(event) {
//   if (event.which === 13) {
//     this.previousElementSibling.innerHTML = this.value;
//     this.parentNode.className = "";
//
//     list.editTask(this.value, taskName);
//   }
// }


function deleteFromList(id){
    list.deleteTask(id);
    _clearTask(id);
}

function showAddTaskForm(id) {
  // console.log('kik');
  var e = document.getElementById(id);
 if(e.style.display == 'block')
    e.style.display = 'none';
 else
    e.style.display = 'block';
    _SetFocus();
}

function addTaskToList() {
  var name = document.getElementById("name").value;
  list.addTask(name);
  document.getElementById("name").value = '';
  _showNewTask();
}

function checkSubmit(e){
  if(e.keyCode == 13) {
    addTaskToList();
  }
}

function _clearTask(id){
  var task = document.getElementById(id);
  task.outerHTML = '';
  if(list.showList().length===0){
    document.querySelectorAll("div#task-lists H2")[0].outerHTML = '';
  }
}

function _SetFocus() {
  var locationElement = document.getElementById("name");
  if(locationElement !== null){
    locationElement.focus();
  }
}

function _showNewTask() {
  var newTask = list.showList()[list.showList().length - 1];
  taskID = newTask.id;
  taskName = newTask.name;

  document.getElementById("task-lists").innerHTML += _taskHtml(taskID,taskName);

  edit();
}

function _taskHtml(id, name) {
 return '<div id=' + id + '>' +
 '<p>' + name + '</p>' +
 '<input type="text" class="edit-task" value="' + name + '"></input>' +
 '<input class="btn-delete" type="button" onclick="deleteFromList(' + id + ')" value="delete"></input>' +
 '</div>';
}
