'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('crime_series').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('crime_series').insert({
          id: 1,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 2,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('crime_series').insert({
          id: 2,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 7,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('crime_series').insert({
          id: 3,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 15,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('crime_series').insert({
          id: 4,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 19,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('crime_series').insert({
          id: 5,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 28,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-07-22 09:05:18 UTC')
        }),
        knex('crime_series').insert({
          id: 6,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 32,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('crime_series').insert({
          id: 7,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 40,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('crime_series').insert({
          id: 8,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 44,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('crime_series').insert({
          id: 9,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 58,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('crime_series').insert({
          id: 10,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 62,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('crime_series').insert({
          id: 11,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 72,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('crime_series').insert({
          id: 12,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 73,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('crime_series').insert({
          id: 13,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 170,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('crime_series').insert({
          id: 14,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 171,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('crime_series').insert({
          id: 15,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 175,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('crime_series').insert({
          id: 16,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 176,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('crime_series').insert({
          id: 17,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 177,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('crime_series').insert({
          id: 18,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 181,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('crime_series').insert({
          id: 19,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 182,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('crime_series').insert({
          id: 20,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 185,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('crime_series').insert({
          id: 21,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 193,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('crime_series').insert({
          id: 22,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 197,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('crime_series_id_seq', (SELECT MAX(id) FROM crime_series));");
    });
};
