(function() {
  'use strict';


  var readingOrderArray = ['female_author_selection_1', 'crime_series_1', 'backlog_ebook_1', 'science_fiction_series_1', 'free_selection_1', 'crime_series_2', 'insert_1', 'science_fiction_series_2', 'literary_journal_1', 'bizarro_fiction_1', 'genre_journal_1', 'classic_1', 'literary_journal_2', 'compendium_1', 'prize_1', 'male_author_selection_1', 'crime_series_3', 'backlog_physical_book_1', 'science_fiction_series_3', 'free_selection_2', 'crime_series_4', 'insert_2', 'science_fiction_series_4', 'genre_journal_2', 'non_fiction_1', 'literary_journal_3', 'anthology_1', 'genre_journal_3', 'roulette_1', 'prize_2', 'graphic_novel_1', 'female_author_selection_2', 'crime_series_5', 'backlog_ebook_2', 'science_fiction_series_5', 'literary_journal_4', 'free_selection_3', 'crime_series_6', 'insert_3', 'science_fiction_series_6', 'genre_journal_4', 'roulette_2', 'literary_journal_5', 'occult_reading_1', 'genre_journal_5', 'bizarro_fiction_2', 'prize_3', 'male_author_selection_2', 'crime_series_7', 'backlog_physical_book_2', 'science_fiction_series_7', 'literary_journal_6', 'free_selection_4', 'crime_series_8', 'insert_4', 'science_fiction_series_8', 'genre_journal_6', 'classic_2', 'literary_journal_7', 'compendium_2', 'genre_journal_7', 'non_fiction_2', 'prize_4', 'graphic_novel_2', 'contemporary_pulp_1', 'vintage_pulp_1', 'contemporary_pulp_2', 'vintage_pulp_2', 'prize_5', 'female_author_selection_3', 'crime_series_9', 'backlog_ebook_3', 'science_fiction_series_9', 'free_selection_5', 'crime_series_10', 'insert_5', 'science_fiction_series_10', 'literary_journal_8', 'anthology_2', 'genre_journal_8', 'roulette_3', 'literary_journal_9', 'roulette_4', 'prize_6', 'male_author_selection_3', 'crime_series_11', 'backlog_physical_book_3', 'science_fiction_series_11', 'free_selection_6', 'crime_series_12', 'insert_6', 'science_fiction_series_12', 'genre_journal_9', 'occult_reading_2', 'literary_journal_10', 'bizarro_fiction_3', 'genre_journal_10', 'classic_3', 'prize_7', 'graphic_novel_3','female_author_selection_4', 'crime_series_13', 'backlog_ebook_4', 'science_fiction_series_13', 'literary_journal_11', 'free_selection_7', 'crime_series_14', 'insert_7', 'science_fiction_series_14', 'genre_journal_11', 'compendium_3', 'literary_journal_12', 'non_fiction_3', 'genre_journal_12', 'anthology_3', 'prize_8', 'male_author_selection_4', 'crime_series_15', 'backlog_physical_book_4', 'science_fiction_series_15', 'literary_journal_13', 'free_selection_8', 'crime_series_16', 'insert_8', 'science_fiction_series_16', 'genre_journal_13', 'roulette_5', 'literary_journal_14', 'roulette_6', 'genre_journal_14', 'occult_reading_3', 'prize_9', 'graphic_novel_4', 'contemporary_pulp_3', 'vintage_pulp_3', 'contemporary_pulp_4', 'vintage_pulp_4', 'prize_10'];
  var indexOfList = 0;
  var indexOfReadingOrder = 0;
  var requests = [];

  function incrementIndexOfReadingOrder() {
    ++indexOfReadingOrder;
    if (indexOfReadingOrder >= readingOrderArray.length) {
      indexOfReadingOrder = 0;
    }
    return (indexOfReadingOrder);
  }


  angular.module('app')
    .component('hurdreadlist', {
      controller: ReadinglistController,
      templateUrl: '/js/hurdreadlist/hurdreadlist.template.html'
    });

    ReadinglistController.$inject = ['$http', '$state', '$stateParams'];

    function ReadinglistController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.viewBook = viewBook;

      function viewBook(reviewID) {
        console.log(reviewID);
        console.log("here");
        if (reviewID !== null) {

          $http.get(`/singlebookcube/${reviewID}`).then(()=>{
            $state.go('singlebookcube', {id: reviewID});
          });
        }
      }







      function getReadingData (readingObject) {

        if (readingObject.user_review === null) {
          // fill in object data
          readingObject.rating = null;
          readingObject.author = Math.floor(Math.random()*127);
          readingObject.title = Math.floor(Math.random()*127);
          readingObject.user_review = -1;
          readingObject.review_title = "Review Pending";
          readingObject.review_body = "This item is not yet reviewed.";
          switch (readingObject.slot_type) {
            case ('female_author_selection_1'):
              readingObject.description = "Female Author Selection - Not Yet Selected";
              break;
            case ('crime_series_1'):
              readingObject.description = "Crime Series - Not Yet Selected";
              break;
            case ('backlog_ebook_1'):
              readingObject.description = "Backlog eBook - Not Yet Selected";
              break;
            case ('science_fiction_series_1'):
              readingObject.description = "Science Fiction Series - Not Yet Selected";
              break;
            case ('free-selection_1'):
              readingObject.description = "Free Selection - Not Yet Selected";
              break;
            case ('crime_series_2'):
              readingObject.description = "Crime Series - Not Yet Selected";
              break;
            case ('insert_1'):
              readingObject.description = "Insert - Not Yet Selected";
              break;
            case ('science_fiction_series_2'):
              readingObject.description = "Science Fiction Series - Not Yet Selected";
              break;
            case ('literary_journal_1'):
              readingObject.description = "Literary Journal - Not Yet Selected";
              break;
            case ('bizarro_fiction_1'):
              readingObject.description = "Bizarro Fiction - Not Yet Selected";
              break;
            case ('genre_journal_1'):
              readingObject.description = "Genre Journal - Not Yet Selected";
              break;
            case ('classic_1'):
              readingObject.description = "Classic - Not Yet Selected";
              break;
            case ('literary_journal_2'):
              readingObject.description = "Literary Journal - Not Yet Selected";
              break;
            case ('compendium_1'):
              readingObject.description = "Compendium Selection - Not Yet Selected";
              break;
            case ('prize_1'):
              readingObject.description = "Prize Winning Work - Not Yet Selected";
              break;
            case ('male_author_selection_1'):
              readingObject.description = "Male Author Selection - Not Yet Selected";
              break;
            case ('crime_series_3'):
              readingObject.description = "Crime Series - Not Yet Selected";
              break;
            case ('backlog_physical_book_1'):
              readingObject.description = "Backlog: Physical Book - Not Yet Selected";
              break;
            case ('science_fiction_series_3'):
              readingObject.description = "Science Fiction Series - Not Yet Selected";
              break;
            case ('free_selection_2'):
              readingObject.description = "Free Selection - Not Yet Selected";
              break;
            case ('crime_series_4'):
              readingObject.description = "Crime Series - Not Yet Selected";
              break;
            case ('insert_2'):
              readingObject.description = "Insert - Not Yet Selected";
              break;
            case ('science_fiction_series_4'):
              readingObject.description = "Science Fiction Series - Not Yet Selected";
              break;
            case ('genre_journal_2'):
              readingObject.description = "Genre Journal - Not Yet Selected";
              break;
            case ('non_fiction_1'):
              readingObject.description = "Non Fiction Work - Not Yet Selected";
              break;
            case ('literary_journal_3'):
              readingObject.description = "Literary Journal - Not Yet Selected";
              break;
            case ('anthology_1'):
              readingObject.description = "Anthology - Not Yet Selected";
              break;
            case ('genre_journal_3'):
              readingObject.description = "Genre Journal - Not Yet Selected";
              break;
            case ('roulette_1'):
              readingObject.description = "Roulette - Not Yet Selected";
              break;
            case ('prize_2'):
              readingObject.description = "Prize Winning Work - Not Yet Selected";
              break;
            case ('graphic_novel_1'):
              readingObject.description = "Graphic Novel - Not Yet Selected";
              break;
            case ('female_author_selection_2'):
              readingObject.description = "Female Author Selection - Not Yet Selected";
              break;
            case ('crime_series_5'):
              readingObject.description = "Crime Series - Not Yet Selected";
              break;
            case ('backlog_ebook_2'):
              readingObject.description = "Backlog eBook - Not Yet Selected";
              break;
            case ('science_fiction_series_5'):
              readingObject.description = "Science Fiction Series - Not Yet Selected";
              break;
            case ('literary_journal_4'):
              readingObject.description = "Literary Journal - Not Yet Selected";
              break;
            case ('free_selection_3'):
              readingObject.description = "Free Selection - Not Yet Selected";
              break;
            case ('crime_series_6'):
              readingObject.description = "Crime Series - Not Yet Selected";
              break;
            case ('insert_3'):
              readingObject.description = "Insert - Not Yet Selected";
              break;
            case ('science_fiction_series_6'):
              readingObject.description = "Science Fiction Series - Not Yet Selected";
              break;
            case ('genre_journal_4'):
              readingObject.description = "Genre Journal - Not Yet Selected";
              break;
            case ('roulette_2'):
              readingObject.description = "Roulette - Not Yet Selected";
              break;
            case ('literary_journal_5'):
              readingObject.description = "Literary Journal - Not Yet Selected";
              break;
            case ('occult_reading_1'):
              readingObject.description = "Occult Reading - Not Yet Selected";
              break;
            case ('genre_journal_5'):
              readingObject.description = "Genre Journal - Not Yet Selected";
              break;
            case ('bizarro_fiction_2'):
              readingObject.description = "Bizarro Fiction - Not Yet Selected";
              break;
            case ('prize_3'):
              readingObject.description = "Prize Winning Work - Not Yet Selected";
              break;
            case ('male_author_selection_2'):
              readingObject.description = "Male Author Selection - Not Yet Selected";
              break;
            case ('crime_series_7'):
              readingObject.description = "Crime Series - Not Yet Selected";
              break;
            case ('backlog_physical_book_2'):
              readingObject.description = "Backlog: Physical Book - Not Yet Selected";
              break;
            case ('science_fiction_series_7'):
              readingObject.description = "Science Fiction Series - Not Yet Selected";
              break;
            case ('literary_journal_6'):
              readingObject.description = "Literary Journal - Not Yet Selected";
              break;
            case ('free_selection_4'):
              readingObject.description = "Free Selection - Not Yet Selected";
              break;
            case ('crime_series_8'):
              readingObject.description = "Crime Series - Not Yet Selected";
              break;
            case ('insert_4'):
              readingObject.description = "Insert - Not Yet Selected";
              break;
            case ('science_fiction_series_8'):
              readingObject.description = "Science Fiction Series - Not Yet Selected";
              break;
            case ('genre_journal_6'):
              readingObject.description = "Genre Journal - Not Yet Selected";
              break;
            case ('classic_2'):
              readingObject.description = "Classic - Not Yet Selected";
              break;
            case ('literary_journal_7'):
              readingObject.description = "Literary Journal - Not Yet Selected";
              break;
            case ('compendium_2'):
              readingObject.description = "Compendium Selection - Not Yet Selected";
              break;
            case ('genre_journal_7'):
              readingObject.description = "Genre Journal - Not Yet Selected";
              break;
            case ('non_fiction_2'):
              readingObject.description = "Non Fiction Work - Not Yet Selected";
              break;
            case ('prize_4'):
              readingObject.description = "Prize Winning Work - Not Yet Selected";
              break;
            case ('graphic_novel_2'):
              readingObject.description = "Graphic Novel - Not Yet Selected";
              break;
            case ('contemporary_pulp_1'):
              readingObject.description = "Contemporary Pulp - Not Yet Selected";
              break;
            case ('vintage_pulp_1'):
              readingObject.description = "Vintage Pulp - Not Yet Selected";
              break;
            case ('contemporary_pulp_2'):
              readingObject.description = "Contemporary Pulp - Not Yet Selected";
              break;
            case ('vintage_pulp_2'):
              readingObject.description = "Vintage Pulp - Not Yet Selected";
              break;
            case ('prize_5'):
              readingObject.description = "Prize Winning Work - Not Yet Selected";
              break;
              case ('female_author_selection_3'):
                readingObject.description = "Female Author Selection - Not Yet Selected";
                break;
              case ('crime_series_9'):
                readingObject.description = "Crime Series - Not Yet Selected";
                break;
              case ('backlog_ebook_3'):
                readingObject.description = "Backlog eBook - Not Yet Selected";
                break;
              case ('science_fiction_series_9'):
                readingObject.description = "Science Fiction Series - Not Yet Selected";
                break;
              case ('free-selection_5'):
                readingObject.description = "Free Selection - Not Yet Selected";
                break;
              case ('crime_series_10'):
                readingObject.description = "Crime Series - Not Yet Selected";
                break;
              case ('insert_5'):
                readingObject.description = "Insert - Not Yet Selected";
                break;
              case ('science_fiction_series_10'):
                readingObject.description = "Science Fiction Series - Not Yet Selected";
                break;
              case ('literary_journal_8'):
                readingObject.description = "Literary Journal - Not Yet Selected";
                break;
              case ('anthology_2'):
                readingObject.description = "Anthology - Not Yet Selected";
                break;
              case ('genre_journal_8'):
                readingObject.description = "Genre Journal - Not Yet Selected";
                break;
              case ('roulette_3'):
                readingObject.description = "Roulette Selection - Not Yet Selected";
                break;
              case ('literary_journal_9'):
                readingObject.description = "Literary Journal - Not Yet Selected";
                break;
              case ('roulette_4'):
                readingObject.description = "Roulette Selection - Not Yet Selected";
                break;
              case ('prize_6'):
                readingObject.description = "Prize Winning Work - Not Yet Selected";
                break;
              case ('male_author_selection_3'):
                readingObject.description = "Male Author Selection - Not Yet Selected";
                break;
              case ('crime_series_11'):
                readingObject.description = "Crime Series - Not Yet Selected";
                break;
              case ('backlog_physical_book_3'):
                readingObject.description = "Backlog: Physical Book - Not Yet Selected";
                break;
              case ('science_fiction_series_11'):
                readingObject.description = "Science Fiction Series - Not Yet Selected";
                break;
              case ('free_selection_6'):
                readingObject.description = "Free Selection - Not Yet Selected";
                break;
              case ('crime_series_12'):
                readingObject.description = "Crime Series - Not Yet Selected";
                break;
              case ('insert_6'):
                readingObject.description = "Insert - Not Yet Selected";
                break;
              case ('science_fiction_series_12'):
                readingObject.description = "Science Fiction Series - Not Yet Selected";
                break;
              case ('genre_journal_9'):
                readingObject.description = "Genre Journal - Not Yet Selected";
                break;
              case ('occult_reading_2'):
                readingObject.description = "Occult Reading - Not Yet Selected";
                break;
              case ('literary_journal_10'):
                readingObject.description = "Literary Journal - Not Yet Selected";
                break;
              case ('Bizarro_fiction_3'):
                readingObject.description = "Bizarro Fiction - Not Yet Selected";
                break;
              case ('genre_journal_10'):
                readingObject.description = "Genre Journal - Not Yet Selected";
                break;
              case ('classic_3'):
                readingObject.description = "Classic - Not Yet Selected";
                break;
              case ('prize_7'):
                readingObject.description = "Prize Winning Work - Not Yet Selected";
                break;
              case ('graphic_novel_3'):
                readingObject.description = "Graphic Novel - Not Yet Selected";
                break;
              case ('female_author_selection_4'):
                readingObject.description = "Female Author Selection - Not Yet Selected";
                break;
              case ('crime_series_13'):
                readingObject.description = "Crime Series - Not Yet Selected";
                break;
              case ('backlog_ebook_4'):
                readingObject.description = "Backlog eBook - Not Yet Selected";
                break;
              case ('science_fiction_series_13'):
                readingObject.description = "Science Fiction Series - Not Yet Selected";
                break;
              case ('literary_journal_11'):
                readingObject.description = "Literary Journal - Not Yet Selected";
                break;
              case ('free_selection_7'):
                readingObject.description = "Free Selection - Not Yet Selected";
                break;
              case ('crime_series_14'):
                readingObject.description = "Crime Series - Not Yet Selected";
                break;
              case ('insert_7'):
                readingObject.description = "Insert - Not Yet Selected";
                break;
              case ('science_fiction_series_14'):
                readingObject.description = "Science Fiction Series - Not Yet Selected";
                break;
              case ('genre_journal_11'):
                readingObject.description = "Genre Journal - Not Yet Selected";
                break;
              case ('compendium_3'):
                readingObject.description = "Compendium - Not Yet Selected";
                break;
              case ('literary_journal_12'):
                readingObject.description = "Literary Journal - Not Yet Selected";
                break;
              case ('non_fiction_3'):
                readingObject.description = "Non Fiction Work - Not Yet Selected";
                break;
              case ('genre_journal_12'):
                readingObject.description = "Genre Journal - Not Yet Selected";
                break;
              case ('anthology_3'):
                readingObject.description = "Anthology - Not Yet Selected";
                break;
              case ('prize_8'):
                readingObject.description = "Prize Winning Work - Not Yet Selected";
                break;
              case ('male_author_selection_4'):
                readingObject.description = "Male Author Selection - Not Yet Selected";
                break;
              case ('crime_series_15'):
                readingObject.description = "Crime Series - Not Yet Selected";
                break;
              case ('backlog_physical_book_4'):
                readingObject.description = "Backlog: Physical Book - Not Yet Selected";
                break;
              case ('science_fiction_series_15'):
                readingObject.description = "Science Fiction Series - Not Yet Selected";
                break;
              case ('literary_journal_13'):
                readingObject.description = "Literary Journal - Not Yet Selected";
                break;
              case ('free_selection_8'):
                readingObject.description = "Free Selection - Not Yet Selected";
                break;
              case ('crime_series_16'):
                readingObject.description = "Crime Series - Not Yet Selected";
                break;
              case ('insert_8'):
                readingObject.description = "Insert - Not Yet Selected";
                break;
              case ('science_fiction_series_16'):
                readingObject.description = "Science Fiction Series - Not Yet Selected";
                break;
              case ('genre_journal_13'):
                readingObject.description = "Genre Journal - Not Yet Selected";
                break;
              case ('roulette_5'):
                readingObject.description = "Roulette - Not Yet Selected";
                break;
              case ('literary_journal_14'):
                readingObject.description = "Literary Journal - Not Yet Selected";
                break;
              case ('roulette_6'):
                readingObject.description = "Roulette - Not Yet Selected";
                break;
              case ('genre_journal_14'):
                readingObject.description = "Genre Journal - Not Yet Selected";
                break;
              case ('occult_reading_3'):
                readingObject.description = "Occult Reading - Not Yet Selected";
                break;
              case ('prize_9'):
                readingObject.description = "Prize Winning Work - Not Yet Selected";
                break;
              case ('graphic_novel_4'):
                readingObject.description = "Graphic Novel - Not Yet Selected";
                break;
              case ('contemporary_pulp_3'):
                readingObject.description = "Contemporary Pulp - Not Yet Selected";
                break;
              case ('vintage_pulp_3'):
                readingObject.description = "Vintage Pulp - Not Yet Selected";
                break;
              case ('contemporary_pulp_4'):
                readingObject.description = "Contemporary Pulp - Not Yet Selected";
                break;
              case ('vintage_pulp_4'):
                readingObject.description = "Vintage Pulp - Not Yet Selected";
                break;
              case ('prize_10'):
                readingObject.description = "Prize Winning Work - Not Yet Selected";
                break;
            default:
              readingObject.description = "Unknown type unselected";
          }
          requests.push(readingObject);
          return (readingObject);
        } else {
          $http.get(`/user_book_reviews/${readingObject.user_review}`)
          .then(data=>{
            var reader = data.data;
            readingObject.periodical_or_book = reader.periodical_or_book;
            readingObject.books_id = reader.books_id;
            readingObject.periodicals_id = reader.periodicals_id;
            readingObject.rating = reader.rating;
            readingObject.review_title = reader.review_title;
            readingObject.review_body = reader.review_body;
            readingObject.created_at = reader.created_at;
            readingObject.updated_at = reader.updated_at;
            if (reader.books_id !== null) {
              $http.get(`/books/${reader.books_id}`)
              .then(bookData=>{
                var book = bookData.data;
                readingObject.author = book.author;
                readingObject.title = book.title;
                readingObject.cover_url = book.cover_url;
                readingObject.author_url = book.author_url;
                readingObject.publisher = book.publisher;
                readingObject.publication_date = book.publication_date;
                readingObject.edition = book.edition;
                readingObject.part_of_series = book.part_of_series;
                readingObject.name_of_series = book.name_of_series;
                readingObject.number_in_series = book.number_in_series;
                readingObject.number_of_pages = book.number_of_pages;
                readingObject.author_gender = book.author_gender;
                readingObject.author_nationality = book.author_nationality;
                readingObject.description = book.description;
                requests.push(readingObject);
                return(readingObject);
              });
            } else {
              $http.get(`/periodicals/${reader.periodicals_id}`)
              .then(magazineData=>{
                var magazine = magazineData.data;
                readingObject.name = magazine.name;
                readingObject.title = magazine.name;
                readingObject.issue = magazine.issue;
                readingObject.editor = magazine.editor;
                readingObject.author = magazine.editor;
                readingObject.editor_url = magazine.editor_url;
                readingObject.cover_url = magazine.img_url;
                readingObject.edition = magazine.edition;
                readingObject.publication_date = magazine.publication_date;
                readingObject.pages = magazine.pages;
                readingObject.number_of_pages = magazine.pages;
                readingObject.img_url = magazine.img_url;
                readingObject.description = magazine.description;
                requests.push(readingObject);
                return(readingObject);
              });
            }
          });
        }
        return(readingObject);
      }

      function populateBookshelf () {
        var div = null;
        var bookSize = 0;
        var leanDiv = null;
        var leaner = 0;
        var leaning = false;
        var leanRandom = 0;
        var randomizeBookBase = 0;
        var bookID = '';
        var pages = 0;
        var leanPixels = 0;

        for (let i = 0; i < vm.readingOrder.length; i++) {
          div = document.getElementById(vm.readingOrder[i].author + vm.readingOrder[i].title + vm.readingOrder[i].user_review);
          pages = vm.readingOrder[i].number_of_pages;
          console.log(pages);

          if ((leaner > 5) && (pages < 450)) {
            leanRandom = Math.floor(Math.random()*7);
            if (leanRandom === 1) {
              leaner = 0;
              leaning = true;
              leanDiv = div.parentNode;
              leanDiv.setAttribute("class", "book-tilted");
            } else {
              ++leaner;
              leaning = false;
            }
          } else {
            ++leaner;
          }
          randomizeBookBase = Math.floor(Math.random()*14);
          switch (randomizeBookBase) {
            case (0):
              bookID = 'book book-one';
              break;
            case (1):
              bookID = 'book book-two';
              break;
            case (2):
              bookID = "book book-three";
              break;
            case (3):
              bookID = "book book-four";
              break;
            case (4):
              bookID = "book book-five";
              break;
            case(5):
              bookID = "book book-six";
              break;
            case(6):
              bookID = "book book-seven";
              break;
            case(7):
              bookID = "book book-eight";
              break;
            case(8):
              bookID = "book book-nine";
              break;
            case(9):
              bookID = "book book-ten";
              break;
            case(10):
              bookID = "book book-eleven";
              break;
            case(11):
              bookID = "book book-twelve";
              break;
            case(12):
              bookID = "book book-thirteen";
              break;
            case(13):
              bookID = "book book-fourteen";
              break;
            default:
              bookID = "book book-one";
          }
          div.setAttribute("class", bookID);
          console.log(vm.readingOrder[i]);
          console.log(vm.readingOrder[i].books_id);
          if (!isNaN(vm.readingOrder[i].number_of_pages)) {
            if (vm.readingOrder[i].number_of_pages < 100) {
              bookSize = 1.4;
            } else {
              bookSize = vm.readingOrder[i].number_of_pages/80;
            }
          } else {
            bookSize = 1.5;
          }

          div.setAttribute("style", "width: " + bookSize + "em; background-image: url(" + vm.readingOrder[i].cover_url + ");");
          if (leaning) {
            leanPixels = bookSize * 2.4;
            leanDiv.setAttribute("style", "margin-right:" + leanPixels +"px;");
          }
        }


      }

      function initialPopulation() {
        var shelfDiv = document.getElementById('theShelf');
        for (let j = 0; j < vm.readingOrder.length; j++) {
          vm.readingOrder[j] = getReadingData(vm.readingOrder[j]);
        }
        Promise.all(requests).then((results)=>{
          console.log(results);
          setTimeout(()=>{
            populateBookshelf();
          }, 3000);

        })
        .catch((err)=>{
          console.log(err);
        });

      }

      function onInit() {
        console.log("Readinglist is lit.");
        //TODO get reading order (books completed + curently reading + interrupt-if-applicable + reading-list)
        $http.get('/user_reading_lists/1')
        .then(userList=>{
          var userReadingList = userList.data;

          indexOfReadingOrder = readingOrderArray.indexOf(userReadingList.current_position);


          vm.readingOrder = [];
          for (let key in userReadingList.completed_readings) {
            vm.readingOrder[parseInt(key)] = {};
            vm.readingOrder[parseInt(key)].user_review = userReadingList.completed_readings[key];
            vm.readingOrder[parseInt(key)].author="anon";
            vm.readingOrder[parseInt(key)].title="anon";
            vm.readingOrder[parseInt(key)].index = (parseInt(key));
          }
          indexOfList = (vm.readingOrder.length);
          vm.readingOrder[indexOfList] = {};
          vm.readingOrder[indexOfList].user_review = userReadingList[userReadingList.current_position];
          vm.readingOrder[indexOfList].author="anon";
          vm.readingOrder[indexOfList].title="anon";
          vm.readingOrder[indexOfList].index = indexOfList;
          indexOfReadingOrder = incrementIndexOfReadingOrder();
          ++indexOfList;
          $http.get('/interrupts')
          .then(interruptData=>{
            var interrupts = interruptData.data;
            var unreadInterruptID = null;
            if (userReadingList.interrupt_enabled) {
              for (let i = 0; i < interrupts.length; i++) {
                if (!interrupts[i].is_completed) {
                  unreadInterruptID = userReadingList.interrupt;
                }
              }
              if (unreadInterruptID !== null) {
                vm.readingOrder[indexOfList] = {};
                vm.readingOrder[indexOfList].user_review = unreadInterruptID;
                vm.readingOrder[indexOfList].author = "anon";
                vm.readingOrder[indexOfList].title = "anon";
                vm.readingOrder[indexOfList].index = indexOfList;
                ++indexOfList;
              }
            }
            while (readingOrderArray[indexOfReadingOrder] !== userReadingList.current_position) {
              vm.readingOrder[indexOfList] = {};
              vm.readingOrder[indexOfList].user_review = userReadingList[readingOrderArray[indexOfReadingOrder]];
              vm.readingOrder[indexOfList].slot_type = readingOrderArray[indexOfReadingOrder];
              vm.readingOrder[indexOfList].author = "anon";
              vm.readingOrder[indexOfList].title = "anon";
              vm.readingOrder[indexOfList].index = indexOfList;
              ++indexOfList;
              indexOfReadingOrder = incrementIndexOfReadingOrder();
            }

            initialPopulation();





          });


        });
        //TODO Build object based upon reading order, generate image, size by page numbers, and randomly lean some books...
        //TODO set up ng-repeat on html to handle this object


      }

    }

}());
