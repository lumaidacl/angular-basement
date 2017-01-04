function MoviesController(){
  this.favorites = [{
    title: 'bucket list',
    year: '1995',
    popular: true,
    category: 'action',
    image: ''
  },{
    title: 'my grandpa',
    year: '2016',
    popular: false,
    category: 'thriller',
    image: ''
  },{
    title: 'the lake house',
    year: '1997',
    popular: false,
    category: 'fantasy',
    image: ''
  },{
    title: 'the lake house',
    year: '2000',
    popular: true,
    category: 'movie has no category'
  }];
}
angular
  .module('app')
  .controller('MoviesController', MoviesController);
