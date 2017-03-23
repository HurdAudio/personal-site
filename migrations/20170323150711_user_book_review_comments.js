'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_book_review_comments', function(table) {
    table.increments().primary();
    table.integer('user_book_review_id').notNullable().defaultTo(1).references('id').inTable('user_book_reviews').onDelete('CASCADE').index();
    table.string('comment_author_first_name').notNullable().defaultTo('anonymous');
    table.string('comment_author_last_name').defaultTo(null);
    table.string('comment_author_email').notNullable().defaultTo('');
    table.string('comment_title').notNullable().defaultTo('');
    table.text('comment_body', 100000).notNullable().defaultTo('');
    table.string('authorization_status').notNullable().defaultTo('unauthorized');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_book_review_comments');
};
