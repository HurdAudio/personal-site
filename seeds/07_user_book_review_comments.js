'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_book_review_comments').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user_book_review_comments').insert({
          id: 1,
          user_book_review_id: 16,
          comment_author_first_name: 'Anna',
          comment_author_last_name: null,
          comment_author_email: '',
          comment_title: '',
          comment_body: "Will check it out -- reminded me to revisit a favorite sci fi book from the 90's - The Child Garden by Geoff Ryman. No idea if it stands up to time, but was a favorite when I read it the first time.",
          authorization_status: 'authorized',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('user_book_review_comments_id_seq', (SELECT MAX(id) FROM user_book_review_comments));");
    });
};
