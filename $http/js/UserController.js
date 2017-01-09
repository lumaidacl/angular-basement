function UserController($http) {
  var ctrl = this;
  var API = '//jsonplaceholder.typicode.com/users/'; //hold simple string
  this.userId = '';
  this.chosenUser = {};
  this.getUser = function () {
    if(!this.userId){
      return;
    }
    $http
      .get(API + this.userId)
      .then(function (response){
        ctrl.chosenUser = response.data;
        // console.log(response);
        //success
      }, function (reason){

      })
    // $http.post()
    // $http.put()
    // $http.delete()
  };
}
// id corresponde al usuario utilizando la API
angular
  .module('app')
  .controller('MainController', MainController);
