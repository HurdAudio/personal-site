(function() {
  'use strict';

  function getCookie (name) {
    var cookies = document.cookie.split(';');
    for(var i=0 ; i < cookies.length ; ++i) {
        var pair = cookies[i].trim().split('=');
        if(pair[0] === name) {
            return (pair[1]);
          }
    }
    return null;
  }



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
        if (getCookie("qwerty") === "whip it good") {
          $http.delete(`/visitor_feedbacks/${id}`)
          .then(data=>{
            console.log(data.data);
            serveUpFeedback();
          });
        }
      }

      function respondFeedback(id) {
        console.log(id);
        if (getCookie("qwerty") === "whip it good") {

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
      }

      function serveUpFeedback() {
        if (getCookie("qwerty") === "whip it good") {
          $http.get('/visitor_feedbacks')
          .then(results=>{
            vm.visitorFeedbacks = results.data;
          });
        }
      }



      function onInit() {
        console.log("Admin is lit.");

        var messageContent = document.getElementById('communicationsCenter');
        var commToggle = document.getElementById('toggleComm');
        messageContent.setAttribute("style", "display: none;");
        var communictionsButton = document.getElementById('toggleCommunications');
        if (getCookie("qwerty") === "whip it good") {
          communictionsButton.addEventListener('click', ()=> {
            messageContent.setAttribute("style", "display: initial;");
            communictionsButton.setAttribute("style", "display: none;");
            serveUpFeedback();
          });
          commToggle.addEventListener('click', ()=>{
            messageContent.setAttribute("style", "display: none;");
            communictionsButton.setAttribute("style", "display: initial;");
          });
        } else {
          alert("FORBIDDEN");
        }







      }

    }

}());
