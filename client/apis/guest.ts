// for guest page

import request from 'superagent'
import { Consumable } from '../../models/consumable'

export async function guestConsumables(): Promise<Consumable[]> {
  try {
    const res = await request.get('/api/v1/guest')
    // const res = await request.get('/guest')
    console.log(res.body)

    return res.body as Consumable[]
  } catch (error) {
    throw new Error(`Failed to fetch consumables: ${error}`)
  }
}
