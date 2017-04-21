(function() {
  'use strict';

  var readingOrderArray = ['female_author_selection_1', 'crime_series_1', 'backlog_ebook_1', 'science_fiction_series_1', 'free_selection_1', 'crime_series_2', 'insert_1', 'science_fiction_series_2', 'literary_journal_1', 'bizarro_fiction_1', 'genre_journal_1', 'classic_1', 'literary_journal_2', 'compendium_1', 'prize_1', 'male_author_selection_1', 'crime_series_3', 'backlog_physical_book_1', 'science_fiction_series_3', 'free_selection_2', 'crime_series_4', 'insert_2', 'science_fiction_series_4', 'genre_journal_2', 'non_fiction_1', 'literary_journal_3', 'anthology_1', 'genre_journal_3', 'roulette_1', 'prize_2', 'graphic_novel_1', 'female_author_selection_2', 'crime_series_5', 'backlog_ebook_2', 'science_fiction_series_5', 'literary_journal_4', 'free_selection_3', 'crime_series_6', 'insert_3', 'science_fiction_series_6', 'genre_journal_4', 'roulette_2', 'literary_journal_5', 'occult_reading_1', 'genre_journal_5', 'bizarro_fiction_2', 'prize_3', 'male_author_selection_2', 'crime_series_7', 'backlog_physical_book_2', 'science_fiction_series_7', 'literary_journal_6', 'free_selection_4', 'crime_series_8', 'insert_4', 'science_fiction_series_8', 'genre_journal_6', 'classic_2', 'literary_journal_7', 'compendium_2', 'genre_journal_7', 'non_fiction_2', 'prize_4', 'graphic_novel_2', 'contemporary_pulp_1', 'vintage_pulp_1', 'contemporary_pulp_2', 'vintage_pulp_2', 'prize_5', 'female_author_selection_3', 'crime_series_9', 'backlog_ebook_3', 'science_fiction_series_9', 'free_selection_5', 'crime_series_10', 'insert_5', 'science_fiction_series_10', 'literary_journal_8', 'anthology_2', 'genre_journal_8', 'roulette_3', 'literary_journal_9', 'roulette_4', 'prize_6', 'male_author_selection_3', 'crime_series_11', 'backlog_physical_book_3', 'science_fiction_series_11', 'free_selection_6', 'crime_series_12', 'insert_6', 'science_fiction_series_12', 'genre_journal_9', 'occult_reading_2', 'literary_journal_10', 'bizarro_fiction_3', 'genre_journal_10', 'classic_3', 'prize_7', 'graphic_novel_3','female_author_selection_4', 'crime_series_13', 'backlog_ebook_4', 'science_fiction_series_13', 'literary_journal_11', 'free_selection_7', 'crime_series_14', 'insert_7', 'science_fiction_series_14', 'genre_journal_11', 'compendium_3', 'literary_journal_12', 'non_fiction_3', 'genre_journal_12', 'anthology_3', 'prize_8', 'male_author_selection_4', 'crime_series_15', 'backlog_physical_book_4', 'science_fiction_series_15', 'literary_journal_13', 'free_selection_8', 'crime_series_16', 'insert_8', 'science_fiction_series_16', 'genre_journal_13', 'roulette_5', 'literary_journal_14', 'roulette_6', 'genre_journal_14', 'occult_reading_3', 'prize_9', 'graphic_novel_4', 'contemporary_pulp_3', 'vintage_pulp_3', 'contemporary_pulp_4', 'vintage_pulp_4', 'prize_10'];
  var nextBook = 0;
  var previousBook = 0;



  angular.module('app')
    .component('singlebookcube', {
      controller: SingleBookCubeController,
      templateUrl: '/js/singlebookcube/singlebookcube.template.html'
    });

    SingleBookCubeController.$inject = ['$http', '$state', '$stateParams'];

    function SingleBookCubeController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;

      function getPublishString(dateString, publisher) {
        var publishString = 'Published ';
        var day = '';
        var month = '';
        var year = '';

        if (dateString[8] === '0') {
          day = dateString[9];
        } else {
          day = dateString.slice(8, 10);
        }
        month = dateString.slice(5, 7);
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
        year = dateString.slice(0,4);
        publishString += day + " " + month + " " + year + " by " + publisher + ".";

        return(publishString);
      }

      function getPostString (postDate) {
        var postedAt = 'Posted ';
        var day = '';
        var month = '';
        var year = '';

        if (postDate[8] === '0') {
          day = postDate[9];
        } else {
          day = postDate.slice(8, 10);
        }
        month = postDate.slice(5, 7);
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
        year = postDate.slice(0,4);
        postedAt += day + " " + month + " " + year + " by Devin Hurd";

        return (postedAt);
      }

      function populateObject (review) {
        vm.singleBook = {};
        if (review.periodical_or_book === 'book') {
          $http.get(`/books/${review.books_id}`)
          .then(bookData=>{
            var book = bookData.data;
            vm.singleBook.cover_url = book.cover_url;
            vm.singleBook.author = book.author;
            vm.singleBook.author_url = book.author_url;
            vm.singleBook.title = book.title;
            vm.singleBook.edition = book.edition;
            vm.singleBook.number_of_pages = book.number_of_pages;
            vm.singleBook.publish_string = getPublishString(book.publication_date, book.publisher);
            vm.singleBook.description_clean = book.description.replace(/\r\n|\n|\r/gm, '<br>');
            if (review.rating === null) {
              vm.singleBook.rating = '';
            } else {
              vm.singleBook.rating = review.rating;
            }
            if (review.review_title === null) {
              vm.singleBook.review_title = '';
            } else {
              vm.singleBook.review_title = review.review_title;
            }
            if (review.review_body === null) {
              vm.singleBook.review_body_clean = "Review Pending...";
            } else {
              vm.singleBook.review_body_clean = review.review_body.replace(/\r\n|\n|\r/gm, '<br>');
            }
            vm.singleBook.posted_at = getPostString(review.updated_at);
          });
        } else {
          $http.get(`/periodicals/${review.periodicals_id}`)
          .then(magazineData=>{
            var magazine = magazineData.data;
            vm.singleBook.cover_url = magazine.img_url;
            vm.singleBook.author = magazine.editor;
            vm.singleBook.author_url = magazine.editor_url;
            vm.singleBook.title = magazine.name + " - " + magazine.issue;
            vm.singleBook.edition = magazine.edition;
            vm.singleBook.number_of_pages = magazine.pages;
            vm.singleBook.publish_string = getPublishString(magazine.publication_date, magazine.name);
            vm.singleBook.description_clean = magazine.description.replace(/\r\n|\n|\r/gm, '<br>');
            if (review.rating === null) {
              vm.singleBook.rating = '';
            } else {
              vm.singleBook.rating = review.rating;
            }
            if (review.review_title === null) {
              vm.singleBook.review_title = '';
            } else {
              vm.singleBook.review_title = review.review_title;
            }
            if (review.review_body === null) {
              vm.singleBook.review_body_clean = "Review Pending...";
            } else {
              vm.singleBook.review_body_clean = review.review_body.replace(/\r\n|\n|\r/gm, '<br>');
            }
            vm.singleBook.posted_at = getPostString(review.updated_at);

          });
        }
      }

      function incrementPlaceInOrder(indexSpot) {
        var indexUpdate = indexSpot + 1;
        if (indexUpdate >= readingOrderArray.length) {
          indexUpdate = 0;
        }
        return(indexUpdate);
      }

      function setCubeNavigation() {
        var cube = document.getElementById('bookCube');
        var coverSide = document.getElementById('front');
        var coverCube = document.getElementById('coverCube');
        var cubist = document.getElementById('cubistContraption');
        var authorTitleSide = document.getElementById('left');
        var authorTitleCube = document.getElementById('authorCube');
        var descriptionSide = document.getElementById('right');
        var descriptionCube = document.getElementById('descriptorCube');
        var ratingSide = document.getElementById('top');
        var ratingCube = document.getElementById('ratingsFace');
        var reviewSide = document.getElementById('bottom');
        var reviewCube = document.getElementById('reviewFace');
        var commentsSide = document.getElementById('back');
        var commentCube = document.getElementById('commentFace');

        cubist.setAttribute("style", "-webkit-transform: translateZ(-300px) rotateY(0);");
        coverCube.setAttribute("style", "z-index: 2;");
        authorTitleCube.setAttribute("style", "z-index: -2;");
        descriptionCube.setAttribute("style", "z-index: -2;");
        ratingCube.setAttribute("style", "z-index: -2;");
        reviewCube.setAttribute("style", "z-index: -2;");
        commentCube.setAttribute("style", "z-index: -2;");



        ratingSide.addEventListener('click', ()=>{
          cubist.setAttribute("style", "-webkit-transform: translateZ(-300px) rotateX(-90deg);");
          coverCube.setAttribute("style", "z-index: -2;");
          authorTitleCube.setAttribute("style", "z-index: -2;");
          descriptionCube.setAttribute("style", "z-index: -2;");
          ratingCube.setAttribute("style", "z-index: 5;");
          reviewCube.setAttribute("style", "z-index: -2;");
          commentCube.setAttribute("style", "z-index: -2;");

        });
        ratingCube.addEventListener('click', ()=>{
          cubist.setAttribute("style", "-webkit-transform: translateZ(-300px) rotateX(90deg);");
          coverCube.setAttribute("style", "z-index: -2;");
          authorTitleCube.setAttribute("style", "z-index: -2;");
          descriptionCube.setAttribute("style", "z-index: -2;");
          ratingCube.setAttribute("style", "z-index: -2;");
          reviewCube.setAttribute("style", "z-index: 5;");
          commentCube.setAttribute("style", "z-index: -2;");
        });
        commentsSide.addEventListener('click', ()=>{
          cubist.setAttribute("style", "-webkit-transform: translateZ(-300px) rotateY(180deg);");
          coverCube.setAttribute("style", "z-index: -2;");
          authorTitleCube.setAttribute("style", "z-index: -2;");
          descriptionCube.setAttribute("style", "z-index: -2;");
          ratingCube.setAttribute("style", "z-index: -2;");
          reviewCube.setAttribute("style", "z-index: -2;");
          commentCube.setAttribute("style", "z-index: 5;");
        });
        commentCube.addEventListener('click', ()=>{
          cubist.setAttribute("style", "-webkit-transform: translateZ(-300px) rotateY(0);");
          coverCube.setAttribute("style", "z-index: 5;");
          authorTitleCube.setAttribute("style", "z-index: -2;");
          descriptionCube.setAttribute("style", "z-index: -2;");
          ratingCube.setAttribute("style", "z-index: -2;");
          reviewCube.setAttribute("style", "z-index: -2;");
          commentCube.setAttribute("style", "z-index: -2;");
        });
        reviewSide.addEventListener('click', ()=>{
          cubist.setAttribute("style", "-webkit-transform: translateZ(-300px) rotateX(90deg);");
          coverCube.setAttribute("style", "z-index: -2;");
          authorTitleCube.setAttribute("style", "z-index: -2;");
          descriptionCube.setAttribute("style", "z-index: -2;");
          ratingCube.setAttribute("style", "z-index: -2;");
          reviewCube.setAttribute("style", "z-index: 5;");
          commentCube.setAttribute("style", "z-index: -2;");
        });
        reviewCube.addEventListener('click', ()=>{
          cubist.setAttribute("style", "-webkit-transform: translateZ(-300px) rotateY(180deg);");
          coverCube.setAttribute("style", "z-index: -2;");
          authorTitleCube.setAttribute("style", "z-index: -2;");
          descriptionCube.setAttribute("style", "z-index: -2;");
          ratingCube.setAttribute("style", "z-index: -2;");
          reviewCube.setAttribute("style", "z-index: -2;");
          commentCube.setAttribute("style", "z-index: 5;");
        });
        coverSide.addEventListener('click', ()=>{
          cubist.setAttribute("style", "-webkit-transform: translateZ(-300px) rotateY(0);");
          coverCube.setAttribute("style", "z-index: 5;");
          authorTitleCube.setAttribute("style", "z-index: -2;");
          descriptionCube.setAttribute("style", "z-index: -2;");
          ratingCube.setAttribute("style", "z-index: -2;");
          reviewCube.setAttribute("style", "z-index: -2;");
          commentCube.setAttribute("style", "z-index: -2;");


        });
        coverCube.addEventListener('click', ()=>{
          cubist.setAttribute("style", "-webkit-transform: translateZ(-300px) rotateY(90deg);");
          coverCube.setAttribute("style", "z-index: -2;");
          authorTitleCube.setAttribute("style", "z-index: 5;");
          descriptionCube.setAttribute("style", "z-index: -2;");
          ratingCube.setAttribute("style", "z-index: -2;");
          reviewCube.setAttribute("style", "z-index: -2;");
          commentCube.setAttribute("style", "z-index: -2;");
        });
        authorTitleSide.addEventListener('click', ()=>{
          cubist.setAttribute("style", "-webkit-transform: translateZ(-300px) rotateY(90deg);");
          coverCube.setAttribute("style", "z-index: -2;");
          authorTitleCube.setAttribute("style", "z-index: 5;");
          descriptionCube.setAttribute("style", "z-index: -2;");
          ratingCube.setAttribute("style", "z-index: -2;");
          reviewCube.setAttribute("style", "z-index: -2;");
          commentCube.setAttribute("style", "z-index: -2;");

        });
        authorTitleCube.addEventListener('click', ()=>{
          cubist.setAttribute("style", "-webkit-transform: translateZ(-300px) rotateY(-90deg);");
          coverCube.setAttribute("style", "z-index: -2;");
          authorTitleCube.setAttribute("style", "z-index: -2;");
          descriptionCube.setAttribute("style", "z-index: 5;");
          ratingCube.setAttribute("style", "z-index: -2;");
          reviewCube.setAttribute("style", "z-index: -2;");
          commentCube.setAttribute("style", "z-index: -2;");
        });
        descriptionSide.addEventListener('click', ()=>{
          cubist.setAttribute("style", "-webkit-transform: translateZ(-300px) rotateY(-90deg);");
          coverCube.setAttribute("style", "z-index: -2;");
          authorTitleCube.setAttribute("style", "z-index: -2;");
          descriptionCube.setAttribute("style", "z-index: 5;");
          ratingCube.setAttribute("style", "z-index: -2;");
          reviewCube.setAttribute("style", "z-index: -2;");
          commentCube.setAttribute("style", "z-index: -2;");

        });
        descriptionCube.addEventListener('click', ()=>{
          cubist.setAttribute("style", "-webkit-transform: translateZ(-300px) rotateX(-90deg);");
          coverCube.setAttribute("style", "z-index: -2;");
          authorTitleCube.setAttribute("style", "z-index: -2;");
          descriptionCube.setAttribute("style", "z-index: -2;");
          ratingCube.setAttribute("style", "z-index: 5;");
          reviewCube.setAttribute("style", "z-index: -2;");
          commentCube.setAttribute("style", "z-index: -2;");
        });
      }

      function nullOutCube() {
        console.log("here");
        var coverSide = document.getElementById('coverImage');
        var authorH3 = document.getElementById('authorName');
        var authorImg = document.getElementById('authorPic');
        var titleString = document.getElementById('singleTitle');
        var editionData = document.getElementById('editionandpages');
        var publish = document.getElementById('publisherBox');
        var title2 = document.getElementById('secondTitle');
        var description = document.getElementById('descriptor');
        var rater = document.getElementById('rateMe');
        var revTitle = document.getElementById('reviewTitle');
        var revBody = document.getElementById('reviewBody');
        var posted = document.getElementById('posterDate');
        var coverCue = document.getElementById('coverCube');

        coverSide.innHTML = "ITEM NOT YET SELECTED";

        // coverSide.setAttribute("style", "display: none;");
        coverSide.src = 'http://icons.iconarchive.com/icons/icojam/blue-bits/256/document-empty-icon.png';
        authorH3.setAttribute("style", "display: none;");
        authorImg.setAttribute("style", "display: none;");
        titleString.innerHTML = "NOT SELECTED YET";
        editionData.setAttribute("style", "display: none;");
        publish.setAttribute("style", "display: none;");
        title2.innerHTML = "NOT SELECTED YET";
        description.setAttribute("style", "display: none;");
        rater.setAttribute("style", "display: none;");
        revTitle.innerHTML = "NOT SELECTED YET";
        revBody.setAttribute("style", "display: none;");
        posted.setAttribute("style", "display: none;");
      }


      function onInit() {
        console.log("SingleBookCube is lit");
        var userReadingOrder = [];
        var indexOfOrder = 0;
        var placeInOrder = 0;
        var viewingBookOrder = 0;
        var previousBookButton = document.getElementById('previousBook');
        var nextBookButton = document.getElementById('nextBook');
        var backToShelfButton = document.getElementById('backToShelf');
        var navButtonRibbon = document.getElementById('cubeNavContainer');
        navButtonRibbon.setAttribute("style", "display: none;");
        $http.get(`/user_book_reviews/${$stateParams.id}`)
        .then(data=>{
          var bookReview = data.data;
          //TODO pulltogether an array of the reading order and store the index our current selection lives at.
          $http.get('/user_reading_lists/1')
          .then(userList=>{
            var readingOrder = userList.data;
            for (let key in readingOrder.completed_readings) {
              userReadingOrder[parseInt(key)] = readingOrder.completed_readings[key];
            }

            indexOfOrder = userReadingOrder.length;
            userReadingOrder[indexOfOrder] = readingOrder[readingOrder.current_position];

            placeInOrder = readingOrderArray.indexOf(readingOrder.current_position);
            placeInOrder = incrementPlaceInOrder(placeInOrder);
            ++indexOfOrder;
            $http.get('/interrupts')
            .then(interruptData=>{
              var interrupts = interruptData.data;
              var unreadInterruptID = null;
              if (readingOrder.interrupt_enabled) {
                for (let i = 0; i < interrupts.length; i++) {
                  if (!interrupts[i].is_completed) {
                    unreadInterruptID = readingOrder.interrupt;
                  }
                }
                if (unreadInterruptID !== null) {
                  userReadingOrder[indexOfOrder] = unreadInterruptID;
                  ++indexOfOrder;
                }
              }

              while (placeInOrder !== readingOrderArray.indexOf(readingOrder.current_position)) {
                userReadingOrder[indexOfOrder] = readingOrder[readingOrderArray[placeInOrder]];
                ++indexOfOrder;
                placeInOrder = incrementPlaceInOrder(placeInOrder);
              }
              console.log(userReadingOrder);
              viewingBookOrder = userReadingOrder.indexOf(bookReview.id);
              console.log(viewingBookOrder);
              if (viewingBookOrder === -1) {
                alert("ERROR - VIEWING BOOK NOT IN SEQUENCE");
              }
              previousBook = viewingBookOrder - 1;
              nextBook = viewingBookOrder + 1;

              if (viewingBookOrder === 0) {
                previousBookButton.setAttribute("style", "display: none;");
                previousBook = -1;
              }
              if (viewingBookOrder === (userReadingOrder.length - 1)) {
                nextBookButton.setAttribute("style", "display: none;");
                nextBook = -1;
              }
              populateObject(bookReview);
              setCubeNavigation();
              previousBookButton.addEventListener('click', ()=>{
                if (userReadingOrder[previousBook] === null) {
                  nextBook = viewingBookOrder;
                  viewingBookOrder = previousBook;
                  previousBook -= 1;
                  if (previousBook < 0) {
                    previousBookButton.setAttribute("style", "display: none;");
                  } else {
                    previousBookButton.setAttribute("style", "display: initial;");
                  }
                  nullOutCube();
                } else {
                  $http.get(`/singlebookcube/${userReadingOrder[previousBook]}`).then(()=>{
                    $state.go('singlebookcube', {id: userReadingOrder[previousBook]});
                  });
                }
              });
              nextBookButton.addEventListener('click', ()=>{
                if (userReadingOrder[nextBook] === null) {
                  previousBook = viewingBookOrder;
                  viewingBookOrder = nextBook;
                  nextBook += 1;
                  if (nextBook >= userReadingOrder.length) {
                    nextBookButton.setAttribute("style", "display: none;");
                  } else {
                    nextBookButton.setAttribute("style", "display: initial;");
                  }
                  nullOutCube();
                } else {
                  $http.get(`/singlebookcube/${userReadingOrder[nextBook]}`).then(()=>{
                    $state.go('singlebookcube', {id: userReadingOrder[nextBook]});
                  });
                }
              });
              backToShelfButton.addEventListener('click', ()=>{
                $http.get('/hurdreadlist').then(()=>{
                  $state.go('hurdreadlist');
                });
              });

            });
          });
          //TODO populate the data in vm.singleBook for our page display.
        });


      }

    }

}());
