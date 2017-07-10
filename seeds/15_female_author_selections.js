'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('female_author_selections').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('female_author_selections').insert({
          id: 1,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 1,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('female_author_selections').insert({
          id: 2,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 27,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('female_author_selections').insert({
          id: 3,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 57,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('female_author_selections').insert({
          id: 4,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 70,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('female_author_selections').insert({
          id: 5,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 71,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('female_author_selections').insert({
          id: 6,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 192,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('female_author_selections_id_seq', (SELECT MAX(id) FROM female_author_selections));");
    });
};
