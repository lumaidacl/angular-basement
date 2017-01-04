function FirstController(a, b){
  a.name = 'Lala'; //minificando
}

MainController.$inject = ['$scope'];
angular
  .module('moduleOne')
  .MainController('MainController', //primer argumento las dependencias, segundo la funcion
    ['$scope',
     '$rootScope',
     MainController
    ]);
