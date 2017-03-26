'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('kiriyama_prizes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('kiriyama_prizes').insert({
          id: 1,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 125,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('kiriyama_prizes_id_seq', (SELECT MAX(id) FROM kiriyama_prizes));");
    });
};
