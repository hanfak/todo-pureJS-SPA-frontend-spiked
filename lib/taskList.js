var tasks = [{"id" : 1, "name" : "Buy Milk"}, {"id" : 2, "name" : "Clean house"}, {"id" : 3, "name" : "Go to gym"}];

function TaskList() {
  this._list = tasks;
}

TaskList.prototype.showList = function(){
  return this._list;
};

TaskList.prototype.deleteTask = function(id){
  this._list = this._list.filter(function( obj ) {
    return obj.id !== id;
  });
};

TaskList.prototype.addTask = function(name){
  this._list.push({"id":this._newId(), "name" : name});
};

TaskList.prototype.editTask = function(newTaskName, oldTaskName){
  var object = this._list.filter(function( obj ) {
    return obj.name === oldTaskName;
  });
  position = this._list.indexOf(object[0]);

  this._list[position].name = newTaskName;
};

TaskList.prototype._newId = function(){
  if(this._list.length !== 0){
    return this._list[this._list.length - 1].id + 1;
  } else {
    return 1;
  }
};
