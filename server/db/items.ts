import db from './connection.ts'
import { Item, ItemData } from '../../models/items.ts'

export async function getItems() {
  const items = await db('items').select()
  return items as Item[]
}

export async function getItemById(id: number | string) {
  const item = await db('items').select().first().where({ id })
  return item as Item
}

export async function addItem(data: ItemData) {
  const [id] = await db('items').insert(data)
  return id
}
