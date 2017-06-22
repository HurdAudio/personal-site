'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('graphic_novels').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('graphic_novels').insert({
          id: 1,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 26,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('graphic_novels').insert({
          id: 2,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 51,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('graphic_novels').insert({
          id: 3,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 101,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('graphic_novels').insert({
          id: 4,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 102,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('graphic_novels').insert({
          id: 5,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 191,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('graphic_novels_id_seq', (SELECT MAX(id) FROM graphic_novels));");
    });
};
