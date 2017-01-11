function OrderController(){
  this.costumerOrder = {
    name: '',
    email: '',
    location: '',
    product: {
      label: '',
      id: ''
    },
    comments: ''
  };
  this.submitOrder = function () {
    //communicate with API
    console.log('Submitted!', this.customerOrder);
  };
}


angular
  .module('app')
  .controller('OrderController', OrderController);
