/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function up(knex) {
  return knex.schema.createTable('maintenance', (table) => {
    table.string('user').primary().references('id').inTable('users')
    table.date('wof')
    table.date('wofDue')
    table.date('rego')
    table.date('regoDue')
    table.integer('averageKm')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function down(knex) {
  return knex.schema.dropTable('maintenance')
}
