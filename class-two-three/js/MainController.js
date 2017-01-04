function FirstController($scope){
  $scope.name = 'Lala';
}

angular
  .module('moduleOne')
  .MainController('MainController', MainController);
