import { eq } from 'drizzle-orm'
import { db } from '../../src/db/index'
import { maintenance } from '../../src/db/schema'
import { Km, Maintenance, Rego, Wof } from '../../models/maintenance'

export async function getMaintenance(id: string): Promise<Maintenance> {
  const result = (await db
    .select()
    .from(maintenance)
    .where(eq(maintenance.user, id))) as Array<Maintenance>
  return result[0]
}

export async function updateWof(id: string, data: Wof) {
  await db.update(maintenance).set(data).where(eq(maintenance.user, id))
}

export async function updateRego(id: string, data: Rego) {
  await db.update(maintenance).set(data).where(eq(maintenance.user, id))
}

export async function updateKm(id: string, data: Km) {
  await db.update(maintenance).set(data).where(eq(maintenance.user, id))
}
