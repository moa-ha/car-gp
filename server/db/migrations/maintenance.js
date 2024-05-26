/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function up(knex) {
  return knex.schema.createTable('maintenance', (table) => {
    table.date('wof')
    table.date('wofDue')

    table.date('rego')
    table.date('regoDue')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function down(knex) {
  return knex.schema.dropTable('maintenance')
}
