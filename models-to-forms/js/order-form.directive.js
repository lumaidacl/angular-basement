function orderForm(){
  return {
    restrict: 'E',
    scope: {},
    controller: 'CounterController as counter',
    template: `
      <form nonvalidate>
        <input type="text" placeholder="Your name">
        <input type="email" placeholder="Your email">
        <input type="text" placeholder="Your location">
        <select>
          <option value=""></option>
          <textarea placeholder="Any messages">
          </textarea>
          <button></button>
        </select>

      </form>
    `
  };
}

angular
  .module('app')
  .directive('counter', counter);
