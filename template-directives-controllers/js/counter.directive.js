function counter(){
  return {
    scope:{},
    restrict: 'E',//E === element <my-directive> customize
    controller: 'CounterController as counter',
    template: `
      <div class="counter">
        <input type="text" ng-model="counter.count">
          <button type="button" ng-click="counter.decrement();">

          </button>
          <button type="button" ng-click="counter.increment();">

          </button>
      </div>
    `
  };
}

angular
  .module('app')
  .directive('counter', counter);
