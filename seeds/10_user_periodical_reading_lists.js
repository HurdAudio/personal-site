'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_periodical_reading_lists').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user_periodical_reading_lists').insert({
          id: 1,
          user_id: 1,
          periodical_id: 9,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_periodical_reading_lists').insert({
          id: 2,
          user_id: 1,
          periodical_id: 12,
          is_completed: true,
          created_at: new Date('2017-04-05 14:55:16 UTC'),
          updated_at: new Date('2017-04-05 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('user_periodical_reading_lists_id_seq', (SELECT MAX(id) FROM user_periodical_reading_lists));");
    });
};
