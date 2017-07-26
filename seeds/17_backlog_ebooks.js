'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('backlog_ebooks').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('backlog_ebooks').insert({
          id: 1,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 3,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('backlog_ebooks').insert({
          id: 2,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 29,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('backlog_ebooks').insert({
          id: 3,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 59,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('backlog_ebooks').insert({
          id: 4,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 74,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('backlog_ebooks').insert({
          id: 5,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 75,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('backlog_ebooks').insert({
          id: 6,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 194,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('backlog_ebooks_id_seq', (SELECT MAX(id) FROM backlog_ebooks));");
    });
};
