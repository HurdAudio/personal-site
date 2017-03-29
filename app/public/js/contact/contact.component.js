(function() {
  'use strict';

  function getDateFormat(stamp) {
    var dateString = "";
    var day = "";
    var month = stamp[5] + stamp[6];
    var year = stamp[0] + stamp[1] + stamp[2] + stamp[3];

    if (stamp[8] === '0') {
      day = stamp[9];
    } else {
      day = stamp[8] + stamp[9];
    }
    switch (month) {
      case ('01'):
        month = "January";
        break;
      case ('02'):
        month = "February";
        break;
      case ('03'):
        month = "March";
        break;
      case ('04'):
        month = "April";
        break;
      case ('05'):
        month = "May";
        break;
      case ('06'):
        month = "June";
        break;
      case ('07'):
        month = "July";
        break;
      case ('08'):
        month = "August";
        break;
      case ('09'):
        month = "September";
        break;
      case ('10'):
        month = "October";
        break;
      case ('11'):
        month = "November";
        break;
      case ('12'):
        month = "December";
        break;
      default:
        month = "CrazyTown";
    }

    dateString = day + "  " + month + "  " + year;

    return (dateString);
  }



  angular.module('app')
    .component('contact', {
      controller: ContactController,
      templateUrl: '/js/contact/contact.template.html'
    });

    ContactController.$inject = ['$http', '$state', '$stateParams'];

    function ContactController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.$feedbackReceived = feedbackReceived;

      function feedbackReceived() {
        let feedbackObj = {};
        var nameEntry = document.getElementById('visitorName');
        var emailEntry = document.getElementById('visitorEmail');
        var messageEntry = document.getElementById('visitorMessage');
        var entryForm = document.getElementById('contact-form_cont');
        var divOfThanks = document.getElementById('contact-form_completed');
        divOfThanks.setAttribute('style', "display: inherit;");
        entryForm.setAttribute("style", "display: none;");
        feedbackObj.visitor_name = nameEntry.value;
        feedbackObj.visitor_email = emailEntry.value;
        feedbackObj.visitor_message = messageEntry.value;


        $http.post('/visitor_feedbacks', feedbackObj)
        .then(value => {
          var messageFromCybersapce = value.data[0];
          var receivedTime = document.getElementById('dateStamper');
          var person = document.getElementById('yourFriend');
          var emailID = document.getElementById('internetEmail');
          var messageBody = document.getElementById('feedbackBody');
          var timeStamp = messageFromCybersapce.created_at;
          var userName = messageFromCybersapce.visitor_name;
          var userEmail = messageFromCybersapce.visitor_email;
          var userMessage = messageFromCybersapce.visitor_message;
          var dateString = "Submitted:  " + getDateFormat(timeStamp);
          var personString = "From:  " + userName;
          var emailString = "Email:  " + userEmail;
          var messageConfirm = "Message:  " + userMessage;
          receivedTime.innerHTML = dateString;
          person.innerHTML = personString;
          emailID.innerHTML = emailString;
          messageBody.innerHTML = messageConfirm;
        });

      }





      function onInit() {
        console.log("Contact is lit.");
        var thankYouDiv = document.getElementById('contact-form_completed');
        thankYouDiv.setAttribute("style", "display: none;");
        var feedbackButton = document.getElementById('contactButton');
        feedbackButton.setAttribute("style", "display: none;");
        var nameField = document.getElementById('visitorName');
        var emailField = document.getElementById('visitorEmail');
        var messageField = document.getElementById('visitorMessage');
        var submission = document.getElementById('contactButton');
        document.addEventListener('keyup', () => {
          if ((nameField.value.length > 0) && (emailField.value.length > 0) && (messageField.value.length > 0)) {
            feedbackButton.setAttribute("style", "display: initial;");
          } else {
            feedbackButton.setAttribute("style", "display: none");
          }
        });
        submission.addEventListener('click', ()=>{
          feedbackReceived();
        });
      }

    }

}());
