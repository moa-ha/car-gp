import { eq } from 'drizzle-orm'
import { db } from '../../src/db/index'
import { consumables } from '../../src/db/schema'
import {
  Consumable,
  ConsumableData,
  ConsumableUser,
} from '../../models/consumable'

export async function getConsumablesByUser(id: string) {
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

export async function deleteConsumable(id: number) {
  await db.delete(consumables).where(eq(consumables.id, id))
}

export async function editConsumable(id: number, data: ConsumableData) {
  await db.update(consumables).set(data).where(eq(consumables.id, id))
}
