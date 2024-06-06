/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes existing entries
  await knex('consumables').del()
  await knex('maintenance').del()
}
