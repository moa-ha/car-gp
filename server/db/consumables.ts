import db from './connection.ts'
import { Consumable, ConsumableData } from '../../models/consumable.ts'

export async function getConsumables() {
  const consumables = await db('consumables')
  return consumables as Consumable[]
}

export async function getConsumableById(id: number | string) {
  const consumables = await db('consumables').first().where({ id })
  return consumables as Consumable
}

export async function addConsumable(data: ConsumableData) {
  const [id] = await db('consumables').insert(data)
  return id
}
