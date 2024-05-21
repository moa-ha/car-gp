import db from './connection.ts'
import { Consumable, ConsumableData } from '../../models/consumable.ts'

export async function getConsumables() {
  const Consumables = await db('Consumables').select()
  return Consumables as Consumable[]
}

export async function getConsumableById(id: number | string) {
  const Consumable = await db('Consumables').select().first().where({ id })
  return Consumable as Consumable
}

export async function addConsumable(data: ConsumableData) {
  const [id] = await db('Consumables').insert(data)
  return id
}
