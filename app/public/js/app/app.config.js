(function() {
  'use strict';

  angular.module('app')
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'app',
        abstract: true,
        component: 'app',
      })
      .state({
        name: 'landing',
        url: '/',
        parent: 'app',
        component: 'landing'
      })
      .state({
        name: 'resume',
        url: '/resume',
        parent: 'app',
        component: 'resume'
      })
      .state({
        name: 'projects',
        url: '/projects',
        parent: 'app',
        component: 'projects'
      });


  }

}());
