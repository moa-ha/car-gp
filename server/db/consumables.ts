// import db from './connection.ts'
// import { Consumable, ConsumableData } from '../../models/consumable.ts'

// export async function getConsumablesByUser(id: string): Promise<Consumable[]> {
//   return db('consumables').where('user', id)
// }

// export async function getConsumableById(id: number) {
//   return await db('consumables').where({ id }).first()
// }

// export async function addConsumable(data: ConsumableData) {
//   await db('consumables').insert(data)
// }

// export async function deleteConsumable(id: number) {
//   await db('consumables').where({ id }).del()
// }

// export async function editConsumable(id: number, data: ConsumableData) {
//   await db('consumables').where({ id }).update(data)
// }

import { eq } from 'drizzle-orm'
import { db } from '../../src/db/index'
import { consumables } from '../../src/db/schema'
import {
  Consumable,
  ConsumableData,
  ConsumableUser,
} from '../../models/consumable'

export async function getConsumablesByUser(id: string) {
  console.log('using turso db')

  return db.select().from(consumables).where(eq(consumables.user, id))
}

export async function getConsumableById(id: number): Promise<Consumable> {
  const data = (await db
    .select()
    .from(consumables)
    .where(eq(consumables.id, id))) as Array<Consumable>
  return data[0]
}

export async function addConsumable(data: ConsumableUser) {
  await db.insert(consumables).values(data)
}
// export async function addConsumable(id: string, data: ConsumableData) {
//   await db.insert(consumables).values({ ...data, user: id })
// }

export async function deleteConsumable(id: number) {
  await db.delete(consumables).where(eq(consumables.id, id))
}

export async function editConsumable(id: number, data: ConsumableData) {
  await db.update(consumables).set(data).where(eq(consumables.id, id))
}
