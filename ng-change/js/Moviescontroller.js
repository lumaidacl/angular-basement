function MoviesController(){
  this.newTitle = '';
  this.newRelease = '';
  this.onChange = function(){
    console.log('Change!',this.newTitle);
  };
  this.addMovie = function(){
    this.favorites.unshift({
      title: this.newTitle,
      year: this.newRelease
    })
  };
  this.favorites = [{
    title: 'bucket list',
    year: '1995',
  },{
    title: 'my grandpa',
    year: '2016',
  },{
    title: 'the lake house',
    year: '1997',
  },{
    title: 'the lake house',
    year: '2000',
  }];
}
angular
  .module('app')
  .controller('MoviesController', MoviesController);
