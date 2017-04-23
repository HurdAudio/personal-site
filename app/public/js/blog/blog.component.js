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
      vm.sortedBy = 'created_at';
      vm.getSinglePost = getSinglePost;
      vm.toggleCommentsOnOff = toggleCommentsOnOff;
      vm.postNewComment = postNewComment;

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
          $http.get('/blog_comments')
          .then(allCommentsData=>{
            var allComments = cleanUpDates(allCommentsData.data);
            for (let i = 0; i < vm.blogStream.length; i++) {
              vm.blogStream[i].comments = [];
              for (let j = 0; j < allComments.length; j++) {
                if (allComments[j].blog_post === vm.blogStream[i].id) {
                  if (allComments[j].authorization_status === 'authorized') {
                    allComments[j].bodyClean = allComments[j].comment_body.replace(/\r\n|\n|\r/gm, '<br>');
                    vm.blogStream[i].comments.push(allComments[j]);
                  }
                }
              }
              vm.blogStream[i].number_of_comments = vm.blogStream[i].comments.length;
              if (vm.blogStream[i].comments.length <= 0) {
                document.getElementById('togglePostCommentsView' + vm.blogStream[i].id).setAttribute("style", "display: none;");
              } else {
                document.getElementById('commentstream' + vm.blogStream[i].id).setAttribute("style", "display: none;");
              }
              document.getElementById('commentForm' + vm.blogStream[i].id).setAttribute("style", "display: none;");
            }
          });


        });
      }

      function postNewComment (id) {
        var commentSubmissionObj = {};
        var postCommentButton = document.getElementById('postCommentButton' + id);
        var commentForm = document.getElementById('commentForm' + id);
        var commentCancel = document.getElementById('commentCancel' + id);
        var commentSubmit = document.getElementById('commentSubmit' + id);
        var commentBodyValue = document.getElementById('commentBodyValue' + id);
        var authorFirstNameValue = document.getElementById('authorFirstNameValue' + id);
        var authorLastNameValue = document.getElementById('authorLastNameValue' + id);
        var authorEmailValue = document.getElementById('authorEmailValue' + id);
        var commentTitleValue = document.getElementById('commentTitleValue' +id);

        postCommentButton.setAttribute("style", "display: none;");
        commentForm.setAttribute("style", "display: initial;");
        commentSubmit.setAttribute("style", "display: none;");

        document.addEventListener('keyup', ()=>{
          if (commentBodyValue.value === '') {
            commentSubmit.setAttribute("style", "display: none;");
          } else {
            commentSubmit.setAttribute("style", "display: initial;");
          }
        });
        commentSubmit.addEventListener('click', ()=>{
          postCommentButton.setAttribute("style", "display: initial;");
          commentForm.setAttribute("style", "display: none;");
          commentSubmissionObj.author_first_name = authorFirstNameValue.value;
          commentSubmissionObj.author_last_name = authorLastNameValue.value;
          commentSubmissionObj.author_email = authorEmailValue.value;
          commentSubmissionObj.blog_post = id;
          commentSubmissionObj.authorization_status = 'unauthorized';
          commentSubmissionObj.comment_title = commentTitleValue.value;
          commentSubmissionObj.comment_body = commentBodyValue.value;
          $http.post('/blog_comments', commentSubmissionObj)
          .then(data=>{
            console.log(data.data);
          });
        });
        commentCancel.addEventListener('click', ()=>{
          postCommentButton.setAttribute("style", "display: initial;");
          commentForm.setAttribute("style", "display: none;");
        });
      }

      function toggleCommentsOnOff (id) {
        var commentStream = document.getElementById('commentstream' + id);
        var toggleButton = document.getElementById('togglePostCommentsView' + id);
        if (commentStream.style.display === 'none') {
          commentStream.setAttribute("style", "display: initial;");
          toggleButton.innerHTML = 'HIDE COMMENTS';
        } else {
          commentStream.setAttribute("style", "display: none;");
          toggleButton.innerHTML = 'VIEW COMMENTS';
        }
      }

      function onInit() {
        console.log("Blog is lit");
        updateBlogStream();


      }

    }

}());
