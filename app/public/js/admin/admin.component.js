(function() {
  'use strict';

  var bloggingState = "initial";
  var postID = null;

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
      vm.blogSortBy = '-created_at';
      vm.editPosting = editPosting;

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

      function editPosting(idNo) {
        bloggingState = 'singleRead';
        setBloggingState();
        postID = idNo;
        $http.get(`/user_blogs/${idNo}`)
        .then(data=>{
          vm.singlePost = data.data;
          vm.singlePost.tagString = generateTagString(vm.singlePost.tags);
          vm.singlePost.bodyClean = vm.singlePost.body.replace(/\r\n|\n|\r/gm, '<br>');
        });

      }

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

      function generateTags(tagString) {
        var tagObject = {};
        var tagArray = tagString.split(',');

        for (let i = 0; i < tagArray.length; i++) {
          tagObject[i.toString()] = tagArray[i].trim();
        }


        return (tagObject);
      }

      function savePosting(fromPublish) {
        var postingObj = {};
        var titleBar = document.getElementById('newPostTitleField');
        var contentBar = document.getElementById('newPostBodyField');
        var tagsBar = document.getElementById('newPostTagsField');
        var tagsObj = {};
        if (tagsBar.value.length > 0) {
          tagsObj = generateTags(tagsBar.value);
        }

        postingObj.author = 1;
        postingObj.title = titleBar.value;
        postingObj.body = contentBar.value;
        postingObj.tags = JSON.stringify(tagsObj);
        postingObj.published = fromPublish;

        if (postID === null) {
          $http.post('/user_blogs', postingObj)
          .then(result=>{
            postID = result.data[0].id;
            console.log(postID);
          });
        } else {
          $http.patch(`/user_blogs/${postID}`, postingObj)
          .then(updateResult=>{
            console.log(updateResult.data);
          });
        }
      }



      function setBloggingState() {
        var blogC = document.getElementById('blogCreate');
        var blogR = document.getElementById('blogRead');
        var blogU = document.getElementById('blogUpdate');
        var blogD = document.getElementById('blogDelete');
        var singleReader = document.getElementById('readSinglePost');
        var newBlogForm = document.getElementById('newBlogPostEntry');
        var reader = document.getElementById('readPosts');

        switch(bloggingState) {
          case('initial'):
            blogC.setAttribute("style", "display: initial;");
            blogR.setAttribute("style", "display: initial;");
            blogU.setAttribute("style", "display: none;");
            blogD.setAttribute("style", "display: none;");
            newBlogForm.setAttribute("style", "display: none;");
            reader.setAttribute("style", "display: none;");
            singleReader.setAttribute("style", "display: none;");
            break;

          case('authorNewPost'):
            newBlogForm.setAttribute("style", "display: initial;");
            blogC.setAttribute("style", "display: none;");
            blogR.setAttribute("style", "display: none;");
            blogU.setAttribute("style", "display: none;");
            blogD.setAttribute("style", "display: initial;");
            reader.setAttribute("style", "display: none;");
            singleReader.setAttribute("style", "display: none;");
            break;
          case('reading'):
            newBlogForm.setAttribute("style", "display: none;");
            blogC.setAttribute("style", "display: none;");
            blogR.setAttribute("style", "display: none;");
            blogU.setAttribute("style", "display: none;");
            blogD.setAttribute("style", "display: none;");
            reader.setAttribute("style", "display: initial;");
            singleReader.setAttribute("style", "display: none;");
            break;
          case ('singleRead'):
            reader.setAttribute("style", "display: none;");
            singleReader.setAttribute("style", "display: initial;");
            blogC.setAttribute("style", "display: none;");
            blogR.setAttribute("style", "display: none;");
            blogU.setAttribute("style", "display: initial;");
            blogD.setAttribute("style", "display: none;");
            newBlogForm.setAttribute("style", "display: none;");
            break;
          default:
            // blogC.setAttribute("style", "display: initial;");
            // blogR.setAttribute("style", "display: initial;");
            // blogU.setAttribute("style", "display: none;");
            // blogD.setAttribute("style", "display: none;");
            // newBlogForm.setAttribute("style", "display: none;");
        }
      }

      function publishPost() {
        var publishObj = {};
        var title = document.getElementById('newPostTitleField');
        var body = document.getElementById('newPostBodyField');
        var tags = document.getElementById('newPostTagsField');
        // prevent saving several blank records in user_blogs database
        if ((title.value.length > 0) || (body.value.length > 0) || (tags.value.length > 0)){
          if (postID === null) {
            savePosting(true);
          } else {
            publishObj.published = true;
            $http.patch(`/user_blogs/${postID}`, publishObj)
            .then(data=>{
              console.log(data.data);
            });
          }
        }
      }

      function initializeNewPostFields() {
        var title = document.getElementById('newPostTitleField');
        var body = document.getElementById('newPostBodyField');
        var tags = document.getElementById('newPostTagsField');
        title.value = '';
        body.value = '';
        tags.value = '';
        postID = null;
      }

      function deletePost() {
        console.log("DELETEing");
        console.log(postID);
        if (postID !== null) {
          $http.delete(`/user_blogs/${postID}`)
          .then((data)=>{
            console.log(data);
            initializeNewPostFields();
          })
          .catch(err=>{
            console.log(err);
          });
        }
      }

      function readTheBlogs () {
        $http.get('/user_blogs')
        .then(blogData=>{
          vm.blogPosts = cleanUpDates(blogData.data);
        });
      }

      function populateEditingPost() {
        $http.get(`/user_blogs/${postID}`)
        .then(data=>{
          var posting = data.data;
          var titleBarField = document.getElementById('newPostTitleField');
          var bodyBarField = document.getElementById('newPostBodyField');
          var tagsBarField = document.getElementById('newPostTagsField');
          titleBarField.value = posting.title;
          bodyBarField.value = posting.body;
          tagsBarField.value = generateTagString(posting.tags);
        });
      }



      function onInit() {
        console.log("Admin is lit.");
        var saveButton = document.getElementById('saveNewPost');
        var publishButton = document.getElementById('publishNewPost');
        var readPostsButton = document.getElementById('blogRead');
        var adminAccess = document.getElementById('buttonAdmin');
        var editButton = document.getElementById('blogUpdate');
        var exitReader = document.getElementById('exitRead');
        var exitSingleRead = document.getElementById('exitSingleRead');
        var blogDel = document.getElementById('blogDelete');
        adminAccess.setAttribute("style", "display: none;");
        var blogHQ = document.getElementById('bloggingHQ');
        blogHQ.setAttribute("style", "display: none;");
        var messageContent = document.getElementById('communicationsCenter');
        var commToggle = document.getElementById('toggleComm');
        var blogToggle = document.getElementById('toggleBlogHQ');


        messageContent.setAttribute("style", "display: none;");
        var communictionsButton = document.getElementById('toggleCommunications');
        var bloggingButton = document.getElementById('toggleBlogCRUD');
        var newBlogButton = document.getElementById('blogCreate');
        if (getCookie("qwerty") === "whip it good") {
          communictionsButton.addEventListener('click', ()=> {
            messageContent.setAttribute("style", "display: initial;");
            communictionsButton.setAttribute("style", "display: none;");
            serveUpFeedback();
            bloggingButton.setAttribute("style", "display: none;");
          });
          commToggle.addEventListener('click', ()=>{
            messageContent.setAttribute("style", "display: none;");
            communictionsButton.setAttribute("style", "display: initial;");
            bloggingButton.setAttribute("style", "display: initial;");
          });
          bloggingButton.addEventListener('click', ()=>{
            blogHQ.setAttribute("style", "display: initial;");
            bloggingButton.setAttribute("style", "display: none;");
            communictionsButton.setAttribute("style", "display: none;");
            setBloggingState();
          });
          exitReader.addEventListener('click', ()=>{
            bloggingState = 'initial';
            setBloggingState();
          });
          exitSingleRead.addEventListener('click', ()=>{
            postID = null;
            bloggingState = 'initial';
            setBloggingState();
          });
          blogToggle.addEventListener('click', ()=>{
            blogHQ.setAttribute("style", "display: none;");
            bloggingButton.setAttribute("style", "display: inital;");
            communictionsButton.setAttribute("style", "display: initial;");
          });
          newBlogButton.addEventListener('click', ()=>{
            bloggingState = "authorNewPost";
            setBloggingState();
          });
          saveButton.addEventListener('click', ()=>{
            bloggingState = 'authorNewPost';
            setBloggingState();
            savePosting(false);
          });
          publishButton.addEventListener('click', ()=>{
            bloggingState = 'initial';
            setBloggingState();
            publishPost();
            initializeNewPostFields();
            postID = null;
          });
          blogDel.addEventListener('click', ()=>{
            bloggingState = "initial";
            setBloggingState();

            deletePost();
          });
          readPostsButton.addEventListener('click', ()=>{
            bloggingState = "reading";
            setBloggingState();
            readTheBlogs();
          });
          editButton.addEventListener('click', ()=>{
            bloggingState = 'authorNewPost';
            setBloggingState();
            populateEditingPost();
          })

        } else {
          alert("FORBIDDEN");
        }







      }

    }

}());
