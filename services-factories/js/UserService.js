function UserService($http) {
  var API = '//jsonplaceholder.typicode.com/users/';
  this.getUser = function (userId) {
    return $http
      .get(API + userId)
      .then(function (response){
        return response.data;
      }, function (reason){
        //error
      })
  }
  function getAllUsers() {

  }
  return {
    getUser: getUser,
    getAllUsers: getAllUsers
  };

}

angular
  .module('app')
  .factory('UserService', UserService);
//using a factory return an object sintaxis es similar cuando de crear un  modulo
