// figure out why it render all the functions twice - can see when console.log

import request from 'superagent'
import { Consumable, ConsumableData } from '../../models/consumable'

const rootUrl = '/api/v1/consumables'

export async function getConsumables(token: string): Promise<Consumable[]> {
  try {
    const res = await request
      .get(rootUrl)
      .set('Authorization', `Bearer ${token}`)

    return res.body as Consumable[]
  } catch (error) {
    throw new Error(`Failed to fetch consumables: ${error}`)
  }
}

export async function getConsumableById(token: string, id: number) {
  try {
    const res = await request
      .get(`${rootUrl}/${id}`)
      .set('Authorization', `Bearer ${token}`)
    return res.body as Consumable
  } catch (error) {
    throw new Error(`Failed to fetch consumables: ${error}`)
  }
}

interface AddConsumable {
  consumable: ConsumableData
  token: string
}
export async function addConsumable({
  consumable,
  token,
}: AddConsumable): Promise<void> {
  return await request
    .post(rootUrl)
    .send(consumable)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)
}

interface DeleteConsumable {
  id: number
  token: string
}
export async function deleteConsumable({
  id,
  token,
}: DeleteConsumable): Promise<void> {
  const url = `${rootUrl}/${id}`

  return await request
    .delete(url)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)
  // .catch(logError)
}

interface EditConsumable {
  data: Consumable
  token: string
}
export async function editConsumable({
  data,
  token,
}: EditConsumable): Promise<void> {
  const id = data.id
  const url = `${rootUrl}/${id}`
  return await request
    .patch(url)
    .send(data)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)
}

//L EAVE IT FOR FUTURE REFERENCE
// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// function logError(err: Error) {
//   console.log(err)
//   if (err.message === 'Username Taken') {
//     throw new Error('Username already taken - please choose another')
//   } else if (err.message === 'Forbidden') {
//     throw new Error(
//       'Only the user who added the fruit may update and delete it',
//     )
//   } else {
//     console.error('Error consuming the API (in client/api.js):', err.message)
//     throw err
//   }
// }

//needs function review
