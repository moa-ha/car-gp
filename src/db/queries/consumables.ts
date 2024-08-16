import { eq } from 'drizzle-orm'
import { db } from '..'
import { consumables } from '../schema'
import { ConsumableData } from '../../../models/consumable'

export async function getConsumablesByUser(id: string) {
  console.log('using turso db')

  return db.select().from(consumables).where(eq(consumables.user, id))
}

export async function getConsumableById(id: number) {
  return db.select().from(consumables).where(eq(consumables.id, id))
}

export async function addConsumable(id: string, data: ConsumableData) {
  await db.insert(consumables).values({ ...data, user: id })
}

export async function deleteConsumable(id: number) {
  await db.delete(consumables).where(eq(consumables.id, id))
}

export async function editConsumable(id: number, data: ConsumableData) {
  await db.update(consumables).set(data).where(eq(consumables.id, id))
}
