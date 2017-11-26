'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('inserts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('inserts').insert({
          id: 1,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 8,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('inserts').insert({
          id: 2,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 20,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('inserts').insert({
          id: 3,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 33,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('inserts').insert({
          id: 4,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 45,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('inserts').insert({
          id: 5,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 63,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('inserts').insert({
          id: 6,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 83,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('inserts').insert({
          id: 7,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 84,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('inserts').insert({
          id: 8,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 85,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('inserts').insert({
          id: 9,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 92,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('inserts').insert({
          id: 10,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 186,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('inserts_id_seq', (SELECT MAX(id) FROM inserts));");
    });
};
