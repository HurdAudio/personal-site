'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blog_comments').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('blog_comments').insert({
          id: 1,
          author_first_name: 'Bradley',
          author_last_name: 'Efting',
          author_email: 'befting@gmail.com',
          blog_post: 1,
          authorization_status: 'authorized',
          comment_title: '',
          comment_body: "I couldn't have said it better myself. Though I might have been less blunt about the auando eos.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2016-03-22 14:55:18 UTC')
        }),
        knex('blog_comments').insert({
          id: 2,
          author_first_name: 'Matt',
          author_last_name: "Pestridge",
          author_email: 'mpestridge@gmail.com',
          blog_post: 1,
          authorization_status: 'authorized',
          comment_title: '',
          comment_body: "You guys are nuts. The laboramus is the final word on dry rubs.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2016-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('blog_comments_id_seq', (SELECT MAX(id) FROM blog_comments));");
    });
};
