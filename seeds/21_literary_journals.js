'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('literary_journals').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('literary_journals').insert({
          id: 1,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 1,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('literary_journals').insert({
          id: 2,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 3,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('literary_journals').insert({
          id: 3,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 5,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('literary_journals').insert({
          id: 4,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 7,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('literary_journals').insert({
          id: 5,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 10,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('literary_journals').insert({
          id: 6,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id:11,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('literary_journals').insert({
          id: 7,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 15,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('literary_journals').insert({
          id: 8,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 16,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('literary_journals').insert({
          id: 9,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 18,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('literary_journals').insert({
          id: 10,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 19,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('literary_journals').insert({
          id: 11,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 21,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('literary_journals').insert({
          id: 12,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 23,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('literary_journals').insert({
          id: 13,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 24,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('literary_journals').insert({
          id: 14,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 25,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('literary_journals_id_seq', (SELECT MAX(id) FROM literary_journals));");
    });
};
