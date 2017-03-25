'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('non_fictions').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('non_fictions').insert({
          id: 1,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 22,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('non_fictions').insert({
          id: 2,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 49,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('non_fictions').insert({
          id: 3,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 97,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('non_fictions_id_seq', (SELECT MAX(id) FROM non_fictions));");
    });
};
