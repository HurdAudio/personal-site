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
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('literary_journals').insert({
          id: 4,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 7,
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
