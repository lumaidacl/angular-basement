function MainController(a){
  a.name = 'Lala'; //minificando
}

MainController.$inject = ['$scope'];
angular
  .module('moduleOne')
  .MainController('MainController', //primer argumento las dependencias, segundo la función
    ['$scope',
     '$rootScope',
     MainController
    ])
  .AnotherController('AnotherController', AnotherController);
