export async function seed(knex) {
  // Inserts seed entries
  await knex('consumables').insert([
    {
      id: 1,
      name: 'Engine Oil',
      replaced: '',
      due: '',
      km: 10000,
      user: 'default',
    },
    {
      id: 2,
      name: 'Brake Oil',
      replaced: '',
      due: '',
      km: 40000,
      user: 'default',
    },
    {
      id: 3,
      name: 'Mission Oil',
      replaced: '',
      due: '',
      km: 80000,
      user: 'default',
    },
    {
      id: 4,
      name: 'Distilled Water',
      replaced: '',
      due: '',
      km: 20000,
      user: 'default',
    },
    {
      id: 5,
      name: 'Battery',
      replaced: '',
      due: '',
      km: 50000,
      user: 'default',
    },

    {
      id: 6,
      name: 'Tyre',
      replaced: '',
      due: '',
      km: 40000,
      user: 'default',
    },
  ])
}
