export async function seed(knex) {
  // Inserts seed entries
  await knex('users').insert([
    {
      id: 'default',
      nickname: 'default',
    },
  ])
}
