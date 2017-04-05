(function() {
  'use strict';



  angular.module('app')
    .component('techreadinglist', {
      controller: TechReadingListController,
      templateUrl: '/js/techreadinglist/techreadinglist.template.html'
    });

    TechReadingListController.$inject = ['$http', '$state', '$stateParams'];

    function TechReadingListController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;



      function onInit() {
        console.log("Tech is lit.");


      }

    }

}());
