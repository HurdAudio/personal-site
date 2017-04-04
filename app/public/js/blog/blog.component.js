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
      vm.sortBy = '-created_at';
      vm.getSinglePost = getSinglePost;

      function getSinglePost(whichPost){
        $http.get(`/singleblog/${whichPost}`).then(()=>{
          $state.go('singleblog', {id: whichPost});
        });
      }

      function cleanUpDates(messages) {
        var time = "";
        var day = "";
        var month = "";
        var year = "";

        for (let i = 0; i < messages.length; i++) {

          if (messages[i].created_at[11] === '0') {
            time = messages[i].created_at.slice(12,16);
          } else {
            time = messages[i].created_at.slice(11,16);
          }
          if (messages[i].created_at[8] === '0') {
            day = messages[i].created_at[9];
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

      function abbrevDates (messages) {
        var day = "";
        var month = "";
        var year = "";

        for (let i = 0; i < messages.length; i++) {


          if (messages[i].created_at[8] === '0') {
            day = messages[i].created_at[9];
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
          messages[i].abbrev_date = day + "  " + month + "  " + year;
          messages[i].author_name = "Devin Hurd";
          messages[i].bodyClean = messages[i].body.replace(/\r\n|\n|\r/gm, '<br>');
        }
        return (messages);
      }

      function generateTagString(tagsOfJson) {
        var theString = '';
        var theArray = [];

        for (var key in tagsOfJson) {
          theArray[parseInt(key)] = tagsOfJson[key];
        }
        for (let i = 0; i < (theArray.length - 1); i++) {
          theString += theArray[i] + ', ';
        }
        theString += theArray[theArray.length-1];

        return(theString);
      }

      function generateTagsArray(messages) {
        for (let i = 0; i < messages.length; i++) {
          messages[i].tagsArray = [];
          for (var key in messages[i].tags) {
            messages[i].tagsArray[parseInt(key)] = messages[i].tags[key];
          }
        }
        return(messages);
      }

      function generateHTMLTags(messages) {
        var htmlString = '';
        for (let i = 0; i < messages.length; i++) {
          htmlString = '';
          for (let j = 0; j < messages[i].tagsArray.length; j++) {
            if (messages[i].tagsArray[j] !== null) {
              htmlString += '<a href="#"><em>' + messages[i].tagsArray[j] + '</em></a> ';
            }
          }
          if (htmlString.length < 1) {
            htmlString = "<strong>NO TAGS</strong>";
          }
          messages[i].htmlTags = htmlString;
        }

        return(messages);
      }

      function updateBlogStream() {
        $http.get('/user_blogs')
        .then(blogs=>{
          vm.blogStream = cleanUpDates(blogs.data);
          vm.blogStream = abbrevDates(vm.blogStream);
          vm.blogStream = generateTagsArray(vm.blogStream);
          vm.blogStream = generateHTMLTags(vm.blogStream);

        });
      }

      function onInit() {
        console.log("Blog is lit");
        updateBlogStream();


      }

    }

}());
