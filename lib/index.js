var tasks = [{"name" : "Buy Milk"}, {"name" : "Clean house"}];

function TaskList() {
  this.list = tasks;
}

TaskList.prototype.showList = function(){
  return this.list;
};
