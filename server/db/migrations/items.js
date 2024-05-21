/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function up(knex) {
  return knex.schema.createTable('items', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.date('replaced')
    table.date('due')
    table.integer('km')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function down(knex) {
  return knex.schema.dropTable('items')
}
