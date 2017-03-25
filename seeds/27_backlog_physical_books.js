'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('backlog_physical_books').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('backlog_physical_books').insert({
          id: 1,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 16,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('backlog_physical_books').insert({
          id: 2,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 41,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('backlog_physical_books').insert({
          id: 3,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 95,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('backlog_physical_books').insert({
          id: 4,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 96,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('backlog_physical_books_id_seq', (SELECT MAX(id) FROM backlog_physical_books));");
    });
};
