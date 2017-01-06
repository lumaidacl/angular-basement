function FirstController(a){
  a.name = 'Lala'; //minificando
}

MainController.$inject = ['$scope'];
angular
  .module('moduleOne')
  .controller('MainController',
    ['$scope',
     '$rootScope',
    MainController
    ]);
