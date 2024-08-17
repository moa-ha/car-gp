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
import { Maintenance, Rego, Wof } from '../../models/maintenance'

// export async function getMaintenance(id: string) {
//   console.log('getting the maintenance info')

//    db.select().from(maintenance).where(eq(maintenance.user, id))
// }

export async function getMaintenance(id: string): Promise<Maintenance> {
  const result = (await db
    .select()
    .from(maintenance)
    .where(eq(maintenance.user, id))) as Array<Maintenance>
  return result[0]
}

export async function updateWof(id: string, data: Wof) {
  console.log('updating wof on drizzle')

  await db.update(maintenance).set(data).where(eq(maintenance.user, id))
}

export async function updateRego(id: string, data: Rego) {
  await db.update(maintenance).set(data).where(eq(maintenance.user, id))
}
