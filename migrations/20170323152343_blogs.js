'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogs', function(table) {
    table.increments().primary();
    table.string('blog_name').notNullable().defaultTo('');
    table.string('blog_author').notNullable().defaultTo('');
    table.string('blog_url').notNullable().defaultTo('');
    table.string('blog_img_url').notNullable().defaultTo('');
    table.string('blog_rss_url').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blogs');
};
