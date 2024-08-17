// import db from './connection'
// import { Rego, Wof } from '../../models/maintenance'

// export async function getMaintenance(id: string) {
//   return await db('maintenance').where('user', id).first()
// }

// export async function updateWof(id: string, data: Wof) {
//   await db('maintenance').where('user', id).update(data)
// }

// export async function updateRego(id: string, data: Rego) {
//   await db('maintenance').where('user', id).update(data)
// }

import { eq } from 'drizzle-orm'
import { db } from '../../src/db/index'
import { maintenance } from '../../src/db/schema'
import { Rego, Wof } from '../../models/maintenance'

export async function getMaintenance(id: string) {
  return db.select().from(maintenance).where(eq(maintenance.user, id))
}

export async function updateWof(id: string, data: Wof) {
  await db.update(maintenance).set(data).where(eq(maintenance.user, id))
}

export async function updateRego(id: string, data: Rego) {
  await db.update(maintenance).set(data).where(eq(maintenance.user, id))
}
