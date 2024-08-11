import { eq } from 'drizzle-orm'
import { db } from '../index'
import { users, maintenance, consumables } from '../schema'
import { User } from '../../../models/user'

export async function getUsers(): Promise<User[]> {
  return db.select().from(users)
}
export async function getUserById(id: string) {
  await db.select().from(users).where(eq(users.id, id))
}

export async function newUser(user: User) {
  await db.insert(users).values(user)

  const defaultMaintenance = [
    {
      user: user.id,
      wof: '',
      wofDue: '',
      rego: '',
      regoDue: '',
      averageKm: 15000,
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
  await db.insert(consumables).values(defaultConsumable)
  await db.insert(maintenance).values(defaultMaintenance)
}
