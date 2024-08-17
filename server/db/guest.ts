// import db from './connection.ts'
// import { Consumable } from '../../models/consumable.ts'

// export async function getConsumablesForGuest(
//   id: string,
// ): Promise<Consumable[]> {
//   return db('consumables').where('user', id)
// }

import { eq } from 'drizzle-orm'
import { db } from '../../src/db/index'
import { consumables } from '../../src/db/schema.ts'

export async function getConsumablesForGuest(id: string) {
  return db.select().from(consumables).where(eq(consumables.user, id))
}
