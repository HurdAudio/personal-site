(function() {
  'use strict';



  angular.module('app')
    .component('singleblog', {
      controller: SingleblogController,
      templateUrl: '/js/singleblog/singleblog.template.html'
    });

    SingleblogController.$inject = ['$http', '$state', '$stateParams'];

    function SingleblogController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;

      function cleanUpDates(message) {
        var time = "";
        var day = "";
        var month = "";
        var year = "";


          if (message.created_at[11] === '0') {
            time = message.created_at.slice(12,16);
          } else {
            time = message.created_at.slice(11,16);
          }
          if (message.created_at[8] === '0') {
            day = message.created_at[9];
          } else {
            day = message.created_at.slice(8, 10);
          }
          month = message.created_at.slice(5, 7);
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
          year = message.created_at.slice(0,4);
          message.clean_date = day + "  " + month + "  " + year + "  at  " + time;
          message.abbrev_date = day + " " + month + " " + year;
          message.author_name = "Devin Hurd";
          message.bodyClean = message.body.replace(/\r\n|\n|\r/gm, '<br>');
        return (message);
      }

      function generateTagsArray(message) {
          message.tagsArray = [];
          for (var key in message.tags) {
            message.tagsArray[parseInt(key)] = message.tags[key];
          }
        return(message);
      }

      function generateHTMLTags(message) {
        var htmlString = '';
        for (let j = 0; j < message.tagsArray.length; j++) {
          if (message.tagsArray[j] !== null) {
            htmlString += '<a href="#"><em>' + message.tagsArray[j] + '</em></a> ';
          }
        }
        if (htmlString.length < 1) {
          htmlString = "<strong>NO TAGS</strong>";
        }
        message.htmlTags = htmlString;

        return(message);
      }

      function onInit() {
        console.log("SingleBlog is lit.");
        $http.get(`/user_blogs/${$stateParams.id}`)
        .then(blogEntry => {
          vm.blog = blogEntry.data;
          vm.blog = cleanUpDates(vm.blog);
          vm.blog = generateTagsArray(vm.blog);
          vm.blog = generateHTMLTags(vm.blog);
        });


      }

    }

}());
