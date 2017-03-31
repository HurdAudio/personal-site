(function() {
  'use strict';



  angular.module('app')
    .component('harmonictheory', {
      controller: HarmonicTheoryController,
      templateUrl: '/js/harmonictheory/harmonictheory.template.html'
    });

    HarmonicTheoryController.$inject = ['$http', '$state', '$stateParams'];

    function HarmonicTheoryController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;



      function onInit() {
        console.log("Harmonic Theory is lit.");


      }

    }

}());
