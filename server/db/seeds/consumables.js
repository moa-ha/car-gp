export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('consumables').del()

  // Inserts seed entries
  await knex('consumables').insert([
    {
      id: 1,
      name: 'Engine Oil',
      replaced: '',
      due: '',
      km: 10000,
    },
    {
      id: 2,
      name: 'Brake Oil',
      replaced: '',
      due: '',
      km: 40000,
    },
    {
      id: 3,
      name: 'Mission Oil',
      replaced: '',
      due: '',
      km: 80000,
    },
    {
      id: 4,
      name: 'Distilled Water',
      replaced: '',
      due: '',
      km: 20000,
    },
    {
      id: 5,
      name: 'Battery',
      replaced: '',
      due: '',
      km: 50000,
    },

    {
      id: 6,
      name: 'Tyre',
      replaced: '',
      due: '',
      km: 40000,
    },
  ])
}
