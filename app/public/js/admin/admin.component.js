(function() {
  'use strict';



  angular.module('app')
    .component('admin', {
      controller: AdminController,
      templateUrl: '/js/admin/admin.template.html'
    });

    AdminController.$inject = ['$http', '$state', '$stateParams'];

    function AdminController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.respondFeedback = respondFeedback;
      vm.deleteFeedback = deleteFeedback;
      vm.serveUpFeedback = serveUpFeedback;
      vm.sortBy = '-created_at';

      function deleteFeedback(id) {
        console.log(id);
        $http.delete(`/visitor_feedbacks/${id}`)
        .then(data=>{
          console.log(data.data);
          serveUpFeedback();
        });
      }

      function respondFeedback(id) {
        console.log(id);
        $http.get(`/visitor_feedbacks/${id}`)
        .then(response => {
          console.log(response.data);
          var item = response.data;
          item.responded = !(item.responded);
          $http.patch(`/visitor_feedbacks/${id}`, item)
          .then(data =>{
            console.log(data.data.visitor_message + " is go!");
            serveUpFeedback();
          });
        });
      }

      function serveUpFeedback() {
        $http.get('/visitor_feedbacks')
        .then(results=>{
          vm.visitorFeedbacks = results.data;
        });
      }



      function onInit() {
        console.log("Admin is lit.");
        var messageContent = document.getElementById('communicationsCenter');
        var commToggle = document.getElementById('toggleComm');
        messageContent.setAttribute("style", "display: none;");
        var communictionsButton = document.getElementById('toggleCommunications');
        communictionsButton.addEventListener('click', ()=> {
          messageContent.setAttribute("style", "display: initial;");
          communictionsButton.setAttribute("style", "display: none;");
          serveUpFeedback();
        });
        commToggle.addEventListener('click', ()=>{
          messageContent.setAttribute("style", "display: none;");
          communictionsButton.setAttribute("style", "display: initial;");
        });







      }

    }

}());
