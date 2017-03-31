'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_blogs', function(table) {
    table.increments().primary();
    table.integer('author').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.string('title').notNullable().defaultTo('');
    table.text('body', 1000000).notNullable().defaultTo('');
    table.boolean('published').notNullable().defaultTo(false);
    table.json('tags').defaultTo(null);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_blogs');
};
