function MainController(){
  // this.myArray = ['my', 'angular', 'app'];
  // this.myArray = [];
  // this.myObject = {
  //   one: 'Key1',
  //   two: 'Key2'
  // };
  this.text = 'Hello World!';
}

angular
  .module('app')
  .controller('MainController', MainController);
