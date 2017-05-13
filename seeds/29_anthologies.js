'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('anthologies').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('anthologies').insert({
          id: 1,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 23,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('anthologies').insert({
          id: 2,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 65,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('anthologies').insert({
          id: 3,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 98,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('anthologies').insert({
          id: 4,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 189,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('anthologies_id_seq', (SELECT MAX(id) FROM anthologies));");
    });
};
