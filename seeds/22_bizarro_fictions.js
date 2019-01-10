'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bizarro_fictions').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('bizarro_fictions').insert({
          id: 1,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 10,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('bizarro_fictions').insert({
          id: 2,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 37,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('bizarro_fictions').insert({
          id: 3,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 86,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('bizarro_fictions').insert({
          id: 4,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 87,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('bizarro_fictions').insert({
          id: 5,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 203,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('bizarro_fictions_id_seq', (SELECT MAX(id) FROM bizarro_fictions));");
    });
};
