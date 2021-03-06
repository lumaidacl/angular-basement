function MoviesController(){
  this.likesList = [];
  this.unlike = function(index){
    this.likesList.splice(index, 1);
  };
  this.addToLikes = function (movie){
    this.likesList.push(movie);
  };
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
