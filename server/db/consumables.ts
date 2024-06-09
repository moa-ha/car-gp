import db from './connection.ts'
import {
  Consumable,
  ConsumableData,
  ConsumableUser,
} from '../../models/consumable.ts'

// export async function getConsumables(): Promise<Consumable[]> {
//   return db('consumables')
// }

export async function getConsumablesByUser(id: string): Promise<Consumable[]> {
  return db('consumables').where('user', id).orWhere('user', 'default')
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
