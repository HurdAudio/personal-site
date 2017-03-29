(function() {
  'use strict';



  angular.module('app')
    .component('adminlogin', {
      controller: AdminloginController,
      templateUrl: '/js/adminlogin/adminlogin.template.html'
    });

    AdminloginController.$inject = ['$http', '$state', '$stateParams'];

    function AdminloginController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;



      function onInit() {
        console.log("Aminlogin is lit.");
        var adminAccess = document.getElementById('buttonAdmin');
        adminAccess.setAttribute("style", "display: none;");

        var lastNameField = document.getElementById('adminLastName');
        lastNameField.setAttribute("style", "display: none;");
        var companyNameField = document.getElementById('adminCompanyName');
        companyNameField.setAttribute("style", "display: none;");
        var emailAdminField = document.getElementById('admin_Email');
        emailAdminField.setAttribute("style", "display: none;");
        var adminPasswordField = document.getElementById('adminPassword');
        adminPasswordField.setAttribute("style", "display: none;");
        var submitButton = document.getElementById('adminButton');
        submitButton.setAttribute("style", "display: none");
        document.addEventListener('keyup', () => {
          var firstNameContent = document.getElementById('admin_FirstName');
          var lastNameContent = document.getElementById('admin_LastName');
          var companyNameContent = document.getElementById('admin_CompanyName');
          var adminEmailContent = document.getElementById('adminEmail');
          var adminPasswordContent = document.getElementById('admin_password');
          if (firstNameContent.value.length > 0) {
            lastNameField.setAttribute("style", "display: initial;");
          } else {
            lastNameField.setAttribute("style", "display: none;");
          }
          if (lastNameContent.value.length > 0) {
            companyNameField.setAttribute("style", "display: initial;");
          } else {
            companyNameField.setAttribute("style", "display: none;");
          }
          if (companyNameContent.value.length > 0) {
            emailAdminField.setAttribute("style", "display: initial;");
          } else {
            emailAdminField.setAttribute("style", "display: none;");
          }
          if (adminEmailContent.value.length > 0) {
            adminPasswordField.setAttribute("style", "display: initial;");
          } else {
            adminPasswordField.setAttribute("style", "display: none;");
          }
          if ((firstNameContent.value.length > 0) && (lastNameContent.value.length > 0) && (companyNameContent.value.length > 0) && (adminEmailContent.value.length > 0) && (adminPasswordContent.value.length > 0)) {
            submitButton.setAttribute("style", "display: initial;");
          } else {
            submitButton.setAttribute("style", "display: none;");
          }
        });
        // var feedbackButton = document.getElementById('contactButton');
        // feedbackButton.setAttribute("style", "display: none;");
        // var nameField = document.getElementById('visitorName');
        // var emailField = document.getElementById('visitorEmail');
        // var messageField = document.getElementById('visitorMessage');
        // var submission = document.getElementById('contactButton');
        // document.addEventListener('keyup', () => {
        //   if ((nameField.value.length > 0) && (emailField.value.length > 0) && (messageField.value.length > 0)) {
        //     feedbackButton.setAttribute("style", "display: initial;");
        //   } else {
        //     feedbackButton.setAttribute("style", "display: none");
        //   }
        // });
        // submission.addEventListener('click', ()=>{
        //   feedbackReceived();
        // });
      }

    }

}());
