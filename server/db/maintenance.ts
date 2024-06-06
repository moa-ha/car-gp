import db from './connection'
import { Maintenance } from '../../models/maintenance'

export async function getMaintenance() {
  return await db('maintenance')
}

// export async function updateDue(data: Maintenance) {
//   await db('maintenance').insert(data)
// }

interface Wof {
  Wof: string
  WofDue: string
}
export async function updateWofDue(data: Wof) {
  await db('maintenance').insert(data)
}
