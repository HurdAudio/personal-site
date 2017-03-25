'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('occult_readings').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('occult_readings').insert({
          id: 1,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 36,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('occult_readings').insert({
          id: 2,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 103,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('occult_readings').insert({
          id: 3,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 104,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('occult_readings_id_seq', (SELECT MAX(id) FROM occult_readings));");
    });
};
