// figure out why it render all the functions twice - can see when console.log

import request from 'superagent'
import { Item, ItemData } from '../../models/items'

const rootUrl = '/api/v1/consumables'

export function getItems(): Promise<Item[]> {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}

export function getItemById(id: number) {
  const url = rootUrl + `/${id}`
  return request.get(url).then((res) => {
    return res.body
  })
}

export async function addItem(item: ItemData) {
  return await request.patch(rootUrl).send(item)
}

export async function deleteItem(id: number) {
  const url = rootUrl + `/${id}`
  return await request.delete(url)
}

//needs function review

export async function editMileage(item: Item) {
  const id = item.id
  const url = rootUrl + `/${id}`
  return await request.patch(url).send(item)
}
