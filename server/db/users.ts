import db from './connection.ts'
import { User } from '../../models/user.ts'

export async function getUsers(): Promise<User[]> {
  return db('users')
}

export async function addUsers(user: User) {
  await db('users').insert(user)
}

export async function getUserById(id: string): Promise<User | null> {
  const user = await db('users').where({ id }).first()
  return user || null
}
