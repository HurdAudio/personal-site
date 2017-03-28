(function() {
  'use strict';



  angular.module('app')
    .component('projects', {
      controller: ProjectsController,
      templateUrl: '/js/projects/projects.template.html'
    });

    ProjectsController.$inject = ['$http', '$state', '$stateParams'];

    function ProjectsController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;



      function onInit() {
        console.log("Projects are lit.");


      }

    }

}());
