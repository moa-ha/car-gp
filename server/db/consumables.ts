import db from './connection.ts'
import connection from './connection.ts'
import {
  Consumable,
  ConsumableData,
  ConsumableUser,
} from '../../models/consumable.ts'

const columns = ['id', 'name', 'replaced', 'due', 'km']

export async function getConsumables(): Promise<Consumable[]> {
  return db('consumables')
    .select(...columns)
    .orderBy('id')
}

export async function addConsumable(
  consumable: ConsumableData,
  user: string,
): Promise<Consumable> {
  const consumableAuthorized: ConsumableUser = {
    name: consumable.name,
    replaced: consumable.replaced,
    due: consumable.due,
    km: consumable.km,
    user: user,
  }

  return db('consumable').insert(consumableAuthorized)
  // .returning(columns)
  // .then((insertedEntries) => insertedEntries[0])
}

// export async function getConsumables() {
//   const consumables = await db('consumables')
//   return consumables as Consumable[]
// }

export async function getConsumableById(id: number) {
  return await connection('consumables').where({ id }).first()
}

// export async function addConsumable(data: ConsumableData) {
//   await connection('consumables').insert(data)
// }

export async function deleteConsumable(id: number) {
  await connection('consumables').where({ id }).del()
}

export async function editConsumable(id: number, data: ConsumableData) {
  await connection('consumables').where({ id }).update(data)
}
