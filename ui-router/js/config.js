angular
  .module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home',{
        url: '/',
        controller: 'HomeController as ctrl',
        template: `
          <p>{{ ctrl.viewName }}</p>
        `
      })
      .state('about',{
        url: '/about',
        controller: 'AboutController as ctrl',
        template: `
          <p>{{ ctrl.viewName }}</p>
        `
      });
      $urlRouterProvider.otherwise('/');
  });
//config - es un metodo especial que permite crear la parte lógica
