/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('players', function (table) {
    table.increments('id').primary
    table.string('full_name')
    table.string('display_name')
    table.string('position')
    table.string('country')
    table.string('team')
    table.integer('value')
    table.integer('att_rating')
    table.integer('def_rating')
    table.string('image')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable('players')
}
