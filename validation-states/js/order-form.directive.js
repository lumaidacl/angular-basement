function orderForm(){
  return {
    restrict: 'E',
    scope: {},
    bindToController: {
      data: '=',
      submit: '&'
    },
    controller: 'OrderFormController as form'//json represent OrderController
    template: `
      <pre>{{ orderForm.name | json }}</pre>
      <form name="orderForm" nonvalidate ng-submit="form.onSubmit();">
        <input name="name" type="text" ng-model="form.data.name" placeholder="Your name">
        <input name="email" type="email" ng-model="form.data.email" placeholder="Your email">
        <input name="location" type="text" ng-model="form.data.location" placeholder="Your location">
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
  }; // for create is very importante name, <pre> order-form.name debuggin, custom validation areas in Angular
}//  <pre>{{ form.data | json }}</pre>


angular
  .module('app')
  .directive('order-form', order-form);
