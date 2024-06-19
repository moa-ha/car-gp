import db from './connection'
import { Wof } from '../../models/maintenance'

export async function getMaintenance(id: string) {
  return await db('maintenance').where('user', id).first()
}

export async function updateWof(id: string, data: Wof) {
  await db('maintenance').where('user', id).update(data)
}
