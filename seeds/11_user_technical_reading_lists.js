'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_technical_reading_lists').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user_technical_reading_lists').insert({
          id: 1,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 69,
          periodical_id: null,
          user_book_reviews_id: 77,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('user_technical_reading_lists_id_seq', (SELECT MAX(id) FROM user_technical_reading_lists));");
    });
};
