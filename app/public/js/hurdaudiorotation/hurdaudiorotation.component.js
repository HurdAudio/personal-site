(function() {
  'use strict';



  angular.module('app')
    .component('hurdaudiorotation', {
      controller: HurdaudioRotationController,
      templateUrl: '/js/hurdaudiorotation/hurdaudiorotation.template.html'
    });

    HurdaudioRotationController.$inject = ['$http', '$state', '$stateParams'];

    function HurdaudioRotationController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;



      function onInit() {
        console.log("HurdAudio Rotation is lit.");


      }

    }

}());
