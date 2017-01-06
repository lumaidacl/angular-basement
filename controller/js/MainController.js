function FirstController($scope){
  $scope.name = 'Lala';
}

angular
  .module('moduleOne')
  .controller('MainController', MainController);
