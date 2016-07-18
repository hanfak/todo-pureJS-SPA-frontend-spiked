var list = new TaskList();
var taskID;

document.addEventListener("DOMContentLoaded", function() {
  todoList();
});

function todoList(){
  document.getElementById("task-lists").innerHTML += '<h2>List of tasks</h2>';

  list.showList().forEach(function(task, index){
    taskID = task.id;
    document.getElementById("task-lists").innerHTML += '<p id='+taskID+'>'+task.name+' <input class="btn-delete" type="button" onclick="deleteFromList('+taskID+')" value="delete"></input></p>';
  });
}

function deleteFromList(id){
    list.deleteTask(id);
    _clearTask(id);
}

function showAddTaskForm(id) {
  console.log('kik');
  var e = document.getElementById(id);
 if(e.style.display == 'block')
    e.style.display = 'none';
 else
    e.style.display = 'block';
    _SetFocus();
}

function addTaskToList() {
  var name = document.getElementById("name").value;
  console.log(name);
  list.addTask(name);
  document.getElementById("name").value = '';
  _showNewTask();
  _SetFocus();
}

function checkSubmit(e){
  if(e.keyCode == 13) {
    console.log(e);
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
  document.getElementById("task-lists").innerHTML += '<p id='+taskID+'>'+newTask.name+' <input class="btn-delete" type="button" onclick="deleteFromList('+taskID+')" value="delete"></input></p>';
}
