import { eq } from 'drizzle-orm'
import { db } from '../../src/db/index'
import { consumables } from '../../src/db/schema.ts'
import { Consumable } from '../../models/consumable.ts'

export async function getConsumablesForGuest(id: string) {
  return db.select().from(consumables).where(eq(consumables.user, id))
}

export async function getConsumableByIdForGuest(
  id: number,
): Promise<Consumable> {
  const data = (await db
    .select()
    .from(consumables)
    .where(eq(consumables.id, id))) as Array<Consumable>
  return data[0]
}
