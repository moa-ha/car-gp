export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('maintenance').del()

  // Inserts seed entries
  await knex('maintenance').insert([
    {
      wof: '03/03/2024',
      rego: '04/04/2024',
    },
  ])
}
