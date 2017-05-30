'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('science_fiction_series').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('science_fiction_series').insert({
          id: 1,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 4,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('science_fiction_series').insert({
          id: 2,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 9,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('science_fiction_series').insert({
          id: 3,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 17,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-04-26T10:40:06.000Z')
        }),
        knex('science_fiction_series').insert({
          id: 4,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 21,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('science_fiction_series').insert({
          id: 5,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 30,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('science_fiction_series').insert({
          id: 6,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 34,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('science_fiction_series').insert({
          id: 7,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 42,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('science_fiction_series').insert({
          id: 8,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 46,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('science_fiction_series').insert({
          id: 9,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 60,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('science_fiction_series').insert({
          id: 10,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 64,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('science_fiction_series').insert({
          id: 11,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 76,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('science_fiction_series').insert({
          id: 12,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 77,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('science_fiction_series').insert({
          id: 13,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 78,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('science_fiction_series').insert({
          id: 14,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 172,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('science_fiction_series').insert({
          id: 15,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 173,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('science_fiction_series').insert({
          id: 16,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 174,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('science_fiction_series').insert({
          id: 17,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 178,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('science_fiction_series').insert({
          id: 18,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 179,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('science_fiction_series').insert({
          id: 19,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 180,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('science_fiction_series').insert({
          id: 20,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 187,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('science_fiction_series').insert({
          id: 21,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 195,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('science_fiction_series_id_seq', (SELECT MAX(id) FROM science_fiction_series));");
    });
};
