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
      })
      .state({
        name: 'hurdaudio',
        url: '/hurdaudio',
        parent: 'app',
        component: 'hurdaudio'
      })
      .state({
        name: 'hurdreads',
        url: '/hurdreads',
        parent: 'app',
        component: 'hurdreads'
      })
      .state({
        name: 'contact',
        url: '/contact',
        parent: 'app',
        component: 'contact'
      })
      .state({
        name: 'adminlogin',
        url: '/adminlogin',
        parent: 'app',
        component: 'adminlogin'
      })
      .state({
        name: 'admin',
        url: '/admin',
        parent: 'app',
        component: 'admin'
      })
      .state({
        name: 'hurdreadlist',
        url: '/hurdreadlist',
        parent: 'app',
        component: 'hurdreadlist'
      })
      .state({
        name: 'blog',
        url: '/blog',
        parent: 'app',
        component: 'blog'
      })
      .state({
        name: 'singleblog',
        url: '/singleblog/:id',
        parent: 'app',
        component: 'singleblog'
      })
      .state({
        name: 'harmonictheory',
        url: '/harmonictheory',
        parent: 'app',
        component: 'harmonictheory'
      })
      .state({
        name: 'techreadinglist',
        url: '/techreadinglist',
        parent: 'app',
        component: 'techreadinglist'
      })
      .state({
        name: 'harmonictheoryintroduction',
        url: '/harmonictheoryintroduction',
        parent: 'app',
        component: 'harmonictheoryintroduction'
      })
      .state({
        name: 'singlebookcube',
        url: '/singlebookcube/:id',
        parent: 'app',
        component: 'singlebookcube'
      })
      .state({
        name: 'hurdaudiorotation',
        url: '/hurdaudiorotation',
        parent: 'app',
        component: 'hurdaudiorotation'
      });


  }

}());
