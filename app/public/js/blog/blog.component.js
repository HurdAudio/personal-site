(function() {
  'use strict';



  angular.module('app')
    .component('blog', {
      controller: BlogController,
      templateUrl: '/js/blog/blog.template.html'
    });

    BlogController.$inject = ['$http', '$state', '$stateParams'];

    function BlogController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;



      function onInit() {
        console.log("Blog is lit... hire me.");


      }

    }

}());
