function MoviesController(){
  this.favorites = [{
    title: 'bucket list',
    year: '2005',
    popular: true
  },{
    title: 'my grandpa',
    year: '2016',
    popular: false
  },{
    title: 'the lake house',
    year: '1997',
    popular: false
  }];
}
angular
  .module('app')
  .controller('MoviesController', MoviesController);
