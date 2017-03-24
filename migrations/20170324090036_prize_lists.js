'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('prize_lists', function(table) {
    table.increments().primary();
    table.string('prize_1').notNullable().defaultTo('');
    table.string('prize_2').notNullable().defaultTo('');
    table.string('prize_3').notNullable().defaultTo('');
    table.string('prize_4').notNullable().defaultTo('');
    table.string('prize_5').notNullable().defaultTo('');
    table.string('prize_6').notNullable().defaultTo('');
    table.string('prize_7').notNullable().defaultTo('');
    table.string('prize_8').notNullable().defaultTo('');
    table.string('prize_9').notNullable().defaultTo('');
    table.string('prize_10').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('prize_lists');
};
