'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('visitor_feedbacks').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('visitor_feedbacks').insert({
          id: 1,
          visitor_name: 'Bryce Harper',
          visitor_email: 'bharper@nationals.com',
          visitor_message: "Cool site, man. MVP all the way.",
          responded: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('visitor_feedbacks_id_seq', (SELECT MAX(id) FROM visitor_feedbacks));");
    });
};
