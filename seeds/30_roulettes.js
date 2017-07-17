'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('roulettes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('roulettes').insert({
          id: 1,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 24,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-06-11T17:25:37.000Z')
        }),
        knex('roulettes').insert({
          id: 2,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 35,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('roulettes').insert({
          id: 3,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 66,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('roulettes').insert({
          id: 4,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 67,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('roulettes').insert({
          id: 5,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 99,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('roulettes').insert({
          id: 6,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 100,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('roulettes').insert({
          id: 7,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 190,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('roulettes').insert({
          id: 8,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 198,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('roulettes_id_seq', (SELECT MAX(id) FROM roulettes));");
    });
};
