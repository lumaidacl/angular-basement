function TodoController(){
  ctrl.newTodo = '';
  ctrl.list= [];
  function getTodos(){
    TodoService
      .retrieve()
      .then(function (response){
        ctrl.list = response;
      });
  }

  this.list = [{
    title: 'First todo item',
    completed: true
  },{
    title: 'Second todo item',
    completed: false
  },{
    title: 'Third todo item',
    completed: true
  }];

  ctrl.addTodo = function (){
    ctrl.list.unshift({
      title: this.newTodo,
      completed: false
    });
    ctrl.newTodo = '';
  };

  ctrl.removeTodo = function (item, index){
    ctrl.list.splice(index, 1);
  };

  ctrl.updateTodo = function (item, index){
    TodoService
      .update(item);
  };

  ctrl.getRemaining = function (){
    return ctrl.list.filter(function (item){
      return !item.completed;
    });
  };
  getTodos();
}
angular
  .module('app')
  .controller('TodoController', TodoController);
