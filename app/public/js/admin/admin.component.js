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

      function handleInterruptDisplay (interruptReviewID) {
        $http.get('/interrupts')
        .then(interruptListData=>{
          var interruptList = interruptListData.data;
          var weHaveInterrupt = false;
          var activeInterruptID = null;
          for (let i = 0; i < interruptList.length; i++) {
            if (!interruptList[i].is_completed) {
              weHaveInterrupt = true;
              if (activeInterruptID === null) {
                activeInterruptID = interruptList[i].id;
              }
            }
          }
          if (weHaveInterrupt) {
            vm.interruptSelection = {};
            $http.get(`/interrupts/${activeInterruptID}`)
            .then(ourInterruptData=>{
              var ourInterrupt = ourInterruptData.data;
              if (ourInterrupt.periodical_or_book === "book") {
                $http.get(`/books/${ourInterrupt.books_id}`)
                .then(interruptBookData=>{
                  var interruptBook = interruptBookData.data;
                  vm.interruptSelection.cover_url = interruptBook.cover_url;
                  vm.interruptSelection.title = interruptBook.title;
                  vm.interruptSelection.author = interruptBook.author;
                });
              } else {
                $http.get(`/periodicals/${ourInterrupt.periodicals_id}`)
                .then(interruptMagazineData=>{
                  var interruptMagazine = interruptMagazineData.data;
                  vm.interruptSelection.cover_url = interruptMagazine.img_url;
                  vm.interruptSelection.title = interruptMagazine.name + " " + interruptMagazine.issue;
                  vm.interruptSelection.author = interruptMagazine.editor + "(editor)";
                });
              }
            });
          } else {
            var interruptDisplayDiv = document.getElementById('interruptSelectionBook');
            interruptDisplayDiv.setAttribute("style", "display: none;");
          }
        });
      }

      function convertToArray(jsonObject) {
        var theArray = [];

        console.log(jsonObject);
        for (let key in jsonObject) {
          theArray[parseInt(key)] = jsonObject[key];

        }

        return(theArray);
      }

      function convertToObject (theArray) {
        var theObject = {};

        for (let i = 0; i < theArray.length; i++) {
          theObject[i.toString()] = theArray[i];
        }

        return(theObject);
      }

      function checkAndPatch(catLookup, nextSameCat, listID) {
        if ((listID !== null) && (listID !== undefined)) {
          $http.get(`/${catLookup}/${listID}`)
          .then(unreadEntryData=>{
            var unreadEntry = unreadEntryData.data;
            console.log(unreadEntry);
            if (unreadEntry.periodical_or_book === 'book') {
              $http.get('/user_book_reviews')
              .then(reviewsData=>{
                var reviews = reviewsData.data;
                var userReview = null;
                if (reviews.length > 0) {
                  for (let i = 0; i < reviews.length; i++) {
                    if (reviews[i].books_id === unreadEntry.books_id) {
                      userReview = reviews[i].id;
                      break;
                    }
                  }
                }
                $http.get('/user_reading_lists/1')
                .then(userListData=>{
                  var userList = userListData.data;
                  var listedOneIsAccountedFor = false;
                  for (let j = 0; j < nextSameCat.length; j++) {
                    if (userList[nextSameCat[j]] === userReview) {
                      listedOneIsAccountedFor = true;
                    }
                  }
                  if (!listedOneIsAccountedFor) {
                    var index = 0;
                    while ((index < nextSameCat.length) && (userList[nextSameCat[index]] !== null)) {
                      ++index;
                    }
                    if ((userList[nextSameCat[index]] === null) && (userList[nextSameCat[index]] !== undefined)) {
                      var patchObj = {};
                      patchObj[userList[nextSameCat[index]]] = userReview;
                      $http.patch('/user_reading_lists/1', patchObj)
                      .then(patchData=>{
                        console.log(patchData.data);
                      });
                    }
                  }
                });

              });
            } else {
              $http.get('/user_book_reviews')
              .then(reviewsData=>{
                var reviews = reviewsData.data;
                var userReview = null;
                if (reviews.length > 0) {
                  for (let i = 0; i < reviews.length; i++) {
                    if (reviews[i].periodicals_id === unreadEntry.periodicals_id) {
                      userReview = reviews[i].id;
                      break;
                    }
                  }
                }
                $http.get('/user_reading_lists/1')
                .then(userListData=>{
                  var userList = userListData.data;
                  var listedOneIsAccountedFor = false;
                  for (let j = 0; j < nextSameCat.length; j++) {
                    if (userList[nextSameCat[j]] === userReview) {
                      listedOneIsAccountedFor = true;
                    }
                  }
                  if (!listedOneIsAccountedFor) {
                    var index = 0;
                    while ((index < nextSameCat.length) && (userList[nextSameCat[index]] !== null)) {
                      ++index;
                    }
                    if (userList[nextSameCat[index]] === null) {
                      var patchObj = {};
                      if ((userReview !== null) && (userReview !== undefined)) {
                        patchObj[userList[nextSameCat[index]]] = userReview;
                        $http.patch('/user_reading_lists/1', patchObj)
                        .then(patchData=>{
                          console.log(patchData.data);
                        });
                      }
                    }
                  }
                });

              });

            }
          });
        }
      }

      function updateList(categoryLookup, nextSameCategoryArr, listOfUnreadIDsArr) {
        //convert ID to review number
        if (listOfUnreadIDsArr.length > 0) {
          for (let i = 0; i < listOfUnreadIDsArr; i++) {
            checkAndPatch(categoryLookup, nextSameCategoryArr, listOfUnreadIDsArr[i]);
          }
        }
        // check for review number in reading list
        // if not there, patch review number into next available list point

      }

      function updatePrizeListPrize (position) {
        var newPrize = '';
        var prizeObject = {};
        $http.get('/prize_lists/1')
        .then(prizeListData=>{
          var prizeList = prizeListData.data;
          switch (prizeList[position]) {
            case('agatha_awards'):
              newPrize = 'desmond_elliott_prizes';
              break;
            case('anthony_awards'):
              newPrize = 'edgar_awards';
              break;
            case('arthur_c_clark_awards'):
              newPrize = 'encore_awards';
              break;
            case('barry_awards'):
              newPrize = 'flannery_oconnor_award_for_short_fictions';
              break;
            case('bram_stoker_awards'):
              newPrize = 'goodreads_choice_awards';
              break;
            case('british_science_fiction_association_awards'):
              newPrize = 'governor_general_literary_awards';
              break;
            case('chicago_tribune_heartland_prizes'):
              newPrize = 'hammett_awards';
              break;
            case('compton_crook_awards'):
              newPrize = 'hugo_awards';
              break;
            case('costa_book_awards'):
              newPrize = 'international_impac_dublin_awards';
              break;
            case('crime_writers_association_new_blood_daggers'):
              newPrize = 'itw_thriller_awards';
              break;
            case('desmond_elliott_prizes'):
              newPrize = 'james_tait_black_memorial_prizes';
              break;
            case('edgar_awards'):
              newPrize = 'james_tiptree_jr_literary_awards';
              break;
            case('encore_awards'):
              newPrize = 'kiriyama_prizes';
              break;
            case('flannery_oconnor_award_for_short_fictions'):
              newPrize = 'kirkus_prizes';
              break;
            case('goodreads_choice_awards'):
              newPrize = 'kitschies';
              break;
            case('governor_general_literary_awards'):
              newPrize = 'los_angeles_times_book_prizes';
              break;
            case('hammett_awards'):
              newPrize = 'locus_awards';
              break;
            case('hugo_awards'):
              newPrize = 'macavity_awards';
              break;
            case('international_impac_dublin_awards'):
              newPrize = 'man_booker_prizes';
              break;
            case('itw_thriller_awards'):
              newPrize = 'mary_mccarthy_prizes';
              break;
            case('james_tait_black_memorial_prizes'):
              newPrize = 'mckittrick_prizes';
              break;
            case('james_tiptree_jr_literary_awards'):
              newPrize = 'minnesota_book_awards';
              break;
            case('kiriyama_prizes'):
              newPrize = 'mythopoeic_awards';
              break;
            case('kirkus_prizes'):
              newPrize = 'national_book_awards';
              break;
            case('kitschies'):
              newPrize = 'national_book_critics_circle_awards';
              break;
            case('los_angeles_times_book_prizes'):
              newPrize = 'nebula_awards';
              break;
            case('locus_awards'):
              newPrize = 'orange_prizes';
              break;
            case('macavity_awards'):
              newPrize = 'pen_bellwether_prize_for_socially_engaged_fictions';
              break;
            case('man_booker_prizes'):
              newPrize = 'pen_faulkner_awards';
              break;
            case('mary_mccarthy_prizes'):
              newPrize = 'pen_hemingway_awards';
              break;
            case('mckittrick_prizes'):
              newPrize = 'pen_open_book_awards';
              break;
            case('minnesota_book_awards'):
              newPrize = 'pen_translation_prizes';
              break;
            case('mythopoeic_awards'):
              newPrize = 'philip_k_dick_awards';
              break;
            case('national_book_awards'):
              newPrize = 'pulitzer_prize_for_fictions';
              break;
            case('national_book_critics_circle_awards'):
              newPrize = 'pulp_ark_new_pulp_awards';
              break;
            case('nebula_awards'):
              newPrize = 'rogers_writers_trust_fiction_prizes';
              break;
            case('orange_prizes'):
              newPrize = 'scotiabank_giller_prizes';
              break;
            case('pen_bellwether_prize_for_socially_engaged_fictions'):
              newPrize = 'shamus_awards';
              break;
            case('pen_faulkner_awards'):
              newPrize = 'shirley_jackson_awards';
              break;
            case('pen_hemingway_awards'):
              newPrize = 'sidewise_awards';
              break;
            case('pen_open_book_awards'):
              newPrize = 'spur_awards';
              break;
            case('pen_translation_prizes'):
              newPrize = 'sunburst_awards';
              break;
            case('philip_k_dick_awards'):
              newPrize = 'this_is_horror_awards';
              break;
            case('pulitzer_prize_for_fictions'):
              newPrize = 'thurber_prizes';
              break;
            case('pulp_ark_new_pulp_awards'):
              newPrize = 'walter_scott_prizes';
              break;
            case('rogers_writers_trust_fiction_prizes'):
              newPrize = 'world_fantasy_awards';
              break;
            case('scotiabank_giller_prizes'):
              newPrize = 'wonderland_book_awards';
              break;
            case('shamus_awards'):
              newPrize = 'agatha_awards';
              break;
            case('shirley_jackson_awards'):
              newPrize = 'anthony_awards';
              break;
            case('sidewise_awards'):
              newPrize = 'arthur_c_clark_awards';
              break;
            case('spur_awards'):
              newPrize = 'barry_awards';
              break;
            case('sunburst_awards'):
              newPrize = 'bram_stoker_awards';
              break;
            case('this_is_horror_awards'):
              newPrize = 'british_science_fiction_association_awards';
              break;
            case('thurber_prizes'):
              newPrize = 'chicago_tribune_heartland_prizes';
              break;
            case('walter_scott_prizes'):
              newPrize = 'compton_crook_awards';
              break;
            case('world_fantasy_awards'):
              newPrize = 'costa_book_awards';
              break;
            case('wonderland_book_awards'):
              newPrize = 'crime_writers_association_new_blood_daggers';
              break;
            default:
              console.log('unhandled exception');
          }
          prizeObject[position] = newPrize;
          $http.patch('/prize_lists/1', prizeObject)
          .then(data=>{
            console.log(data.data);
            $http.get(`/${newPrize}`)
            .then(relevantPrizeListData=>{
              var relevantPrizeList = relevantPrizeListData.data;
              var nextBookID = null;
              var indexOfPrize = null;
              for (let i = 0; i < relevantPrizeList.length; i++) {
                if (!relevantPrizeList[i].is_completed) {
                  nextBookID = relevantPrizeList[i].id;
                  indexOfPrize = i;
                  break;
                }
              }
              $http.get('/user_book_reviews')
              .then(reviewsData=>{
                var reviews = reviewsData.data;
                var reviewID = null;
                if (relevantPrizeList[indexOfPrize].periodical_or_book === 'book') {
                  for (let j = 0; j < reviews.length; j++) {
                    if (reviews[j].books_id === relevantPrizeList[indexOfPrize].books_id) {
                      reviewID = reviews[j].id;
                    }
                  }
                } else {
                  for (let k = 0; k < reviews.length; k++) {
                    if (reviews[k].periodicals_id === relevantPrizeList[indexOfPrize].periodicals_id) {
                      reviewID = reviews[k].id;
                    }
                  }

                }
                var updatePrizeObject = {};
                updatePrizeObject[position] = reviewID;
                $http.patch('/user_reading_lists/1', updatePrizeObject)
                .then(datadata=>{
                  console.log(datadata.data);
                });
              });
            });
          });
        });
      }

      function patchCompletionStatus (specificList, completedReviewBook, positionInList) {
        if (specificList !== 'prize_lists') {
          if ((completedReviewBook !== null) && (completedReviewBook !== undefined)) {
            $http.get(`/user_book_reviews/${completedReviewBook}`)
            .then(reviewData=>{
              var review = reviewData.data;
              if (review.periodical_or_book === "book") {
                var bookID = review.books_id;
                $http.get(`/${specificList}`)
                .then(subListData=>{
                  var subList = subListData.data;
                  console.log(subList);
                  var indexPoint = null;
                  var splicer = {};
                  for (let i = 0; i < subList.length; i++) {
                    if (subList[i].books_id === bookID) {
                      indexPoint = subList[i].id;
                      break;
                    }
                  }
                  splicer.is_completed = true;
                  if ((indexPoint !== null) && (indexPoint !== undefined)) {
                    $http.patch(`/${specificList}/${indexPoint}`, splicer)
                    .then(data=>{
                      console.log(data.data);
                    });
                  }
                });
              } else {
                var periodicalID = review.periodicals_id;
                $http.get(`/${specificList}`)
                .then(subListData=>{
                  var subList = subListData.data;
                  var indexPoint = null;
                  var splicer = {};
                  for (let i = 0; i < subList.length; i++) {
                    if (subList[i].periodicals_id === periodicalID) {
                      indexPoint = subList[i].id;
                      break;
                    }
                  }
                  splicer.is_completed = true;
                  if ((indexPoint !== null) && (indexPoint !== undefined)) {
                    $http.patch(`/${specificList}/${indexPoint}`, splicer)
                    .then(data=>{
                      console.log(data.data);
                    });
                  }
                });
              }
            });
          }
        } else {
          //update read status on prize list
          // updatePrizeListPrize (positionInList);
          $http.get('/prize_lists/1')
          .then(prizeListData=>{
            var prizeList = prizeListData.data;
            var prizeTitle = prizeList[positionInList];
            // switch (prizeTitle) {
            //   case('agatha_awards'):
            //     prizeTitle = 'shamus_awards';
            //     break;
            //   case('anthony_awards'):
            //     prizeTitle = 'shirley_jackson_awards';
            //     break;
            //   case ('arthur_c_clark_awards'):
            //     prizeTitle = 'sidewise_awards';
            //     break;
            //   case ('barry_awards'):
            //     prizeTitle = 'spur_awards';
            //     break;
            //   case ('bram_stoker_awards'):
            //     prizeTitle = 'sunburst_awards';
            //     break;
            //   case ('british_science_fiction_association_awards'):
            //     prizeTitle = 'this_is_horror_awards';
            //     break;
            //   case ('chicago_tribune_heartland_prizes'):
            //     prizeTitle = 'thurber_prizes';
            //     break;
            //   case ('compton_crook_awards'):
            //     prizeTitle = 'walter_scott_prizes';
            //     break;
            //   case ('costa_book_awards'):
            //     prizeTitle = 'world_fantasy_awards';
            //     break;
            //   case ('crime_writers_association_new_blood_daggers'):
            //     prizeTitle = 'wonderland_book_awards';
            //     break;
            //   case ('desmond_elliott_prizes'):
            //     prizeTitle = 'agatha_awards';
            //     break;
            //   case ('edgar_awards'):
            //     prizeTitle = 'anthony_awards';
            //     break;
            //   case ('encore_awards'):
            //     prizeTitle = 'arthur_c_clark_awards';
            //     break;
            //   case ('flannery_oconnor_award_for_short_fictions'):
            //     prizeTitle = 'barry_awards';
            //     break;
            //   case ('goodreads_choice_awards'):
            //     prizeTitle = 'bram_stoker_awards';
            //     break;
            //   case ('governor_general_literary_awards'):
            //     prizeTitle = 'british_science_fiction_association_awards';
            //     break;
            //   case ('hammett_awards'):
            //     prizeTitle = 'chicago_tribune_heartland_prizes';
            //     break;
            //   case ('hugo_awards'):
            //     prizeTitle = 'compton_crook_awards';
            //     break;
            //   case ('international_impac_dublin_awards'):
            //     prizeTitle = 'costa_book_awards';
            //     break;
            //   case ('itw_thriller_awards'):
            //     prizeTitle = 'crime_writers_association_new_blood_daggers';
            //     break;
            //   case ('james_tait_black_memorial_prizes'):
            //     prizeTitle = 'desmond_elliott_prizes';
            //     break;
            //   case ('james_tiptree_jr_literary_awards'):
            //     prizeTitle = 'edgar_awards';
            //     break;
            //   case ('kiriyama_prizes'):
            //     prizeTitle = 'encore_awards';
            //     break;
            //   case ('kirkus_prizes'):
            //     prizeTitle = 'flannery_oconnor_award_for_short_fictions';
            //     break;
            //   case ('kitschies'):
            //     prizeTitle = 'goodreads_choice_awards';
            //     break;
            //   case ('los_angeles_times_book_prizes'):
            //     prizeTitle = 'governor_general_literary_awards';
            //     break;
            //   case ('locus_awards'):
            //     prizeTitle = 'hammett_awards';
            //     break;
            //   case ('macavity_awards'):
            //     prizeTitle = 'hugo_awards';
            //     break;
            //   case ('man_booker_prizes'):
            //     prizeTitle = 'international_impac_dublin_awards';
            //     break;
            //   case ('mary_mccarthy_prizes'):
            //     prizeTitle = 'itw_thriller_awards';
            //     break;
            //   case ('mckittrick_prizes'):
            //     prizeTitle = 'james_tait_black_memorial_prizes';
            //     break;
            //   case ('minnesota_book_awards'):
            //     prizeTitle = 'james_tiptree_jr_literary_awards';
            //     break;
            //   case ('mythopoeic_awards'):
            //     prizeTitle = 'kiriyama_prizes';
            //     break;
            //   case ('national_book_awards'):
            //     prizeTitle = 'kirkus_prizes';
            //     break;
            //   case ('national_book_critics_circle_awards'):
            //     prizeTitle = 'kitschies';
            //     break;
            //   case ('nebula_awards'):
            //     prizeTitle = 'los_angeles_times_book_prizes';
            //     break;
            //   case ('orange_prizes'):
            //     prizeTitle = 'locus_awards';
            //     break;
            //   case ('pen_bellwether_prize_for_socially_engaged_fictions'):
            //     prizeTitle = 'macavity_awards';
            //     break;
            //   case ('pen_faulkner_awards'):
            //     prizeTitle = 'man_booker_prizes';
            //     break;
            //   case ('pen_hemingway_awards'):
            //     prizeTitle = 'mary_mccarthy_prizes';
            //     break;
            //   case ('pen_open_book_awards'):
            //     prizeTitle = 'mckittrick_prizes';
            //     break;
            //   case ('pen_translation_prizes'):
            //     prizeTitle = 'minnesota_book_awards';
            //     break;
            //   case ('philip_k_dick_awards'):
            //     prizeTitle = 'mythopoeic_awards';
            //     break;
            //   case ('pulitzer_prize_for_fictions'):
            //     prizeTitle = 'national_book_awards';
            //     break;
            //   case ('pulp_ark_new_pulp_awards'):
            //     prizeTitle = 'national_book_critics_circle_awards';
            //     break;
            //   case ('rogers_writers_trust_fiction_prizes'):
            //     prizeTitle = "nebula_awards";
            //     break;
            //   case ('scotiabank_giller_prizes'):
            //     prizeTitle = 'orange_prizes';
            //     break;
            //   case ('shamus_awards'):
            //     prizeTitle = 'pen_bellwether_prize_for_socially_engaged_fictions';
            //     break;
            //   case ('shirley_jackson_awards'):
            //     prizeTitle = 'pen_faulkner_awards';
            //     break;
            //   case ('sidewise_awards'):
            //     prizeTitle = 'pen_hemingway_awards';
            //     break;
            //   case ('spur_awards'):
            //     prizeTitle = 'pen_open_book_awards';
            //     break;
            //   case ('sunburst_awards'):
            //     prizeTitle = 'pen_translation_prizes';
            //     break;
            //   case ('this_is_horror_awards'):
            //     prizeTitle = 'philip_k_dick_awards';
            //     break;
            //   case ('thurber_prizes'):
            //     prizeTitle = 'pulitzer_prize_for_fictions';
            //     break;
            //   case ('walter_scott_prizes'):
            //     prizeTitle = 'pulp_ark_new_pulp_awards';
            //     break;
            //   case ('world_fantasy_awards'):
            //     prizeTitle = 'rogers_writers_trust_fiction_prizes';
            //     break;
            //   case ('wonderland_book_awards'):
            //     prizeTitle = 'scotiabank_giller_prizes';
            //     break;
            //   default:
            //     console.log('unhandled exception');
            //
            // }
            $http.get(`/${prizeTitle}`)
            .then(prizeReadsData=>{
              var prizeReads = prizeReadsData.data;
              if (completedReviewBook !== null) {
                $http.get(`/user_book_reviews/${completedReviewBook}`)
                .then(reviewData=>{
                  var review = reviewData.data;
                  if (review.periodical_or_book === "book") {
                    var bookID = review.books_id;

                    var indexPoint = null;
                    var splicer = {};
                    for (let i = 0; i < prizeReads.length; i++) {
                      if (prizeReads[i].books_id === bookID) {
                        indexPoint = prizeReads[i].id;
                        break;
                      }
                    }
                    splicer.is_completed = true;
                    console.log(indexPoint);
                    if ((indexPoint !== null) && (indexPoint !== undefined)) {
                      $http.patch(`/${prizeTitle}/${indexPoint}`, splicer)
                      .then(data=>{
                        console.log(data.data);
                        updatePrizeListPrize (positionInList);
                      });
                    }
                  } else {
                    var periodicalID = review.periodicals_id;

                    var indexPoint2 = null;
                    var splicer2 = {};
                    for (let i = 0; i < prizeReads.length; i++) {
                      if (prizeReads[i].books_id === periodicalID) {
                        indexPoint2 = prizeReads[i].id;
                        break;
                      }
                    }
                    splicer2.is_completed = true;
                    if ((indexPoint2 !== null) && (indexPoint2 !== undefined)) {
                      $http.patch(`/${prizeTitle}/${indexPoint2}`, splicer2)
                      .then(data=>{
                        console.log(data.data);
                        updatePrizeListPrize (positionInList);
                      });
                    }
                  }
                });
              }
            });
          });
        }
      }

      function sortIdArray (numbersArr) {
        var sortedArr = numbersArr;
        var swapped = false;

        do {
          swapped = false;
          for (let i = 0; i < (sortedArr.length-1); i++) {
            if (sortedArr[i] > sortedArr[i+1]) {
              swapped = true;
              [sortedArr[i], sortedArr[i+1]] = [sortedArr[i+1], sortedArr[i]];
            }
          }
        } while (swapped);

        return(sortedArr);
      }

      function setTimestampFormat (dateString) {
        var formattedString = '';
        var year = dateString.slice(11,15);
        var month = '00';
        var day = dateString.slice(8,10);
        var time = dateString.slice(16,24);

        switch (dateString.slice(4,7)) {
          case ('Jan'):
            month = '01-';
            break;
          case ('Feb'):
            month = '02-';
            break;
          case ('Mar'):
            month = '03-';
            break;
          case ("Apr"):
            month = '04-';
            break;
          case ('May'):
            month = '05-';
            break;
          case ('Jun'):
            month = '06-';
            break;
          case ('Jul'):
            month = '07-';
            break;
          case ('Aug'):
            month = '08-';break;
          case ('Sep'):
            month = '09-';
            break;
          case ('Oct'):
            month = '10-';
            break;
          case ('Nov'):
            month = '11-';
            break;
          case ('Dec'):
            month = '12-';
            break;
          default:
            month = '00-';
        }

        formattedString = year + '-' + month + day + "T" + time + '.000Z';
        return(formattedString);
      }

      function updateAdvanceReadingList (userReviewID) {
        var readingListObject = {};
        var lookupList = '';
        var nextStep = '';
        var nextLikeness = [];
        var timestampe = new Date();
        var timestamp = setTimestampFormat(timestampe.toString());
        // var moment = require('moment');

        $http.get('/user_reading_lists/1')
        .then(theListData=>{
          var theList = theListData.data;
          var readList = convertToArray(theList.completed_readings);
          readList[readList.length] = userReviewID;
          readingListObject.completed_readings = (convertToObject(readList));

          readingListObject.updated_at = timestamp;
          console.log(readingListObject);
          // if ((theList[theList.current_position] !== userReviewID) || (theList.interrupt !== userReviewID)) {
          //   alert("Logic Error - review ID mismatch");
          // }

          switch (theList.current_position) {
            case ('female_author_selection_1'):
              lookupList = "female_author_selections";
              nextStep = 'crime_series_1';
              nextLikeness = ['female_author_selection_2', 'female_author_selection_3', 'female_author_selection_4', 'female_author_selection_1'];
              break;
            case ('crime_series_1'):
              lookupList = "crime_series";
              nextStep = 'backlog_ebook_1';
              nextLikeness = ['crime_series_2', 'crime_series_3', 'crime_series_4', 'crime_series_5', 'crime_series_6', 'crime_series_7', 'crime_series_8', 'crime_series_9', 'crime_series"10', 'crime_series_11', 'crime_series_12', 'crime_series_13', 'crime_series_14', 'crime_series_15', 'crime_series_16', 'crime_seriees_1'];
              break;
            case ('backlog_ebook_1'):
              lookupList = "backlog_ebooks";
              nextStep = "science_fiction_series_1";
              nextLikeness = ['backlog_ebook_2', 'backlog_ebook_3', 'backlog_ebook_4', 'backlog_ebook_1'];
              break;
            case ('science_fiction_series_1'):
              lookupList = "science_fiction_series";
              nextStep = "free_selection_1";
              nextLikeness = ['science_fiction_series_2', 'science_fiction_series_3', 'science_fiction_4', 'science_fiction_5', 'science_fiction_6', 'science_fiction_7', 'science_fiction_8', 'science_fiction_9', 'science_fiction_10', 'science_fictin_11', 'science_fiction_12', 'science_fictin_13', 'science_fiction_14', 'science_fiction_15', 'science_fiction_16', 'science_fiction_1'];
              break;
            case ('free_selection_1'):
              lookupList = "free_selections";
              nextStep = "crime_series_2";
              nextLikeness = ['free_selection_2', 'free_selection_3', 'free_selection_4', 'free_selection_5', 'free_selection_6', 'free_selection_7', 'free_selection_8', 'free_selection_1'];
              break;
            case ('crime_series_2'):
              lookupList = "crime_series";
              nextStep = "insert_1";
              nextLikeness = ['crime_series_3', 'crime_series_4', 'crime_series_5', 'crime_series_6', 'crime_series_7', 'crime_series_8', 'crime_series_9', 'crime_series_10', 'crime_series_11', 'crime_series_12', 'crime_series_13', 'crime_series_14', 'crime_series_15', 'crime_series_16', 'crime_series_1', 'crime_series_2'];
              break;
            case ('insert_1'):
              lookupList = 'inserts';
              nextStep = 'science_fiction_series_2';
              nextLikeness = ['insert_2', 'insert_3', 'insert_4', 'insert_5', 'insert_6', 'insert_7', 'insert_8', 'insert_1'];
              break;
            case ('science_fiction_series_2'):
              lookupList = "science_fiction_series";
              nextStep = 'literary_journal_1';
              nextLikeness = ['science_fiction_series_3', 'science_fiction_series_4', 'science_fiction_series_5', 'science_fiction_series_6', 'science_fiction_series_7', 'science_fiction_series_8', 'science_fiction_series_9', 'science_fiction_series_10', 'science_fiction_series_11', 'science_fiction_series_12', 'science_fiction_series_13', 'science_fiction_series_14', 'science_fiction_series_15', 'science_fiction_series_16', 'science_fiction_series_1', 'science_fiction_series_2'];
              break;
            case ('literary_journal_1'):
              lookupList = "literary_journals";
              nextStep = 'bizarro_fiction_1';
              nextLikeness = ['literary_journal_2', 'literary_journal_3', 'literary_journal_4', 'literary_journal_5', 'literary_journal_6', 'literary_journal_7', 'literary_journal_8', 'literary_journal_9', 'literary_journal_10', 'literary_journal_11', 'literary_journal_12', 'literary_journal_13', 'literary_journal_14', 'literary_journal_1'];
              break;
            case ('bizarro_fiction_1'):
              lookupList = "bizarro_fictions";
              nextStep = 'genre_journal_1';
              nextLikeness = ['bizarro_fiction_2', 'bizarro_fiction_3', 'bizarro_fiction_1'];
              break;
            case ('genre_journal_1'):
              lookupList = "genre_journals";
              nextStep = 'classic_1';
              nextLikeness = ['genre_journal_2', 'genre_journal_3', 'genre_journal_4', 'genre_journal_5', 'genre_journal_6', 'genre_journal_7', 'genre_journal_8', 'genre_journal_9', 'genre_journal_10', 'genre_journal_11', 'genre_journal_12', 'genre_journal_13', 'genre_journal_14', 'genre_journal_1'];
              break;
            case ('classic_1'):
              lookupList = "classics";
              nextStep = 'literary_journal_2';
              nextLikeness = ['classic_2', 'classic_3', 'classic_1'];
              break;
            case ('literary_journal_2'):
              lookupList = "literary_journals";
              nextStep = 'compendium_1';
              nextLikeness = ['literary_journal_3', 'literary_journal_4', 'literary_journal_5', 'literary_journal_6', 'literary_journal_7', 'literary_journal_8', 'literary_journal_9', 'literary_journal_10', 'literary_journal_11', 'literary_journal_12', 'literary_journal_13', 'literary_journal_14', 'literary_journal_1', 'literary_journal_2'];
              break;
            case ('compendium_1'):
              lookupList = "compendiums";
              nextStep = "prize_1";
              nextLikeness = ['compendium_2', 'compendium_3', 'compendium_1'];
              break;
            case ('prize_1'):
              lookupList = "prize_lists";
              nextStep = 'male_author_selection_1';
              break;
            case ('male_author_selection_1'):
              lookupList = "male_author_selections";
              nextStep = 'crime_series_3';
              nextLikeness = ['male_author_selection_2', 'male_author_selection_3', 'male_author_selection_4', 'male_author_selection_1'];
              break;
            case ('crime_series_3'):
              lookupList = "crime_series";
              nextStep = 'backlog_physical_book_1';
              nextLikeness = ['crime_series_4', 'crime_series_5', 'crime_series_6', 'crime_series_7', 'crime_series_8', 'crime_series_9', 'crime_series_10', 'crime_series_11', 'crime_series_12', 'crime_series_13', 'crime_series_14', 'crime_series_15', 'crime_series_16', 'crime_series_1', 'crime_series_2', 'crime_series_3'];
              break;
            case ('backlog_physical_book_1'):
              lookupList = "backlog_physical_books";
              nextStep = 'science_fiction_series_3';
              nextLikeness = ['backlog_physical_book_2', 'backlog_physical_book_3', 'backlog_physical_book_4', 'backlog_physical_book_1'];
              break;
            case ('science_fiction_series_3'):
              lookupList = "science_fiction_series";
              nextStep = 'free_selection_2';
              nextLikeness = ['science_fiction_series_4', 'science_fiction_series_5', 'science_fiction_series_6', 'science_fiction_series_7', 'science_fiction_series_8', 'science_fiction_series_9', 'science_fiction_series_10', 'science_fiction_series_11', 'science_fiction_series_12', 'science_fiction_series_13', 'science_fiction_series_14', 'science_fiction_series_15', 'science_fiction_series_16', 'science_fiction_series_1', 'science_fiction_series_2', 'science_fiction_series_3'];
              break;
            case ('free_selection_2'):
              lookupList = "free_selections";
              nextStep = 'crime_series_4';
              nextLikeness = ['free_selection_3', 'free_selection_4', 'free_selection_5', 'free_selection_6', 'free_selection_7', 'free_selection_8', 'free_selection_1', 'free_selection_2', 'free_selection_3'];
              break;
            case ('crime_series_4'):
              lookupList = "crime_series";
              nextStep = 'insert_2';
              nextLikeness = ['crime_series_5', 'crime_series_6', 'crime_series_7', 'crime_series_8', 'crime_series_9', 'crime_series_10', 'crime_series_11', 'crime_series_12', 'crime_series_13', 'crime_series_14', 'crime_series_15', 'crime_series_16', 'crime_series_1', 'crime_series_2', 'crime_series_3', 'crime_series_4'];
              break;
            case ('insert_2'):
              lookupList = 'inserts';
              nextStep = 'science_fiction_series_4';
              nextLikeness = ['insert_3', 'insert_4', 'insert_5', 'insert_6', 'insert_7', 'insert_8', 'insert_1', 'insert_2'];
              break;
            case ('science_fiction_series_4'):
              lookupList = "science_fiction_series";
              nextStep = 'genre_journal_2';
              nextLikeness = ['science_fiction_series_5', 'science_fiction_series_6', 'science_fiction_series_7', 'science_fiction_series_8', 'science_fiction_series_9', 'science_fiction_series_10', 'science_fiction_series_11', 'science_fiction_series_12', 'science_fiction_series_13', 'science_fiction_series_14', 'science_fiction_series_15', 'science_fiction_series_16', 'science_fiction_series_1', 'science_fiction_series_2', 'science_fiction_series_3', 'science_fiction_series_4'];
              break;
            case ('genre_journal_2'):
              lookupList = "genre_journals";
              nextStep = 'non_fiction_1';
              nextLikeness = ['genre_journal_3', 'genre_journal_4', 'genre_journal_5', 'genre_journal_6', 'genre_journal_7', 'genre_journal_8', 'genre-journal_9', 'genre_journal_10', 'genre_journal_11', 'genre_journal_12', 'genre_journal_13', 'genre_journal_14', 'genre_journal_1', 'genre_journal_2'];
              break;
            case ('non_fiction_1'):
              lookupList = "non_fictions";
              nextStep = 'literary_journal_3';
              nextLikeness = ['non_fiction_2', 'non_fiction_3', 'non_fiction_1'];
              break;
            case ('literary_journal_3'):
              lookupList = "literary_journals";
              nextStep = 'anthology_1';
              nextLikeness = ['literary_journal_4', 'literary_journal_5', 'literary_journal_6', 'literary_journal_7', 'literary_journal_8', 'literary_journal_9', 'literary_journal_10', 'literary_journal_11', 'literary_journal_12', 'literary_journal_13', 'literary_journal_14', 'literary_journal_1', 'literary_journal_2', 'literary_journal_3'];
              break;
            case ('anthology_1'):
              lookupList = "anthologies";
              nextStep = 'genre_journal_3';
              nextLikeness = ['anthology_2', 'anthology_3'];
              break;
            case ('genre_journal_3'):
              lookupList = "genre_journals";
              nextStep = 'roulette_1';
              nextLikeness = ['genre_journal_4', 'genre_journal_5', 'genre_journal_6', 'genre_journal_7', 'genre_journal_8', 'genre-journal_9', 'genre_journal_10', 'genre_journal_11', 'genre_journal_12', 'genre_journal_13', 'genre_journal_14', 'genre_journal_1', 'genre_journal_2', 'genre_journal_3'];
              break;
            case ('roulette_1'):
              lookupList = "roulettes";
              nextStep = 'prize_2';
              nextLikeness = ['roulette_2', 'roulette_3', 'roulette_4', 'roulette_5', 'roulette_6', 'roulette_1'];
              break;
            case ('prize_2'):
              lookupList = "prize_lists";
              nextStep = 'graphic_novel_1';
              break;
            case ('graphic_novel_1'):
              lookupList = "graphic_novels";
              nextStep = 'female_author_selection_2';
              nextLikeness = ['graphic_novel_2', 'graphic_novel_3', 'graphic_novel_4', 'graphic_novel_1'];
              break;
            case ('female_author_selection_2'):
              lookupList = "female_author_selections";
              nextStep = 'crime_series_5';
              nextLikeness = ['female_author_selection_3', 'female_author_selection_4', 'female_author_selection_1', 'female_author_selection_2'];
              break;
            case ('crime_series_5'):
              lookupList = "crime_series";
              nextStep = 'backlog_ebook_2';
              nextLikeness = ['crime_series_6', 'crime_series_7', 'crime_series_8', 'crime_series_9', 'crime_series_10', 'crime_series_11', 'crime_series_12', 'crime_series_13', 'crime_series_14', 'crime_series_15', 'crime_series_16', 'crime_series_1', 'crime_series_2', 'crime_series_3', 'crime_series_4', 'crime_series_5'];
              break;
            case ('backlog_ebook_2'):
              lookupList = "backlog_ebooks";
              nextStep = 'science_fiction_series_5';
              nextLikeness = ['backlog_ebook_3', 'backlog_ebook_4', 'backlog_ebook_1', 'backlog_ebook_2'];
              break;
            case ('science_fiction_series_5'):
              lookupList = "science_fiction_series";
              nextStep = 'literary_journal_4';
              nextLikeness = ['science_fiction_series_6', 'science_fiction_series_7', 'science_fiction_series_8', 'science_fiction_series_9', 'science_fiction_series_10', 'science_fiction_series_11', 'science_fiction_series_12', 'science_fiction_series_13', 'science_fiction_series_14', 'science_fiction_series_15', 'science_fiction_series_16', 'science_fiction_series_1', 'science_fiction_series_2', 'science_fiction_series_3', 'science_fiction_series_4', 'science_fiction_series_5'];
              break;
            case ('literary_journal_4'):
              lookupList = "literary_journals";
              nextStep = 'free_selection_3';
              nextLikeness = ['literary_journal_5', 'literary_journal_6', 'literary_journal_7', 'literary_journal_8', 'literary_journal_9', 'literary_journal_10', 'literary_journal_11', 'literary_journal_12', 'literary_journal_13', 'literary_journal_14', 'literary_journal_1', 'literary_journal_2', 'literary_journal_4', 'literary_journal_5'];
              break;
            case ('free_selection_3'):
              lookupList = "free_selections";
              nextStep = 'crime_series_6';
              nextLikeness = ['free_selection_4', 'free_selection_5', 'free_selection_6', 'free_selection_7', 'free_selection_8', 'free_selection_1', 'free_selection_2', 'free_selection_3'];
              break;
            case ('crime_series_6'):
              lookupList = "crime_series";
              nextStep = 'insert_3';
              nextLikeness = ['crime_series_7', 'crime_series_8', 'crime_series_9', 'crime_series_10', 'crime_series_11', 'crime_series_12', 'crime_series_13', 'crime_series_14', 'crime_series_15', 'crime_series_16', 'crime_series_1', 'crime_series_2', 'crime_series_3', 'crime_series_4', 'crime_series_5', 'crime_series_6'];
              break;
            case ('insert_3'):
              lookupList = 'inserts';
              nextStep = 'science_fiction_series_6';
              nextLikeness = ['insert_4', 'insert_5', 'insert_6', 'insert_7', 'insert_8', 'insert_1', 'insert_2', 'insert_3'];
              break;
            case ('science_fiction_series_6'):
              lookupList = "science_fiction_series";
              nextStep = 'genre_journal_4';
              nextLikeness = ['science_fiction_series_7', 'science_fiction_series_8', 'science_fiction_series_9', 'science_fiction_series_10', 'science_fiction_series_11', 'science_fiction_series_12', 'science_fiction_series_13', 'science_fiction_series_14', 'science_fiction_series_15', 'science_fiction_series_16', 'science_fiction_series_1', 'science_fiction_series_2', 'science_fiction_series_3', 'science_fiction_series_4', 'science_fiction_series_5', 'science_fiction_series_6'];
              break;
            case ('genre_journal_4'):
              lookupList = "genre_journals";
              nextStep = 'roulette_2';
              nextLikeness = ['genre_journal_5', 'genre_journal_6', 'genre_journal_7', 'genre_journal_8', 'genre-journal_9', 'genre_journal_10', 'genre_journal_11', 'genre_journal_12', 'genre_journal_13', 'genre_journal_14', 'genre_journal_1', 'genre_journal_2', 'genre_journal_3', 'genre_journal_4'];
              break;
            case ('roulette_2'):
              lookupList = "roulettes";
              nextStep = 'literary_journal_5';
              nextLikeness = ['roulette_3', 'roulette_4', 'roulette_5', 'roulette_6', 'roulette_1', 'roulette_2'];
              break;
            case ('literary_journal_5'):
              lookupList = "literary_journals";
              nextStep = 'occult_reading_1';
              nextLikeness = ['literary_journal_6', 'literary_journal_7', 'literary_journal_8', 'literary_journal_9', 'literary_journal_10', 'literary_journal_11', 'literary_journal_12', 'literary_journal_13', 'literary_journal_14', 'literary_journal_1', 'literary_journal_2', 'literary_journal_4', 'literary_journal_5'];
              break;
            case ('occult_reading_1'):
              lookupList = "occult_readings";
              nextStep = 'genre_journal_5';
              nextLikeness = ['occult_reading_2', 'occult_reading_3', 'occult_reading_1'];
              break;
            case ('genre_journal_5'):
              lookupList = "genre_journals";
              nextStep = 'bizarro_fiction_2';
              nextLikeness = ['genre_journal_6', 'genre_journal_7', 'genre_journal_8', 'genre-journal_9', 'genre_journal_10', 'genre_journal_11', 'genre_journal_12', 'genre_journal_13', 'genre_journal_14', 'genre_journal_1', 'genre_journal_2', 'genre_journal_3', 'genre_journal_4', 'genre_journal_5'];
              break;
            case ('bizarro_fiction_2'):
              lookupList = "bizarro_fictions";
              nextStep = 'prize_3';
              nextLikeness = ['bizarro_fiction_3', 'bizarro_fiction_1', 'bizarro_fiction_2'];
              break;
            case ('prize_3'):
              lookupList = "prize_lists";
              nextStep = 'male_author_selection_2';
              break;
            case ('male_author_selection_2'):
              lookupList = "male_author_selections";
              nextStep = 'crime_series_7';
              nextLikeness = ['male_author_selection_3', 'male_author_selection_4', 'male_author_selection_1', 'male_author_selection_2'];
              break;
            case ('crime_series_7'):
              lookupList = "crime_series";
              nextStep = 'backlog_physical_book_2';
              nextLikeness = ['crime_series_8', 'crime_series_9', 'crime_series_10', 'crime_series_11', 'crime_series_12', 'crime_series_13', 'crime_series_14', 'crime_series_15', 'crime_series_16', 'crime_series_1', 'crime_series_2', 'crime_series_3', 'crime_series_4', 'crime_series_5', 'crime_series_6', 'crime_series_7'];
              break;
            case ('backlog_physical_book_2'):
              lookupList = "backlog_physical_books";
              nextStep = 'science_fiction_series_7';
              nextLikeness = ['backlog_physical_book_3', 'backlog_physical_book_4', 'backlog_phsical_book_1', 'backlog_physical_book_2'];
              break;
            case ('science_fiction_series_7'):
              lookupList = "science_fiction_series";
              nextStep = 'literary_journal_6';
              nextLikeness = ['science_fiction_series_8', 'science_fiction_series_9', 'science_fiction_series_10', 'science_fiction_series_11', 'science_fiction_series_12', 'science_fiction_series_13', 'science_fiction_series_14', 'science_fiction_series_15', 'science_fiction_series_16', 'science_fiction_series_1', 'science_fiction_series_2', 'science_fiction_series_3', 'science_fiction_series_4', 'science_fiction_series_5', 'science_fiction_series_6', 'science_fiction_series_7'];
              break;
            case ('literary_journal_6'):
              lookupList = "literary_journals";
              nextStep = 'free_selection_4';
              nextLikeness = ['literary_journal_7', 'literary_journal_8', 'literary_journal_9', 'literary_journal_10', 'literary_journal_11', 'literary_journal_12', 'literary_journal_13', 'literary_journal_14', 'literary_journal_1', 'literary_journal_2', 'literary_journal_4', 'literary_journal_5', 'literary_journal_6'];
              break;
            case ('free_selection_4'):
              lookupList = "free_selections";
              nextStep = 'crime_series_8';
              nextLikeness = ['free_selection_5', 'free_selection_6', 'free_selection_7', 'free_selection_8', 'free_selection_1', 'free_selection_2', 'free_selection_3', 'free_selection_4'];
              break;
            case ('crime_series_8'):
              lookupList = "crime_series";
              nextStep = 'insert_4';
              nextLikeness = ['crime_series_9', 'crime_series_10', 'crime_series_11', 'crime_series_12', 'crime_series_13', 'crime_series_14', 'crime_series_15', 'crime_series_16', 'crime_series_1', 'crime_series_2', 'crime_series_3', 'crime_series_4', 'crime_series_5', 'crime_series_6', 'crime_series_7', 'crime_series_8'];
              break;
            case ('insert_4'):
              lookupList = 'inserts';
              nextStep = 'science_fiction_series_8';
              nextLikeness = ['insert_5', 'insert_6', 'insert_7', 'insert_8', 'insert_1', 'insert_2', 'insert_3', 'insert_4'];
              break;
            case ('science_fiction_series_8'):
              lookupList = "science_fiction_series";
              nextStep = 'genre_journal_6';
              nextLikeness = ['science_fiction_series_9', 'science_fiction_series_10', 'science_fiction_series_11', 'science_fiction_series_12', 'science_fiction_series_13', 'science_fiction_series_14', 'science_fiction_series_15', 'science_fiction_series_16', 'science_fiction_series_1', 'science_fiction_series_2', 'science_fiction_series_3', 'science_fiction_series_4', 'science_fiction_series_5', 'science_fiction_series_6', 'science_fiction_series_7', 'science_fiction_series_8'];
              break;
            case ('genre_journal_6'):
              lookupList = "genre_journals";
              nextStep = 'classic_2';
              nextLikeness = ['genre_journal_7', 'genre_journal_8', 'genre-journal_9', 'genre_journal_10', 'genre_journal_11', 'genre_journal_12', 'genre_journal_13', 'genre_journal_14', 'genre_journal_1', 'genre_journal_2', 'genre_journal_3', 'genre_journal_4', 'genre_journal_5', 'genre_journal_6'];
              break;
            case ('classic_2'):
              lookupList = "classics";
              nextStep = 'literary_journal_7';
              nextLikeness = ['classic_3', 'classic_1', 'classic_2'];
              break;
            case ('literary_journal_7'):
              lookupList = "literary_journals";
              nextStep = 'compendium_2';
              nextLikeness = ['literary_journal_8', 'literary_journal_9', 'literary_journal_10', 'literary_journal_11', 'literary_journal_12', 'literary_journal_13', 'literary_journal_14', 'literary_journal_1', 'literary_journal_2', 'literary_journal_4', 'literary_journal_5', 'literary_journal_6', 'literary_journal_7'];
              break;
            case ('compendium_2'):
              lookupList = "compendiums";
              nextStep = 'genre_journal_7';
              nextLikeness = ['compendium_3', 'compendium_1', 'compendium_2'];
              break;
            case ('genre_journal_7'):
              lookupList = "genre_journals";
              nextStep = 'non_fiction_2';
              nextLikeness = ['genre_journal_8', 'genre-journal_9', 'genre_journal_10', 'genre_journal_11', 'genre_journal_12', 'genre_journal_13', 'genre_journal_14', 'genre_journal_1', 'genre_journal_2', 'genre_journal_3', 'genre_journal_4', 'genre_journal_5', 'genre_journal_6', 'genre_journal_7'];
              break;
            case ('non_fiction_2'):
              lookupList = "non_fictions";
              nextStep = 'prize_4';
              nextLikeness = ['non_fiction_3', 'non_fiction_1', 'non_fiction_2'];
              break;
            case ('prize_4'):
              lookupList = "prize_lists";
              nextStep = 'graphic_novel_2';
              break;
            case ('graphic_novel_2'):
              lookupList = "graphic_novels";
              nextStep = 'contemporary_pulp_1';
              nextLikeness = ['graphic_novel_3', 'graphic_novel_4', 'graphic_novel_1', 'graphic_novel_2'];
              break;
            case ('contemporary_pulp_1'):
              lookupList = "contemporary_pulps";
              nextStep = 'vintage_pulp_1';
              nextLikeness = ['contemporary_pulp_2', 'contemporary_pulp_3', 'contemporary_pulp_4', 'contemporary_pulp_1'];
              break;
            case ('vintage_pulp_1'):
              lookupList = "vintage_pulps";
              nextStep = 'contemporary_pulp_2';
              nextLikeness = ['vintage_pulp_2', 'vintage_pulp_3', 'vintage_pulp_4', 'vintage_pulp_1'];
              break;
            case ('contemporary_pulp_2'):
              lookupList = "contemporary_pulps";
              nextStep = 'vintage_pulp_2';
              nextLikeness = ['contemporary_pulp_3', 'contemporary_pulp_4', 'contemporary_pulp_1', 'contemporary_pulp_2'];
              break;
            case ('vintage_pulp_2'):
              lookupList = "vintage_pulps";
              nextStep = 'prize_5';
              nextLikeness = ['vintage_pulp_3', 'vintage_pulp_4', 'vintage_pulp_1', 'vintage_pulp_2'];
              break;
            case ('prize_5'):
              lookupList = "prize_lists";
              nextStep = 'female_author_selection_3';
              break;
            case ('female_author_selection_3'):
              lookupList = "female_author_selections";
              nextStep = 'crime_series_9';
              nextLikeness = ['female_author_selection_4', 'female_author_selection_1', 'female_author_selection_2', 'female_author_selection_3'];
              break;
            case ('crime_series_9'):
              lookupList = "crime_series";
              nextStep = 'backlog_ebook_3';
              nextLikeness = ['crime_series_10', 'crime_series_11', 'crime_series_12', 'crime_series_13', 'crime_series_14', 'crime_series_15', 'crime_series_16', 'crime_series_1', 'crime_series_2', 'crime_series_3', 'crime_series_4', 'crime_series_5', 'crime_series_6', 'crime_series_7', 'crime_series_8', 'crime_series_9'];
              break;
            case ('backlog_ebook_3'):
              lookupList = "backlog_ebooks";
                nextStep = 'science_fiction_series_9';
                nextLikeness = ['backlog_ebook_4', 'backlog_ebook_1', 'backlog_ebook_2', 'backlog_ebook_3'];
              break;
            case ('science_fiction_series_9'):
              lookupList = "science_fiction_series";
              nextStep = 'free_selection_5';
              nextLikeness = ['science_fiction_series_10', 'science_fiction_series_11', 'science_fiction_series_12', 'science_fiction_series_13', 'science_fiction_series_14', 'science_fiction_series_15', 'science_fiction_series_16', 'science_fiction_series_1', 'science_fiction_series_2', 'science_fiction_series_3', 'science_fiction_series_4', 'science_fiction_series_5', 'science_fiction_series_6', 'science_fiction_series_7', 'science_fiction_series_8', 'science_fiction_series_9'];
              break;
            case ('free_selection_5'):
              lookupList = "free_selections";
              nextStep = "crime_series_10";
              nextLikeness = ['free_selection_6', 'free_selection_7', 'free_selection_8', 'free_selection_1', 'free_selection_2', 'free_selection_3', 'free_selection_4', 'free_selection_5'];
              break;
            case ('crime_series_10'):
              lookupList = "crime_series";
              nextStep = 'insert_5';
              nextLikeness = ['crime_series_11', 'crime_series_12', 'crime_series_13', 'crime_series_14', 'crime_series_15', 'crime_series_16', 'crime_series_1', 'crime_series_2', 'crime_series_3', 'crime_series_4', 'crime_series_5', 'crime_series_6', 'crime_series_7', 'crime_series_8', 'crime_series_9', 'crime_series_10'];
              break;
            case ('insert_5'):
              lookupList = "inserts";
              nextStep = 'science_fiction_series_10';
              nextLikeness = ['insert_6', 'insert_7', 'insert_8', 'insert_1', 'insert_2', 'insert_3', 'insert_4', 'insert_5'];
              break;
            case ('science_fiction_series_10'):
              lookupList = "science_fiction_series";
              nextStep = 'literary_journal_8';
              nextLikeness = ['science_fiction_series_11', 'science_fiction_series_12', 'science_fiction_series_13', 'science_fiction_series_14', 'science_fiction_series_15', 'science_fiction_series_16', 'science_fiction_series_1', 'science_fiction_series_2', 'science_fiction_series_3', 'science_fiction_series_4', 'science_fiction_series_5', 'science_fiction_series_6', 'science_fiction_series_7', 'science_fiction_series_8', 'science_fiction_series_9', 'science_fiction_series_10'];
              break;
            case ('literary_journal_8'):
              lookupList = "literary_journals";
              nextStep = 'anthology_2';
              nextLikeness = ['literary_journal_9', 'literary_journal_10', 'literary_journal_11', 'literary_journal_12', 'literary_journal_13', 'literary_journal_14', 'literary_journal_1', 'literary_journal_2', 'literary_journal_4', 'literary_journal_5', 'literary_journal_6', 'literary_journal_7', 'literary_journal_8'];
              break;
            case ('anthology_2'):
              lookupList = 'anthologies';
              nextStep = 'genreJournal_8';
              nextLikeness = ['anthology_3', 'anthology_1', 'anthology_2'];
              break;
            case ('genre_journal_8'):
              lookupList = 'genre_journals';
              nextStep = 'roulette_3';
              nextLikeness = ['genre-journal_9', 'genre_journal_10', 'genre_journal_11', 'genre_journal_12', 'genre_journal_13', 'genre_journal_14', 'genre_journal_1', 'genre_journal_2', 'genre_journal_3', 'genre_journal_4', 'genre_journal_5', 'genre_journal_6', 'genre_journal_7', 'genre_journal_8'];
              break;
            case ('roulette_3'):
              lookupList = 'roulettes';
              nextStep = 'literary_journal_9';
              nextLikeness = ['roulette_4', 'roulette_5', 'roulette_6', 'roulette_1', 'roulette_2', 'roulette_3'];
              break;
            case ('literary_journal_9'):
              lookupList = 'literary_journals';
              nextStep = 'roulette_4';
              nextLikeness = ['literary_journal_10', 'literary_journal_11', 'literary_journal_12', 'literary_journal_13', 'literary_journal_14', 'literary_journal_1', 'literary_journal_2', 'literary_journal_4', 'literary_journal_5', 'literary_journal_6', 'literary_journal_7', 'literary_journal_8', 'literary_journal_9'];
              break;
            case ('roulette_4'):
              lookupList = 'roulettes';
              nextStep = 'prize_6';
              nextLikeness = ['roulette_5', 'roulette_6', 'roulette_1', 'roulette_2', 'roulette_3', 'roulette_4'];
              break;
            case ('prize_6'):
              lookupList = 'prize_lists';
              nextStep = 'male_author_selection_3';
              break;
            case ('male_author_selection_3'):
              lookupList = 'male_author_selections';
              nextStep = 'crime_series_11';
              nextLikeness = ['male_author_selection_4', 'male_authr_selection_1', 'male_author_selection_2', 'male_author_selection_3'];
              break;
            case ('crime_series_11'):
              lookupList = 'crime_series';
              nextStep = 'backlog_physical_book_3';
              nextLikeness = ['crime_series_12', 'crime_series_13', 'crime_series_14', 'crime_series_15', 'crime_series_16', 'crime_series_1', 'crime_series_2', 'crime_series_3', 'crime_series_4', 'crime_series_5', 'crime_series_6', 'crime_series_7', 'crime_series_8', 'crime_series_9', 'crime_series_10', 'crime_series_11'];
              break;
            case ('backlog_physical_book_3'):
              lookupList = 'backlog_physical_books';
              nextStep = 'science_fiction_series_11';
              nextLikeness = ['backlog_physical_book_4', 'backlog_physical_book_1', 'backlog_physical_book_2', 'backlog_physical_book_3'];
              break;
            case ('science_fiction_series_11'):
              lookupList = 'science_fiction_series';
              nextStep = 'free_selection_6';
              nextLikeness = ['science_fiction_series_12', 'science_fiction_series_13', 'science_fiction_series_14', 'science_fiction_series_15', 'science_fiction_series_16', 'science_fiction_series_1', 'science_fiction_series_2', 'science_fiction_series_3', 'science_fiction_series_4', 'science_fiction_series_5', 'science_fiction_series_6', 'science_fiction_series_7', 'science_fiction_series_8', 'science_fiction_series_9', 'science_fiction_series_10', 'scienc_fiction_series_11'];
              break;
            case ('free_selection_6'):
              lookupList = 'free_selections';
              nextStep = 'crime_series_12';
              nextLikeness = ['free_selection_7', 'free_selection_8', 'free_selection_1', 'free_selection_2', 'free_selection_3', 'free_selection_4', 'free_selection_5', 'free_selection_6'];
              break;
            case ('crime_series_12'):
              lookupList = 'crime_series';
              nextStep = 'insert_6';
              nextLikeness = ['crime_series_13', 'crime_series_14', 'crime_series_15', 'crime_series_16', 'crime_series_1', 'crime_series_2', 'crime_series_3', 'crime_series_4', 'crime_series_5', 'crime_series_6', 'crime_series_7', 'crime_series_8', 'crime_series_9', 'crime_series_10', 'crime_series_11', 'crime_series_12'];
              break;
            case ('insert_6'):
              lookupList = 'inserts';
              nextStep = 'science_fiction_series_12';
              nextLikeness = ['insert_7', 'insert_8', 'insert_1', 'insert_2', 'insert_3', 'insert_4', 'insert_5', 'insert_6'];
              break;
            case ('science_fiction_series_12'):
              lookupList = 'science_fiction_series';
              nextStep = 'genre_journal_9';
              nextLikeness = ['science_fiction_series_13', 'science_fiction_series_14', 'science_fiction_series_15', 'science_fiction_series_16', 'science_fiction_series_1', 'science_fiction_series_2', 'science_fiction_series_3', 'science_fiction_series_4', 'science_fiction_series_5', 'science_fiction_series_6', 'science_fiction_series_7', 'science_fiction_series_8', 'science_fiction_series_9', 'science_fiction_series_10', 'scienc_fiction_series_11', 'science_fiction_series_12'];
              break;
            case ('genre_journal_9'):
              lookupList = 'genre_journals';
              nextStep = 'occult_reading_2';
              nextLikeness = ['genre_journal_10', 'genre_journal_11', 'genre_journal_12', 'genre_journal_13', 'genre_journal_14', 'genre_journal_1', 'genre_journal_2', 'genre_journal_3', 'genre_journal_4', 'genre_journal_5', 'genre_journal_6', 'genre_journal_7', 'genre_journal_8', 'genre_journal_9'];
              break;
            case ('occult_reading_2'):
              lookupList = 'occult_readings';
              nextStep = 'literary_journal_10';
              nextLikeness = ['occult_reading_3', 'occult_reading_1', 'occult_reading_2'];
              break;
            case ('literary_journal_10'):
              lookupList = 'literary_journals';
              nextStep = 'bizarro_fiction_3';
              nextLikeness = ['literary_journal_11', 'literary_journal_12', 'literary_journal_13', 'literary_journal_14', 'literary_journal_1', 'literary_journal_2', 'literary_journal_4', 'literary_journal_5', 'literary_journal_6', 'literary_journal_7', 'literary_journal_8', 'literary_journal_9', 'literary_journal_10'];
              break;
            case ('bizarro_fiction_3'):
              lookupList = 'bizarro_fictions';
              nextStep = 'genre_journal_10';
              nextLikeness = ['bizarro_fiction_1', 'bizarro_fiction_2', 'bizarro_fiction_3'];
              break;
            case ('genre_journal_10'):
              lookupList = 'genre_journals';
              nextStep = 'classic_3';
              nextLikeness = ['genre_journal_11', 'genre_journal_12', 'genre_journal_13', 'genre_journal_14', 'genre_journal_1', 'genre_journal_2', 'genre_journal_3', 'genre_journal_4', 'genre_journal_5', 'genre_journal_6', 'genre_journal_7', 'genre_journal_8', 'genre_journal_9', 'genre_journal_10'];
              break;
            case ('classic_3'):
              lookupList = 'classics';
              nextStep = 'prize_7';
              nextLikeness = ['classic_1', 'classic_2', 'classic_3'];
              break;
            case ('prize_7'):
              lookupList = 'prize_lists';
              nextStep = 'graphic_novel_3';
              break;
            case ('graphic_novel_3'):
              lookupList = 'graphic_novels';
              nextStep = 'female_author_selection_4';
              nextLikeness = ['graphic_novel_4', 'graphic_novel_1', 'graphic_novel_2', 'graphic_novel_3'];
              break;
            case ('female_author_selection_4'):
              lookupList = 'female_author_selections';
              nextStep = 'crime_series_13';
              nextLikeness = ['female_author_selection_1', 'female_author_selection_2', 'female_author_selection_3', 'female_author_selection_4'];
              break;
            case ('crime_series_13'):
              lookupList = 'crime_series';
              nextStep = 'backlog_ebook_4';
              nextLikeness = ['crime_series_14', 'crime_series_15', 'crime_series_16', 'crime_series_1', 'crime_series_2', 'crime_series_3', 'crime_series_4', 'crime_series_5', 'crime_series_6', 'crime_series_7', 'crime_series_8', 'crime_series_9', 'crime_series_10', 'crime_series_11', 'crime_series_12', 'crime_series_13'];
              break;
            case ('backlog_ebook_4'):
              lookupList = 'backlog_ebooks';
              nextStep = 'science_fiction_series_13';
              nextLikeness = ['backlog_ebook_1', 'backlog_ebook_2', 'backlog_ebook_3', 'backlog_ebook_4'];
              break;
            case ('science_fiction_series_13'):
              lookupList = 'science_fiction_series';
              nextStep = 'literary_journal_11';
              nextLikeness = ['science_fiction_series_14', 'science_fiction_series_15', 'science_fiction_series_16', 'science_fiction_series_1', 'science_fiction_series_2', 'science_fiction_series_3', 'science_fiction_series_4', 'science_fiction_series_5', 'science_fiction_series_6', 'science_fiction_series_7', 'science_fiction_series_8', 'science_fiction_series_9', 'science_fiction_series_10', 'scienc_fiction_series_11', 'science_fiction_series_12', 'science_fiction_series_13'];
              break;
            case ('literary_journal_11'):
              lookupList = 'literary_journals';
              nextStep = 'free_selection_7';
              nextLikeness = ['literary_journal_12', 'literary_journal_13', 'literary_journal_14', 'literary_journal_1', 'literary_journal_2', 'literary_journal_4', 'literary_journal_5', 'literary_journal_6', 'literary_journal_7', 'literary_journal_8', 'literary_journal_9', 'literary_journal_10', 'literary_journal_11'];
              break;
            case ('free_selection_7'):
              lookupList = 'free_selections';
              nextStep = 'crime_series_14';
              nextLikeness = ['free_selection_8', 'free_selection_1', 'free_selection_2', 'free_selection_3', 'free_selection_4', 'free_selection_5', 'free_selection_6', 'free_selection_7'];
              break;
            case ('crime_series_14'):
              lookupList = 'crime_series';
              nextStep = 'insert_7';
              nextLikeness = ['crime_series_15', 'crime_series_16', 'crime_series_1', 'crime_series_2', 'crime_series_3', 'crime_series_4', 'crime_series_5', 'crime_series_6', 'crime_series_7', 'crime_series_8', 'crime_series_9', 'crime_series_10', 'crime_series_11', 'crime_series_12', 'crime_series_13', 'crime_series_14'];
              break;
            case ('insert_7'):
              lookupList = 'inserts';
              nextStep = 'science_fiction_series_14';
              nextLikeness = ['insert_8', 'insert_1', 'insert_2', 'insert_3', 'insert_4', 'insert_5', 'insert_6', 'insert_7'];
              break;
            case ('science_fiction_series_14'):
              lookupList = 'science_fiction_series';
              nextStep = 'genre_journal_11';
              nextLikeness = ['science_fiction_series_15', 'science_fiction_series_16', 'science_fiction_series_1', 'science_fiction_series_2', 'science_fiction_series_3', 'science_fiction_series_4', 'science_fiction_series_5', 'science_fiction_series_6', 'science_fiction_series_7', 'science_fiction_series_8', 'science_fiction_series_9', 'science_fiction_series_10', 'scienc_fiction_series_11', 'science_fiction_series_12', 'science_fiction_series_13', 'science_fiction_series_14'];
              break;
            case ('genre_journal_11'):
              lookupList = 'genre_journals';
              nextStep = 'compendium_3';
              nextLikeness = ['genre_journal_12', 'genre_journal_13', 'genre_journal_14', 'genre_journal_1', 'genre_journal_2', 'genre_journal_3', 'genre_journal_4', 'genre_journal_5', 'genre_journal_6', 'genre_journal_7', 'genre_journal_8', 'genre_journal_9', 'genre_journal_10', 'genre_journal_11'];
              break;
            case ('compendium_3'):
              lookupList = 'compendiums';
              nextStep = 'literary_journal_12';
              nextLikeness = ['compendium_1', 'compendium_2', 'compendium_3'];
              break;
            case ('literary_journal_12'):
              lookupList = 'literary_journals';
              nextStep = 'non_fiction_3';
              nextLikeness = ['literary_journal_13', 'literary_journal_14', 'literary_journal_1', 'literary_journal_2', 'literary_journal_4', 'literary_journal_5', 'literary_journal_6', 'literary_journal_7', 'literary_journal_8', 'literary_journal_9', 'literary_journal_10', 'literary_journal_11', 'literary_journal_12'];
              break;
            case ('non_fiction_3'):
              lookupList = 'non_fictions';
              nextStep = 'genre_journal_12';
              nextLikeness = ['non_fiction_1', 'non_fiction_2', 'non_fiction_3'];
              break;
            case ('genre_journal_12'):
              lookupList = 'genre_journals';
              nextStep = 'anthology_3';
              nextLikeness = ['genre_journal_13', 'genre_journal_14', 'genre_journal_1', 'genre_journal_2', 'genre_journal_3', 'genre_journal_4', 'genre_journal_5', 'genre_journal_6', 'genre_journal_7', 'genre_journal_8', 'genre_journal_9', 'genre_journal_10', 'genre_journal_11', 'genre_journal_12'];
              break;
            case ('anthology_3'):
              lookupList = 'anthologies';
              nextStep = 'prize_8';
              nextLikeness = ['anthology_1', 'anthology_2', 'anthology_3'];
              break;
            case ('prize_8'):
              lookupList = 'prize_lists';
              nextStep = 'male_author_selection_4';
              break;
            case ('male_author_selection_4'):
              lookupList = 'male_author_selections';
              nextStep = 'crime_series_15';
              nextLikeness = ['male_author_selection_1', 'male_author_selection_2', 'male_author_selection_3', 'male_author_selection_4'];
              break;
            case ('crime_series_15'):
              lookupList = 'crime_series';
              nextStep = 'backlog_physical_book_4';
              nextLikeness = ['crime_series_16', 'crime_series_1', 'crime_series_2', 'crime_series_3', 'crime_series_4', 'crime_series_5', 'crime_series_6', 'crime_series_7', 'crime_series_8', 'crime_series_9', 'crime_series_10', 'crime_series_11', 'crime_series_12', 'crime_series_13', 'crime_series_14', 'crime_series_15'];
              break;
            case ('backlog_physical_book_4'):
              lookupList = 'backlog_physical_books';
              nextStep = 'science_fiction_series_15';
              nextLikeness = ['backlog_physical_book_1', 'backlog_physical_book_2', 'backlog_physical_book_3', 'backlog_physcial_4'];
              break;
            case ('science_fiction_series_15'):
              lookupList = 'science_fiction_series';
              nextStep = 'literary_journal_13';
              nextLikeness = ['science_fiction_series_16', 'science_fiction_series_1', 'science_fiction_series_2', 'science_fiction_series_3', 'science_fiction_series_4', 'science_fiction_series_5', 'science_fiction_series_6', 'science_fiction_series_7', 'science_fiction_series_8', 'science_fiction_series_9', 'science_fiction_series_10', 'scienc_fiction_series_11', 'science_fiction_series_12', 'science_fiction_series_13', 'science_fiction_series_14', 'science_fiction_15'];
              break;
            case ('literary_journal_13'):
              lookupList = 'literary_journals';
              nextStep = 'free_selection_8';
              nextLikeness = ['literary_journal_14', 'literary_journal_1', 'literary_journal_2', 'literary_journal_4', 'literary_journal_5', 'literary_journal_6', 'literary_journal_7', 'literary_journal_8', 'literary_journal_9', 'literary_journal_10', 'literary_journal_11', 'literary_journal_12', 'literary_journal_13'];
              break;
            case ('free_selection_8'):
              lookupList = 'free_selections';
              nextStep = 'crime_series_16';
              nextLikeness = ['free_selection_1', 'free_selection_2', 'free_selection_3', 'free_selection_4', 'free_selection_5', 'free_selection_6', 'free_selection_7', 'free_selection_8'];
              break;
            case ('crime_series_16'):
              lookupList = 'crime_series';
              nextStep = 'insert_8';
              nextLikeness = ['crime_series_1', 'crime_series_2', 'crime_series_3', 'crime_series_4', 'crime_series_5', 'crime_series_6', 'crime_series_7', 'crime_series_8', 'crime_series_9', 'crime_series_10', 'crime_series_11', 'crime_series_12', 'crime_series_13', 'crime_series_14', 'crime_series_15', 'crime_series_16'];
              break;
            case ('insert_8'):
              lookupList = 'inserts';
              nextStep = 'science_fiction_series_16';
              nextLikeness = ['insert_1', 'insert_2', 'insert_3', 'insert_4', 'insert_5', 'insert_6', 'insert_7', 'insert_8'];
              break;
            case ('science_fiction_series_16'):
              lookupList = 'science_fiction_series';
              nextStep = 'genre_journal_13';
              nextLikeness = ['science_fiction_series_1', 'science_fiction_series_2', 'science_fiction_series_3', 'science_fiction_series_4', 'science_fiction_series_5', 'science_fiction_series_6', 'science_fiction_series_7', 'science_fiction_series_8', 'science_fiction_series_9', 'science_fiction_series_10', 'scienc_fiction_series_11', 'science_fiction_series_12', 'science_fiction_series_13', 'science_fiction_series_14', 'science_fiction_15', 'science_fiction_series_16'];
              break;
            case ('genre_journal_13'):
              lookupList = 'genre_journals';
              nextStep = 'roulette_5';
              nextLikeness = ['genre_journal_14', 'genre_journal_1', 'genre_journal_2', 'genre_journal_3', 'genre_journal_4', 'genre_journal_5', 'genre_journal_6', 'genre_journal_7', 'genre_journal_8', 'genre_journal_9', 'genre_journal_10', 'genre_journal_11', 'genre_journal_12', 'genre_journal_13'];
              break;
            case ('roulette_5'):
              lookupList = 'roulettes';
              nextStep = 'literary_journal_14';
              nextLikeness = ['roulette_6', 'roulette_1', 'roulette_2', 'roulette_3', 'roulette_4', 'roulette_5'];
              break;
            case ('literary_journal_14'):
              lookupList = 'literary_journals';
              nextStep = 'roulette_6';
              nextLikeness = ['literary_journal_1', 'literary_journal_2', 'literary_journal_4', 'literary_journal_5', 'literary_journal_6', 'literary_journal_7', 'literary_journal_8', 'literary_journal_9', 'literary_journal_10', 'literary_journal_11', 'literary_journal_12', 'literary_journal_13', 'literary_journal_14'];
              break;
            case ('roulette_6'):
              lookupList = 'roulettes';
              nextStep = 'genre_journal_14';
              nextLikeness = ['roulette_1', 'roulette_2', 'roulette_3', 'roulette_4', 'roulette_5', 'roulette_6'];
              break;
            case ('genre_journal_14'):
              lookupList = 'genre_journals';
              nextStep = 'occult_reading_3';
              nextLikeness = ['genre_journal_1', 'genre_journal_2', 'genre_journal_3', 'genre_journal_4', 'genre_journal_5', 'genre_journal_6', 'genre_journal_7', 'genre_journal_8', 'genre_journal_9', 'genre_journal_10', 'genre_journal_11', 'genre_journal_12', 'genre_journal_13', 'genre_journal_14'];
              break;
            case ('occult_reading_3'):
              lookupList = 'occult_readings';
              nextStep = 'prize_9';
              nextLikeness = ['occult_reading_1', 'occult_reading_2', 'occult_reading_3'];
              break;
            case ('prize_9'):
              lookupList = 'prize_lists';
              nextStep = 'graphic_novel_4';
              break;
            case ('graphic_novel_4'):
              lookupList = 'graphic_novels';
              nextStep = 'contemporary_pulp_3';
              nextLikeness = ['graphic_novel_1', 'graphic_novel_2', 'graphic_novel_3', 'graphic_novel_4'];
              break;
            case ('contemporary_pulp_3'):
              lookupList = 'contemporary_pulp_3';
              nextStep = 'vintage_pulp_3';
              nextLikeness = ['contemporary_pulp_4', 'contemporary_pulp_1', 'contemporary_pulp_2', 'contemporary_pulp_3'];
              break;
            case ('vintage_pulp_3'):
              lookupList = 'vintage_pulps';
              nextStep = 'contemporary_pulp_4';
              nextLikeness = ['vintage_pulp_4', 'vintage_pulp_1', 'vintage_pulp_2', 'vintage_pulp_3'];
              break;
            case ('contemporary_pulp_4'):
              lookupList = 'contemporary_pulps';
              nextStep = 'vintage_pulp_4';
              nextLikeness = ['contemporary_pulp_1', 'contemporary_pulp_2', 'contemporary_3', 'contemporary_pulp_4'];
              break;
            case ('vintage_pulp_4'):
              lookupList = 'vintage_pulps';
              nextStep = 'prize_10';
              nextLikeness = ['vintage_pulp_1', 'vintage_pulp_2', 'vintage_pulp_3', 'vintage_pulp_4'];
              break;
            case ('prize_10'):
              lookupList = 'prize_lists';
              nextStep = 'female_author_selection_1';
              break;

            default:
              console.log("Unhandled Exception");
              alert("unhandled exception");
          }
          patchCompletionStatus(lookupList, theList[theList.current_position], theList.current_position);
          readingListObject[theList.current_position] = null;
          readingListObject.current_position = nextStep;
          if (lookupList !== 'prize_lists') {
            console.log(lookupList);
            $http.get(`/${lookupList}`)
            .then(readListData=>{
              var categoryList = readListData.data;
              console.log(categoryList);
              // var likenessIndex = 0;
              var assignLikenessArr = [];
              for (let j = 0; j < categoryList.length; j++) {
                if (!categoryList[j].is_completed) {
                  assignLikenessArr.push(categoryList[j].id);
                }
              }

              assignLikenessArr = sortIdArray(assignLikenessArr);
              console.log(assignLikenessArr);
              $http.patch('/user_reading_lists/1', readingListObject)
              .then(data=>{
                console.log(data.data);
                updateList(lookupList, nextLikeness, assignLikenessArr);
              });
            });
          } else {
            //update prize position
            var prizeJustCompleted = theList[theList.current_position];
            console.log(prizeJustCompleted);
            patchCompletionStatus (lookupList, prizeJustCompleted, theList.current_position);
            // update completion status
            $http.patch('/user_reading_lists/1', readingListObject)
            .then(postPrize=>{
              console.log(postPrize.data);
            });

          }

        });
      }

      function patchReview(reviewID, rating, title, body) {
        var reviewObject = {};
        var timestampe = new Date();
        var timestamp = setTimestampFormat(timestampe.toString());



        reviewObject.rating = rating;
        reviewObject.review_title = title;
        reviewObject.review_body = body;
        reviewObject.updated_at = timestamp;

        if ((reviewID !== null) && (reviewID !== undefined)) {
          $http.patch(`/user_book_reviews/${reviewID}`, reviewObject)
          .then(savedReview=>{
            var review = savedReview.data;
            console.log(review);
            // updateAdvanceReadingList(reviewID, review.periodical_or_book, review.books_id, review.periodicals_id);
          });
        }
      }

      function checkForNewInterrupt() {
        var unreadsArray = [];
        $http.get('/interrupts')
        .then(intListData=>{
          var intList = intListData.data;
          for (let i = 0; i < intList.length; i++) {
            if (!intList[i].is_completed) {
              unreadsArray.push(intList[i].id);
            }
          }
          if (unreadsArray.length > 0) {
            unreadsArray = sortIdArray(unreadsArray);
            $http.get(`/interrupts/${unreadsArray[0]}`)
            .then(newInterruptData=>{
              var newInterrupt = newInterruptData.data;
              $http.get('/user_book_reviews')
              .then(reviewsData=>{
                var reviews = reviewsData.data;
                var reviewId = null;
                for (let j = 0; j < reviews.length; j++) {
                  if (newInterrupt.periodical_or_book === 'book') {
                    if (reviews[j].books_id === newInterrupt.books_id) {
                      reviewId = reviews[j].id;
                      break;
                    }
                  } else {
                    if (reviews[j].periodicals_id === newInterrupt.periodicals_id) {
                      reviewId = reviews[j].id;
                      break;
                    }
                  }
                }
                var interruptPatch = {};
                interruptPatch.interrupt = reviewId;
                $http.patch('/user_reading_lists/1', interruptPatch)
                .then(datadata=>{
                  console.log(datadata.data);
                });
              });
            });
          }
        });
      }

      function updateInterruptList(reviewId) {
        $http.get(`/user_book_reviews/${reviewId}`)
        .then(reviewData=>{
          var review = reviewData.data;
          if (review.periodical_or_book === 'book') {
            var bookId = review.books_id;
            $http.get('/interrupts')
            .then(interruptListData=>{
              var interruptList = interruptListData.data;
              var interruptId = null;
              var patchObj = {};
              for (let i = 0; i < interruptList.length; i++) {
                if (interruptList[i].books_id === bookId) {
                  interruptId = interruptList[i].id;
                  patchObj.is_completed = true;
                }
              }
              if (interruptId !== null) {
                $http.patch(`/interrupts/${interruptId}`, patchObj)
                .then(updatedInterruptData=>{
                  console.log(updatedInterruptData.data);
                  checkForNewInterrupt();
                });
              }
            });
          } else {
            var magazineId = review.periodicals_id;
            $http.get('/interrupts')
            .then(interuptsData=>{
              var interupts = interuptsData.data;
              var interuptId = null;
              var periodPatch = {};
              for (let j = 0; j <interupts.length; j++) {
                if (interupts[j].periodicals_id === magazineId) {
                  interuptId = interupts[j].id;
                  periodPatch.is_completed = true;
                }
              }
              if (interuptId !== null) {
                $http.patch(`/interrupts/${interuptId}`)
                .then(updatedData=>{
                  console.log(updatedData.data);
                  checkForNewInterrupt();
                });
              }
            });
          }
        });
      }

      function writeReview (selectionString) {
        var reviewNumber = null;
        var saveReviewButton = document.getElementById('saveReview');
        var publishReviewButton = document.getElementById('completeReview');
        var ratingValueField = document.getElementById('reviewScore');
        var reviewTitleValueField = document.getElementById('reviewTitle');
        var reviewBodyValueField = document.getElementById('reviewBody');
        var reviewDiv = document.getElementById('reviewNewlyCompletedBook');
        var currentReadingButton = document.getElementById('currentReadButton');
        $http.get('/user_reading_lists/1')
        .then(listData=>{
          var userList = listData.data;
          if (selectionString === "current") {
            reviewNumber = userList[userList.current_position];
          } else {
            reviewNumber = userList.interrupt;
          }
          saveReviewButton.addEventListener('click', ()=>{
            var ratingValue = ratingValueField.value;
            var reviewTitleValue = reviewTitleValueField.value;
            var reviewBodyValue = reviewBodyValueField.value;
            patchReview(reviewNumber, ratingValue, reviewTitleValue, reviewBodyValue);
          });
          publishReviewButton.addEventListener('click', ()=>{
            var ratingV = ratingValueField.value;
            var reviewTV = reviewTitleValueField.value;
            var reviewBV = reviewBodyValueField.value;
            patchReview(reviewNumber, ratingV, reviewTV, reviewBV);
            reviewDiv.setAttribute("style", "display: none;");
            currentReadingButton.setAttribute("style", "display: initial;");
            $http.get('/user_reading_lists/1')
            .then(readingListData=>{
              var readingList = readingListData.data;
              if (selectionString === "current") {
                updateAdvanceReadingList(readingList[readingList.current_position]);
              } else {
                //update interrupt here

                //update read status of newly completed interrupt
                updateInterruptList(readingList.interrupt);
                //check for further unread interrupts
                // set interrupt on reading list to new value or null
              }
            });
          });
        });

      }

      function nowReading() {
        vm.currentSelection = {};
        var currentReadingDiv = document.getElementById('currentlyReadingBook');
        var interruptDiv = document.getElementById('interruptSelectionBook');
        var reviewForm = document.getElementById('reviewNewlyCompletedBook');
        var currentButton = document.getElementById('currentReadButton');
        var currentStillReading = document.getElementById('stillReadingIt');
        var interruptDone = document.getElementById('interruptDone');
        var interruptStillReading = document.getElementById('interruptStillReading');
        var currentDoneButton = document.getElementById('iAmDone');
        interruptDone.addEventListener('click', ()=>{
          reviewForm.setAttribute("style", "display: initial;");
          currentReadingDiv.setAttribute("style", "display: none;");
          interruptDiv.setAttribute("style", "display: none;");
          writeReview("interrupt");
        });
        currentDoneButton.addEventListener('click', ()=>{
          reviewForm.setAttribute("style", "display: initial;");
          currentReadingDiv.setAttribute("style", "display: none;");
          interruptDiv.setAttribute("style", "display: none;");
          writeReview("current");
        });
        currentStillReading.addEventListener('click', ()=>{
          currentReadingDiv.setAttribute("style", "display: none;");
          currentButton.setAttribute("style", "display: initial;");
        });
        interruptStillReading.addEventListener('click', ()=>{
          currentReadingDiv.setAttribute("style", "display: none;");
          currentButton.setAttribute("style", "display: initial;");
        });
        $http.get('/user_reading_lists/1')
        .then(nowReadingData=>{
          var userReadingList = nowReadingData.data;
          var interruptID = userReadingList.interrupt;
          var currentReviewNumber = userReadingList[userReadingList.current_position];
          if ((currentReviewNumber !== null) && (currentReviewNumber !== undefined)) {
            $http.get(`/user_book_reviews/${currentReviewNumber}`)
            .then(currentReviewData=>{
              var currentReview = currentReviewData.data;
              if (currentReview.periodical_or_book === "book") {
                $http.get(`/books/${currentReview.books_id}`)
                .then(bookData=>{
                  var currentBook = bookData.data;
                  vm.currentSelection.cover_url = currentBook.cover_url;
                  vm.currentSelection.title = currentBook.title;
                  vm.currentSelection.author = currentBook.author;
                  if (userReadingList.interrupt_enabled) {
                    handleInterruptDisplay(interruptID);
                  }
                });
              } else {
                if ((currentReview.periodicals_id !== null) && (currentReview.periodicals_id !== undefined)) {
                  $http.get(`/periodicals/${currentReview.periodicals_id}`)
                  .then(periodicalData=>{
                    var periodical = periodicalData.data;
                    vm.currentSelection.cover_url = periodical.img_url;
                    vm.currentSelection.title = periodical.name + " " + periodical.issue;
                    vm.currentSelection.author = periodical.editor + "(editor)";
                    if (userReadingList.interrupt_enabled) {
                      handleInterruptDisplay(interruptID);
                    }
                  });
                }
              }
            });
          }
        });
      }

      function onInit() {
        console.log("Admin is lit.");
        var reviewSubmissionForm = document.getElementById('reviewNewlyCompletedBook');
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
        var readingListHQDiv = document.getElementById('readingListHQ');
        var commToggle = document.getElementById('toggleComm');
        var blogToggle = document.getElementById('toggleBlogHQ');
        var readListToggle = document.getElementById('toggleReadingListHQ');
        var readingListContent = document.getElementById('readingListHQ');


        messageContent.setAttribute("style", "display: none;");
        readingListContent.setAttribute("style", "display: none;");
        var currentlyReadingColumn = document.getElementById('currentlyReadingBook');
        currentlyReadingColumn.setAttribute("style", "display:none;");
        var interruptColumn = document.getElementById('interruptSelectionBook');
        interruptColumn.setAttribute("style", "display: none;");
        reviewSubmissionForm.setAttribute("style", "display: none;");

        var communictionsButton = document.getElementById('toggleCommunications');
        var bloggingButton = document.getElementById('toggleBlogCRUD');
        var readCRUDButton = document.getElementById('readingListButton');
        var newBlogButton = document.getElementById('blogCreate');
        var readListButton = document.getElementById('toggleReadingList');
        var readingNow = document.getElementById('currentReadButton');
        if (getCookie("qwerty") === "whip it good") {
          communictionsButton.addEventListener('click', ()=> {
            messageContent.setAttribute("style", "display: initial;");
            communictionsButton.setAttribute("style", "display: none;");
            serveUpFeedback();
            bloggingButton.setAttribute("style", "display: none;");
            readListButton.setAttribute("style", "display: none;");
          });
          readCRUDButton.addEventListener('click', ()=>{
            communictionsButton.setAttribute("style", "display: none;");
            bloggingButton.setAttribute("style", "display: none;");
            readListButton.setAttribute("style", "display: none;");
            readingListContent.setAttribute("style", "display: initial;");
          });
          commToggle.addEventListener('click', ()=>{
            messageContent.setAttribute("style", "display: none;");
            communictionsButton.setAttribute("style", "display: initial;");
            bloggingButton.setAttribute("style", "display: initial;");
            readListButton.setAttribute("style", "display: initial;");
          });
          readListToggle.addEventListener('click', ()=>{
            console.log("read a book");
            readingListHQDiv.setAttribute("style", "display: none;");
            communictionsButton.setAttribute("style", "display: initial;");
            bloggingButton.setAttribute("style", "display: initial;");
            readListButton.setAttribute("style", "display: initial;");
          });
          bloggingButton.addEventListener('click', ()=>{
            blogHQ.setAttribute("style", "display: initial;");
            bloggingButton.setAttribute("style", "display: none;");
            communictionsButton.setAttribute("style", "display: none;");
            readListButton.setAttribute("style", "display: none;");
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
            readListButton.setAttribute("style", "display: initial;");
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
          });
          readingNow.addEventListener('click', ()=>{
            currentlyReadingColumn.setAttribute("style", "display: initial;");
            interruptColumn.setAttribute("style", "display: initial;");
            readingNow.setAttribute("style", "display: none;");
            nowReading();
          });

        } else {
          alert("FORBIDDEN");
        }







      }

    }

}());
