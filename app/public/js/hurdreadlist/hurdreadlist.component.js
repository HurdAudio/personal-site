(function() {
  'use strict';



  angular.module('app')
    .component('hurdreadlist', {
      controller: ReadinglistController,
      templateUrl: '/js/hurdreadlist/hurdreadlist.template.html'
    });

    ReadinglistController.$inject = ['$http', '$state', '$stateParams'];

    function ReadinglistController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;



      function onInit() {
        console.log("Readinglist is lit.");


      }

    }

}());
