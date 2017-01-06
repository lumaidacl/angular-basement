function MainController(){
  this.person = {
    name: 'Lala',
    location: 'Cochabamba, Bo'
  };
}

angular
  .module('app')
  .controller('MainController', MainController);
