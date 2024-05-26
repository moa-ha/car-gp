// figure out why it render all the functions twice - can see when console.log

import request from 'superagent'
import { Consumable, ConsumableData } from '../../models/consumable'

const rootUrl = '/api/v1/consumables'

export async function getConsumables(): Promise<Consumable[]> {
  return await request.get(rootUrl).then((res) => {
    return res.body
  })
}

export async function getConsumableById(id: number) {
  const res = await request.get(`${rootUrl}/${id}`)
  return res.body as Consumable
}

export async function addConsumable(Consumable: ConsumableData) {
  return await request.post(rootUrl).send(Consumable)
}

export async function deleteConsumable(id: number) {
  const url = `${rootUrl}/${id}`
  return await request.delete(url)
}

//needs function review

export async function edit(Consumable: Consumable) {
  const id = Consumable.id
  const url = `${rootUrl}/${id}`
  return await request.patch(url).send(Consumable)
}
