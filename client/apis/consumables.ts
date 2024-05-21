// figure out why it render all the functions twice - can see when console.log

import request from 'superagent'
import { Consumable, ConsumableData } from '../../models/consumable'

const rootUrl = '/api/v1/consumables'

export function getConsumables(): Promise<Consumable[]> {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}

export function getConsumableById(id: number) {
  const url = rootUrl + `/${id}`
  return request.get(url).then((res) => {
    return res.body
  })
}

export async function addConsumable(Consumable: ConsumableData) {
  return await request.patch(rootUrl).send(Consumable)
}

export async function deleteConsumable(id: number) {
  const url = rootUrl + `/${id}`
  return await request.delete(url)
}

//needs function review

export async function editMileage(Consumable: Consumable) {
  const id = Consumable.id
  const url = rootUrl + `/${id}`
  return await request.patch(url).send(Consumable)
}
