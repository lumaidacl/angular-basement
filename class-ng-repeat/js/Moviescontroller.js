function TodoController(){
  this.list = [{
    title: 'First element',
    completed: true
  },{
    title: 'Second element',
    completed: false
  }];
}
angular
  .module('app')
  .controller('MoviesController', MoviesController);
