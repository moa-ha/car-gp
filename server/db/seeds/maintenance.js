export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('maintenance').del()

  // Inserts seed entries
  await knex('maintenance').insert([
    {
      wof: '03/03/2024',
      wofDue: '03/03/2025',
      rego: '04/04/2024',
      regoDue: '04/10/2024',
      user: '',
    },
  ])
}
