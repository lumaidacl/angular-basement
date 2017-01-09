function stretch(){
  return {
    restrict: 'A', //A === attribute adding an existing element with a special behaviour  //E === element <my-directive> <input stretch>
    link: function ($scope, $element, $attrs) {
      var element = $element[0];
      element.addEventListener('focus', function() {
        this.style.width = 250;
      });
      element.addEventListener('blur', function() {
        this.style.width = 120;
      });
    }
  };
}


angular
  .module('app')
  //my-stretch
  .directive('stretch', stretch);
//se pueden crear directivas y componentes personalizados crear todo dentro de Angular "native DOM API"
