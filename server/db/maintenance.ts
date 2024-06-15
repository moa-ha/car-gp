import db from './connection'
import { Wof } from '../../models/maintenance'

export async function getMaintenance(id: string) {
  return await db('maintenance').where('user', id)
}

export async function updateWof(data: Wof) {
  await db('maintenance').insert(data)
}
