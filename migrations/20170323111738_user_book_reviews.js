'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_book_reviews', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.string('periodical_or_book').notNullable().defaultTo('book');
    table.integer('books_id').defaultTo(null).references('id').inTable('books').onDelete('CASCADE').index();
    table.integer('periodicals_id').defaultTo(null).references('id').inTable('periodicals').onDelete('CASCADE').index();
    table.integer('rating').defaultTo(null);
    table.string('review_title').notNullable().defaultTo('');
    table.text('review_body', 10000000).notNullable().defaultTo('Not yet reviewed.');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_book_reviews');
};
