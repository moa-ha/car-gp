/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function up(knex) {
  return knex.schema.createTable('maintenance', (table) => {
    table.increments('id').primary()
    table.date('wof')
    table.date('wofDue')
    table.date('rego')
    table.date('regoDue')
    table.string('user').references('users.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function down(knex) {
  return knex.schema.dropTable('maintenance')
}
