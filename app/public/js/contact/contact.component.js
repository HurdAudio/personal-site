(function() {
  'use strict';



  angular.module('app')
    .component('contact', {
      controller: ContactController,
      templateUrl: '/js/contact/contact.template.html'
    });

    ContactController.$inject = ['$http', '$state', '$stateParams'];

    function ContactController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;



      function onInit() {
        console.log("Contact is lit.");


      }

    }

}());
