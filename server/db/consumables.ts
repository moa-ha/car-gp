import db from './connection.ts'
import { Consumable, ConsumableData } from '../../models/consumable.ts'

export async function getConsumablesByUser(id: string): Promise<Consumable[]> {
  return db('consumables').where('user', id)
}

export async function getConsumableById(id: number) {
  return await db('consumables').where({ id }).first()
}
// adding is working with this
export async function addConsumable(data: ConsumableData) {
  await db('consumables').insert(data)
}

export async function deleteConsumable(id: number) {
  await db('consumables').where({ id }).del()
}

export async function editConsumable(id: number, data: ConsumableData) {
  await db('consumables').where({ id }).update(data)
}
