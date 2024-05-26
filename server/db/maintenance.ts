import db from './connection'
import { Maintenance } from '../../models/maintenance'

export async function getMaintenance() {
  return await db('maintenance')
}
