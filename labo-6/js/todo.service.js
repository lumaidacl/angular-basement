function TodoService($http){

  var API = '//jsonplaceholder.typicode.com/todos/';

  function create(){

  }
  function retrieve(){
    return $http.get(API).then(function (response){
      return response.data.splice(0, 10);
    });
  }
  function update(todo){
    return $http.put(API + todo.id).then(function (response)){
      return response.data;
    }
  }
  function remove(){

  }
  return {
    create: create
    retrieve: retrieve
    update: update
    remove: remove
  };
}

angular
  .module('app')
  .factory('TodoService', TodoService);
