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
    },
  ]

  const defaultConsumable = [
    {
      name: 'Engine Oil',
      km: 10000,
      user: user.id,
    },
    {
      name: 'Brake Oil',
      km: 40000,
      user: user.id,
    },
    {
      name: 'Mission Oil',
      km: 80000,
      user: user.id,
    },
    {
      name: 'Distilled Water',
      km: 20000,
      user: user.id,
    },
    {
      name: 'Battery',
      km: 50000,
      user: user.id,
    },
    {
      name: 'Tyre',
      km: 40000,
      user: user.id,
    },
  ]
  await db('consumables').insert(defaultConsumable)
  await db('maintenance').insert(defaultMaintenance)
}
