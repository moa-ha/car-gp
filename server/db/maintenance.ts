import db from './connection'
import { Wof } from '../../models/maintenance'

export async function getMaintenance() {
  return await db('maintenance')
}

// export async function updateDue(data: Maintenance) {
//   await db('maintenance').insert(data)
// }

export async function updateWof(data: Wof) {
  await db('maintenance').insert(data)
}
