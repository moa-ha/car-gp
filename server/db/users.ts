import db from './connection.ts'
import { User } from '../../models/user.ts'

export async function getUsers(): Promise<User[]> {
  return db('users')
}

export async function getUserById(id: string): Promise<User> {
  return db('users').where({ id }).first()
}

export async function newUser(user: User) {
  await db('users').insert(user)
}

export async function defaultConsumables(id: string) {
  const defaultData = [
    {
      name: 'Engine Oil',
      km: 10000,
      user: id,
    },
    {
      name: 'Brake Oil',
      km: 40000,
      user: id,
    },
    {
      name: 'Mission Oil',
      km: 80000,
      user: id,
    },
    {
      name: 'Distilled Water',
      km: 20000,
      user: id,
    },
    {
      name: 'Battery',
      km: 50000,
      user: id,
    },
    {
      name: 'Tyre',
      km: 40000,
      user: id,
    },
  ]
  await db('consumables').insert(defaultData)
}
