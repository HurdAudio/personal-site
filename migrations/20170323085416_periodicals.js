'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('periodicals', function(table) {
    table.increments().primary();
    table.string('name').notNullable().defaultTo('');
    table.string('issue').notNullable().defaultTo('');
    table.string('editor').notNullable().defaultTo('');
    table.string('editor_url').notNullable().defaultTo('');
    table.string('edition').notNullable().defaultTo('');
    table.date('publication_date').notNullable().defaultTo('2017-03-14 14:55:16 UTC');
    table.integer('pages').notNullable().defaultTo(1);
    table.string('img_url').notNullable().defaultTo('');
    table.text('description', 1000000).notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('periodicals');
};
