import db from './connection.ts'
import { User } from '../../models/user.ts'

export async function getUsers(): Promise<User[]> {
  return db('users')
}

export async function getUserById(id: string): Promise<User | null> {
  return db('users').where({ id }).first() || null
}

export async function newUser(user: User) {
  await db('users').insert(user)

  const defaultMaintenance = [
    {
      user: user.id,
      wof: '',
      wofDue: '',
      rego: '',
      regoDue: '',
    },
  ]

  const defaultConsumable = [
    {
      name: 'Engine Oil',
      replaced: '',
      km: 10000,
      due: '',
      user: user.id,
    },
    {
      name: 'Brake Oil',
      replaced: '',
      km: 40000,
      due: '',
      user: user.id,
    },
    {
      name: 'Mission Oil',
      replaced: '',
      km: 80000,
      due: '',
      user: user.id,
    },
    {
      name: 'Distilled Water',
      replaced: '',
      km: 20000,
      due: '',
      user: user.id,
    },
    {
      name: 'Battery',
      replaced: '',
      km: 50000,
      due: '',
      user: user.id,
    },
    {
      name: 'Tyre',
      replaced: '',
      km: 40000,
      due: '',
      user: user.id,
    },
  ]
  await db('consumables').insert(defaultConsumable)
  await db('maintenance').insert(defaultMaintenance)
}
