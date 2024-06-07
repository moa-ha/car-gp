import db from './connection.ts'
import {
  Consumable,
  ConsumableData,
  ConsumableUser,
} from '../../models/consumable.ts'

// const columns = ['id', 'name', 'replaced', 'due', 'km']

export async function getConsumables(): Promise<Consumable[]> {
  return db('consumables')
}

//adding not working with this
// export async function addConsumable(
//   consumable: ConsumableData,
//   user: string,
// ): Promise<Consumable> {
//   const consumableAuthorized: ConsumableUser = {
//     name: consumable.name,
//     replaced: consumable.replaced,
//     due: consumable.due,
//     km: consumable.km,
//     user: user,
//   }

//   return db('consumable').insert(consumableAuthorized)
//   // .returning(columns)
//   // .then((insertedEntries) => insertedEntries[0])
// }

// export async function getConsumables() {
//   const consumables = await db('consumables')
//   return consumables as Consumable[]
// }

export async function getConsumableById(id: number) {
  return await db('consumables').where({ id }).first()
}
// adding is working with this
export async function addConsumable(data: ConsumableData) {
  await db('consumables').insert(data)
}

export async function getConsumablesByUser(id: string): Promise<Consumable[]> {
  const userId = id || 'default'
  return await db('consumables').where('user', userId)
}

export async function deleteConsumable(id: number) {
  await db('consumables').where({ id }).del()
}

export async function editConsumable(id: number, data: ConsumableData) {
  await db('consumables').where({ id }).update(data)
}
