'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_blog_reading_lists', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('blog_id').notNullable().defaultTo(1).references('id').inTable('blogs').onDelete('CASCADE').index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_blog_reading_lists');
};
