// for guest page

import request from 'superagent'
import { Consumable } from '../../models/consumable'

const rootUrl = '/api/v1/guest'
export async function guestConsumables(): Promise<Consumable[]> {
  try {
    const res = await request.get(rootUrl)
    return res.body as Consumable[]
  } catch (error) {
    throw new Error(`Failed to fetch consumables: ${error}`)
  }
}

export async function getConsumableByIdForGuest(id: number) {
  try {
    const res = await request.get(`${rootUrl}/${id}`)
    return res.body as Consumable
  } catch (error) {
    throw new Error(`Failed to fetch consumables: ${error}`)
  }
}
