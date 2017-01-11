function OrderFormController(){
  this.products = [{
    label: 'Product One',
    id: 1
  },{
    label: 'Product Two',
    id: 1
  }
  {
    label: 'Product Three',
    id: 1
  }];
  this.onSubmit = function () {
    //pre-processing
    this.submit();
  };
}


angular
  .module('app')
  .controller('OrderFormController', OrderFormController);
