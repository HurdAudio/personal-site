'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vintage_pulps').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('vintage_pulps').insert({
          id: 1,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 53,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('vintage_pulps').insert({
          id: 2,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 55,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('vintage_pulps').insert({
          id: 3,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 107,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('vintage_pulps').insert({
          id: 4,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 108,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('vintage_pulps_id_seq', (SELECT MAX(id) FROM vintage_pulps));");
    });
};
