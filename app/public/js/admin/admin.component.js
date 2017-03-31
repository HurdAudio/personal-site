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

      function cleanUpDates(messages) {
        var time = "";
        var day = "";
        var month = "";
        var year = "";

        for (let i = 0; i < messages.length; i++) {
          if (messages[i].responded) {
            messages[i].response_status = "YES";
          } else {
            messages[i].response_status = "NO";
          }
          if (messages[i].created_at[11] === 0) {
            time = messages[i].created_at.slice(12,16);
          } else {
            time = messages[i].created_at.slice(11,16);
          }
          if (messages[i].created_at[5] === 0) {
            day = messages[i].created_at[6];
          } else {
            day = messages[i].created_at.slice(8, 10);
          }
          month = messages[i].created_at.slice(5, 7);
          switch(month) {
            case('01'):
              month = "January";
              break;
            case('02'):
              month = "February";
              break;
            case('03'):
              month = "March";
              break;
            case('04'):
              month = "April";
              break;
            case('05'):
              month = "May";
              break;
            case('06'):
              month = "June";
              break;
            case('07'):
              month = "July";
              break;
            case('08'):
              month = "August";
              break;
            case('09'):
              month = "September";
              break;
            case('10'):
              month = "October";
              break;
            case('11'):
              month = "November";
              break;
            case('12'):
              month = "December";
              break;
            default:
              console.log('bad month data');
          }
          year = messages[i].created_at.slice(0,4);
          messages[i].clean_date = day + "  " + month + "  " + year + "  at  " + time;
        }
        return (messages);
      }

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
            vm.visitorFeedbacks = cleanUpDates(results.data);

          });
        }
      }



      function onInit() {
        console.log("Admin is lit.");
        var adminAccess = document.getElementById('buttonAdmin');
        adminAccess.setAttribute("style", "display: none;");
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
