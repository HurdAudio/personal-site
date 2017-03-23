'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_blog_reading_lists').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user_blog_reading_lists').insert({
          id: 1,
          user_id: 1,
          blog_id: 1,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_blog_reading_lists').insert({
          id: 2,
          user_id: 1,
          blog_id: 2,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_blog_reading_lists').insert({
          id: 3,
          user_id: 1,
          blog_id: 3,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_blog_reading_lists').insert({
          id: 4,
          user_id: 1,
          blog_id: 4,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_blog_reading_lists').insert({
          id: 5,
          user_id: 1,
          blog_id: 5,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_blog_reading_lists').insert({
          id: 6,
          user_id: 1,
          blog_id: 6,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_blog_reading_lists').insert({
          id: 7,
          user_id: 1,
          blog_id: 7,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_blog_reading_lists').insert({
          id: 8,
          user_id: 1,
          blog_id: 8,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_blog_reading_lists').insert({
          id: 9,
          user_id: 1,
          blog_id: 9,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_blog_reading_lists').insert({
          id: 10,
          user_id: 1,
          blog_id: 10,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_blog_reading_lists').insert({
          id: 11,
          user_id: 1,
          blog_id: 11,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_blog_reading_lists').insert({
          id: 12,
          user_id: 1,
          blog_id: 12,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_blog_reading_lists').insert({
          id: 13,
          user_id: 1,
          blog_id: 13,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_blog_reading_lists').insert({
          id: 14,
          user_id: 1,
          blog_id: 14,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_blog_reading_lists').insert({
          id: 15,
          user_id: 1,
          blog_id: 15,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_blog_reading_lists').insert({
          id: 16,
          user_id: 1,
          blog_id: 16,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_blog_reading_lists').insert({
          id: 17,
          user_id: 1,
          blog_id: 17,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_blog_reading_lists').insert({
          id: 18,
          user_id: 1,
          blog_id: 18,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_blog_reading_lists').insert({
          id: 19,
          user_id: 1,
          blog_id: 19,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    });
};
