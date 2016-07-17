var list = new TaskList();

document.addEventListener("DOMContentLoaded", function() {
  todoList();
});

function todoList(){
  list.showList().forEach(function(task, index){
    return document.getElementById("task-lists").innerHTML += '<p>'+task.name+'</p>';
  });
}
