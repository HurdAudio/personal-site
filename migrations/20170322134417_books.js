'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table) {
    table.increments().primary();
    table.string('author').notNullable().defaultTo('Anonymous');
    table.string('title').notNullable().defaultTo('');
    table.string('cover_url').notNullable().defaultTo('');
    table.string('author_url').notNullable().defaultTo('');
    table.string('publisher').notNullable().defaultTo('');
    table.date('publication_date').notNullable().defaultTo('2017-03-14 14:55:16 UTC');
    table.string('edition').notNullable().defaultTo('');
    table.boolean('part_of_series').notNullable().defaultTo(false);
    table.string('name_of_series').defaultTo(null);
    table.decimal('number_in_series').defaultTo(null);
    table.integer('number_of_pages').notNullable().defaultTo(0);
    table.string('author_gender').notNullable().defaultTo('');
    table.string('author_nationality').notNullable().defaultTo('');
    table.text('description', 100000000).notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
