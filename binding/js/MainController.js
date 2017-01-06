function FirstController(a){
  a.name = 'Lala'; //minificando
}

MainController.$inject = ['$scope'];
angular
  .module('moduleOne')
  .controller('MainController', //primer argumento las dependencias, segundo la funcion
    ['$scope',
     '$rootScope',
     MainController
    ]);
