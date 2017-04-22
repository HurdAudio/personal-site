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
      vm.postAComment = postAComment;

      function postAComment() {
        var commentForm = document.getElementById('commentForm');
        var commentSubmit = document.getElementById('commentSubmit');
        var postACommentButton = document.getElementById('postACommentButton');
        var commentBodyValue = document.getElementById('commentBodyValue');
        var authorFirstNameValue = document.getElementById('authorFirstNameValue');
        var authorLastNameValue = document.getElementById('authorLastNameValue');
        var authorEmailValue = document.getElementById('authorEmailValue');
        var commentTitleValue = document.getElementById('commentTitleValue');
        var commentSubmissionObj = {};

        commentForm.setAttribute("style", "display: initial;");
        commentSubmit.setAttribute("style", "display: none;");
        postACommentButton.setAttribute("style", "display: none;");
        document.addEventListener('keyup', ()=>{
          if (commentBodyValue.value !== '') {
            commentSubmit.setAttribute("style", "display: initial;");
          } else {
            commentSubmit.setAttribute("style", "display: none;");
          }
        });
        commentSubmit.addEventListener('click', ()=>{
          commentForm.setAttribute("style", "display: none;");
          commentSubmit.setAttribute("style", "display: none;");
          postACommentButton.setAttribute("style", "display: initial;");
          commentSubmissionObj.author_first_name = authorFirstNameValue.value;
          commentSubmissionObj.author_last_name = authorLastNameValue.value;
          commentSubmissionObj.author_email = authorEmailValue.value;
          commentSubmissionObj.blog_post = parseInt($stateParams.id);
          commentSubmissionObj.authorization_status = "unauthorized";
          commentSubmissionObj.comment_title = commentTitleValue.value;
          commentSubmissionObj.comment_body = commentBodyValue.value;
          $http.post('/blog_comments', commentSubmissionObj)
          .then(data=>{
            console.log(data.data);
          });
        });
      }

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
        var commentForm = document.getElementById('commentForm');

        commentForm.setAttribute("style", "display: none;");
        $http.get(`/user_blogs/${$stateParams.id}`)
        .then(blogEntry => {
          vm.blog = blogEntry.data;
          vm.blog = cleanUpDates(vm.blog);
          vm.blog = generateTagsArray(vm.blog);
          vm.blog = generateHTMLTags(vm.blog);
        });
        $http.get('/blog_comments')
        .then(blogCommentsData=>{
          var blogComments = blogCommentsData.data;
          var postComments = [];
          var authorizedPostComments = [];

          for (let i = 0; i < blogComments.length; i++) {
            if (blogComments[i].blog_post === parseInt($stateParams.id)) {
              postComments.push(blogComments[i]);
              if (blogComments[i].authorization_status === 'authorized') {
                authorizedPostComments.push(blogComments[i]);
              }
            }
          }
          console.log(postComments);
          console.log(authorizedPostComments);
          vm.numberOfComments = {};
          vm.numberOfComments.total = authorizedPostComments.length;
          vm.postComments = [];
          if (authorizedPostComments.length > 0) {
            for (let j = 0; j < authorizedPostComments.length; j++) {
              vm.postComments[j] = {};
              vm.postComments[j].author_first_name = authorizedPostComments[j].author_first_name;
              vm.postComments[j].author_last_name = authorizedPostComments[j].author_last_name;
              vm.postComments[j].created_at = authorizedPostComments[j].created_at;
              vm.postComments[j].updated_at = authorizedPostComments[j].updated_at;
              vm.postComments[j].body = authorizedPostComments[j].comment_body;
              vm.postComments[j].comment_title = authorizedPostComments[j].comment_title;
              console.log(vm.postComments[j]);
              console.log(authorizedPostComments[j]);
              vm.postComments[j] = cleanUpDates(vm.postComments[j]);

            }
          }
        });


      }

    }

}());
