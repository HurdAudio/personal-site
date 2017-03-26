'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('edgar_awards', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.string('periodical_or_book').notNullable().defaultTo('book');
    table.integer('books_id').defaultTo(null).references('id').inTable('books').onDelete('CASCADE').index();
    table.integer('periodicals_id').defaultTo(null).references('id').inTable('periodicals').onDelete('CASCADE').index();
    table.boolean('is_completed').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('edgar_awards');
};
