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
