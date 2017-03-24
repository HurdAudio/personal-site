'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('visitor_feedbacks', function(table) {
    table.increments().primary();
    table.string('visitor_name').notNullable().defaultTo('');
    table.string('visitor_email').notNullable().defaultTo('');
    table.text('visitor_message', 1000000).notNullable().defaultTo('');
    table.boolean('responded').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('visitor_feedbacks');
};
