import { eq } from 'drizzle-orm'
import { db } from '../index'
import { maintenance } from '../schema'
import { Rego, Wof } from '../../../models/maintenance'

export async function getMaintenance(id: string) {
  return db.select().from(maintenance).where(eq(maintenance.user, id))
}

export async function updateWof(id: string, data: Wof) {
  await db.update(maintenance).set(data).where(eq(maintenance.user, id))
}

export async function updateRego(id: string, data: Rego) {
  await db.update(maintenance).set(data).where(eq(maintenance.user, id))
}
