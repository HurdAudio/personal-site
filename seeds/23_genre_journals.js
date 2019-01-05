'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('genre_journals').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('genre_journals').insert({
          id: 1,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 2,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('genre_journals').insert({
          id: 2,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 4,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('genre_journals').insert({
          id: 3,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 6,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-06-11T16:44:30.000Z')
        }),
        knex('genre_journals').insert({
          id: 4,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 8,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('genre_journals').insert({
          id: 5,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 14,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('genre_journals').insert({
          id: 6,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 17,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('genre_journals').insert({
          id: 7,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 20,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('genre_journals').insert({
          id: 8,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 22,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('genre_journals').insert({
          id: 9,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 26,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('genre_journals').insert({
          id: 10,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 28,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('genre_journals_id_seq', (SELECT MAX(id) FROM genre_journals));");
    });
};
