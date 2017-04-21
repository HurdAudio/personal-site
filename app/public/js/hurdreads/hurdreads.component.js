(function() {
  'use strict';



  angular.module('app')
    .component('hurdreads', {
      controller: HurdReadsController,
      templateUrl: '/js/hurdreads/hurdreads.template.html'
    });

    HurdReadsController.$inject = ['$http', '$state', '$stateParams'];

    function HurdReadsController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;



      function onInit() {
        console.log("HurdReads is lit.");
        vm.currentReading = {};
        $http.get('/user_reading_lists/1')
        .then(readingData=>{
          var reading = readingData.data;
          $http.get(`/user_book_reviews/${reading[reading.current_position]}`)
          .then(readerReviewData=>{
            var readerReview = readerReviewData.data;
            if (readerReview.periodical_or_book === 'book') {
              $http.get(`/books/${readerReview.books_id}`)
              .then(bookData=>{
                var book = bookData.data;
                vm.currentReading.author = book.author;
                vm.currentReading.title = book.title;
                vm.currentReading.cover_url = book.cover_url;
              });
            } else {
              $http.get(`/periodicals/${readerReview.periodcials_id}`)
              .then(periodicalData=>{
                var periodical = periodicalData.data;
                vm.currentReading.author = periodical.editor + "(editor)";
                vm.currentReading.title = periodical.name + " " + periodical.issue;
                vm.currentReading.cover_url = periodical.img_url;
              });

            }
          });
        });


      }

    }

}());
