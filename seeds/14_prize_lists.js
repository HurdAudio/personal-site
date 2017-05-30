'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('prize_lists').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('prize_lists').insert({
          id: 1,
          prize_1: 'desmond_elliott_prizes',
          prize_2: 'anthony_awards', //desmond_elliott_prizes, 
          prize_3: 'arthur_c_clark_awards',
          prize_4: 'barry_awards',
          prize_5: 'bram_stoker_awards',
          prize_6: 'british_science_fiction_association_awards',
          prize_7: 'chicago_tribune_heartland_prizes',
          prize_8: 'compton_crook_awards',
          prize_9: 'costa_book_awards',
          prize_10: 'crime_writers_association_new_blood_daggers',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('prize_lists_id_seq', (SELECT MAX(id) FROM prize_lists));");
    });
};
