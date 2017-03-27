(function() {
  'use strict';



  angular.module('app')
    .component('resume', {
      controller: ResumeController,
      templateUrl: '/js/resume/resume.template.html'
    });

    ResumeController.$inject = ['$http', '$state', '$stateParams'];

    function ResumeController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;



      function onInit() {
        console.log("Resume is lit... hire me.");


      }

    }

}());
