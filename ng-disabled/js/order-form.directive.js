
function orderForm(){
  return {
    restrict: 'E',
    scope: {},
    bindToController: {
      data: '=',
      submit: '&'
    },
    controller: 'OrderFormController as form',
    template: `
      <pre>{{ form.data | json }}</pre>
      <form name="orderForm" nonvalidate ng-submit="form.onSubmit();">
        <input name="name" required="" type="text" ng-model="form.data.name" placeholder="Your name">
        <input name="email" required="" type="email" ng-model="form.data.email" placeholder="Your email">
        <input name="location" required="" type="text" ng-model="form.data.location" placeholder="Your location">
        <select
          name="orderChoice"
          required=""
          ng-model="form.data.product"
          ng-options="product.label for product in form.products">
          <option value="">Select...</option>
        </select>
          <textarea name="comments" placeholder="Any messages (optional)" ng-model="form.data.coments">
          </textarea>
          <button type="submit" ng-disabled="orderForm.$invalid">
            Order
          </button>
      </form>
    `
  };
}

angular
  .module('app')
  .directive('order-form', order-form);
