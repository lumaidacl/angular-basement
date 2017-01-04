function MoviesController(){
  this.favorites = [{
    title: 'bucket list',
    year: '2005',
    popular: true,
    category: 'action'
  },{
    title: 'my grandpa',
    year: '2016',
    popular: false,
    category: 'thriller'
  },{
    title: 'the lake house',
    year: '1997',
    popular: false,
    category: 'fantasy'
  },{
    title: 'the lake house',
    year: '1997',
    popular: true,
    category: 'movie has no category'
  }];
}
angular
  .module('app')
  .controller('MoviesController', MoviesController);
