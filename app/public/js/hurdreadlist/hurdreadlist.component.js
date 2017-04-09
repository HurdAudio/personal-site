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
        //TODO get reading order (books completed + curently reading + interrupt-if-qpplicable + reading-list)
        //TODO Build object based upon reading order, generate image, size by page numbers, and randomly lean some books...
        //TODO set up ng-repeat on html to handle this object


      }

    }

}());
