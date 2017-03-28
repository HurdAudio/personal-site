(function() {
  'use strict';



  angular.module('app')
    .component('hurdreads', {
      controller: HurdReadsController,
      templateUrl: '/js/hurdreads/hurdreads.template.html'
    });

    HurdReadsController.$inject = ['$http', '$state', '$stateParams'];

    function HurdReadsController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;



      function onInit() {
        console.log("HurdReads is lit.");


      }

    }

}());
