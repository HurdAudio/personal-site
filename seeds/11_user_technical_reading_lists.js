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
          completed_readings: {},
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_technical_reading_lists').insert({
          id: 2,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 161,
          periodical_id: null,
          user_book_reviews_id: 172,
          is_completed: false,
          completed_readings: {},
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_technical_reading_lists').insert({
          id: 3,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 162,
          periodical_id: null,
          user_book_reviews_id: 173,
          is_completed: false,
          completed_readings: {},
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_technical_reading_lists').insert({
          id: 4,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 163,
          periodical_id: null,
          user_book_reviews_id: 174,
          is_completed: false,
          completed_readings: {},
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_technical_reading_lists').insert({
          id: 5,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 164,
          periodical_id: null,
          user_book_reviews_id: 175,
          is_completed: false,
          completed_readings: {},
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_technical_reading_lists').insert({
          id: 6,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 165,
          periodical_id: null,
          user_book_reviews_id: 176,
          is_completed: false,
          completed_readings: {},
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_technical_reading_lists').insert({
          id: 7,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 166,
          periodical_id: null,
          user_book_reviews_id: 177,
          is_completed: false,
          completed_readings: {},
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_technical_reading_lists').insert({
          id: 8,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 167,
          periodical_id: null,
          user_book_reviews_id: 178,
          is_completed: false,
          completed_readings: {},
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_technical_reading_lists').insert({
          id: 9,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 168,
          periodical_id: null,
          user_book_reviews_id: 179,
          is_completed: false,
          completed_readings: {},
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_technical_reading_lists').insert({
          id: 10,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 169,
          periodical_id: null,
          user_book_reviews_id: 180,
          is_completed: false,
          completed_readings: {},
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('user_technical_reading_lists_id_seq', (SELECT MAX(id) FROM user_technical_reading_lists));");
    });
};
