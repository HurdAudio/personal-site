(function() {
  'use strict';



  angular.module('app')
    .component('hurdaudio', {
      controller: HurdAudioController,
      templateUrl: '/js/hurdaudio/hurdaudio.template.html'
    });

    HurdAudioController.$inject = ['$http', '$state', '$stateParams'];

    function HurdAudioController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;



      function onInit() {
        console.log("HurdAudio is lit.");


      }

    }

}());
