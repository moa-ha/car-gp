import db from './connection.ts'
import { Consumable } from '../../models/consumable.ts'

export async function getConsumablesForGuest(
  id: string,
): Promise<Consumable[]> {
  return db('consumables').where('user', id)
}
