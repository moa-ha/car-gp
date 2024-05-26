import db from './connection.ts'
import { Consumable, ConsumableData } from '../../models/consumable.ts'

export async function getConsumables() {
  const consumables = await db('consumables')
  return consumables as Consumable[]
}

export async function getConsumableById(id: number) {
  return await db('consumables').where({ id }).first()
}

// export async function addConsumable(data: ConsumableData) {
//   const [id] = await db('consumables').insert(data)
//   return id
// }

export async function addConsumable(data: ConsumableData) {
  await db('consumables').insert(data)
}

export async function deleteConsumable(id: number) {
  await db('consumables').where({ id }).del()
}
