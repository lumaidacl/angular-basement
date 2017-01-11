function orderForm(){
  return {
    restrict: 'E',
    scope: {},
    bindToController: {
      data: '=',
      submit: '&'
    },
    controller: 'OrderFormController as form'//jsson represent OrderController
    template: `
      <pre>{{ form.data | json }}</pre>
      <form nonvalidate ng-submit="form.onSubmit();">
        <input type="text" ng-model="form.data.name" placeholder="Your name">
        <input type="email" ng-model="form.data.email" placeholder="Your email">
        <input type="text" ng-model="form.data.location" placeholder="Your location">
        <select>
          <option value=""></option>
        </select>
          <textarea placeholder="Any messages (optional)" ng-model="form.data.coments">
          </textarea>
          <button type="submit">
            Order
          </button>
      </form>
    `
  }; //email validation bound to native attributes
}

angular
  .module('app')
  .directive('order-form', order-form);
//order form controller relation with order form directive
