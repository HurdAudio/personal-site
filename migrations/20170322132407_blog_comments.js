'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blog_comments', function(table) {
    table.increments().primary();
    table.string('author_first_name').notNullable().defaultTo('anonymous');
    table.string('author_last_name').notNullable().defaultTo('');
    table.string('author_email').notNullable().defaultTo('');
    table.integer('blog_post').notNullable().defaultTo(1).references('id').inTable('user_blogs').onDelete('CASCADE').index();
    table.string('authorization_status').notNullable().defaultTo('unauthorized');
    table.string('comment_title').notNullable().defaultTo('');
    table.text('comment_body', 100000).notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blog_comments');
};
