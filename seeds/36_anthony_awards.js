'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('anthony_awards').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('anthony_awards').insert({
          id: 1,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 25,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('anthony_awards_id_seq', (SELECT MAX(id) FROM anthony_awards));");
    });
};
