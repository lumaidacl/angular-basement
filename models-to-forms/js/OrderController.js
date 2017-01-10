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
}


angular
  .module('app')
  .controller('OrderController', OrderController);
