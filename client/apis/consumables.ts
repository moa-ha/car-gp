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

// export async function deleteConsumable(id: number) {
//   const url = `${rootUrl}/${id}`
//   return await request.delete(url)
// }

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
interface Token {
  id: number
  token: string
}
export async function deleteConsumable({ id, token }: Token): Promise<void> {
  const url = `${rootUrl}/${id}`
  // await sleep(1000)

  return await request
    .delete(url)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)
  // .catch(logError)
}

//needs function review

export async function edit(Consumable: Consumable) {
  const id = Consumable.id
  const url = `${rootUrl}/${id}`
  return await request.patch(url).send(Consumable)
}
