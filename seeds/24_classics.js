'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classics').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('classics').insert({
          id: 1,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 11,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('classics').insert({
          id: 2,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 47,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('classics').insert({
          id: 3,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 88,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('classics').insert({
          id: 4,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 89,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('classics').insert({
          id: 5,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 212,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('classics_id_seq', (SELECT MAX(id) FROM classics));");
    });
};
