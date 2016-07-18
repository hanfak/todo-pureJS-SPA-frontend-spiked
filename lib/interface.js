var list = new TaskList();
var taskID;

document.addEventListener("DOMContentLoaded", function() {
  todoList();
});

function todoList(){
  document.getElementById("task-lists").innerHTML += '<h2>List of tasks</h2>';

  list.showList().forEach(function(task, index){
    taskID = task.id;
    document.getElementById("task-lists").innerHTML += '<p id='+taskID+'>'+task.name+' <input class="btn" type="button" onclick="deleteFromList('+taskID+')" value="delete"></input></p>';
  });
}

function deleteFromList(id){
    list.deleteTask(id);
    _clearResults(id);
}

function _clearResults(id){
  var task = document.getElementById(id);
  task.outerHTML = '';
  if(list.showList().length===0){
    document.querySelectorAll("div#task-lists H2")[0].outerHTML = '';
  }
}
