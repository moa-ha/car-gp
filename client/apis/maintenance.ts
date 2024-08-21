import request from 'superagent'
import { Maintenance, Rego, Wof, Km } from '../../models/maintenance'

const rootUrl = '/api/v1/maintenance'

export async function getMaintenance(token: string): Promise<Maintenance> {
  try {
    const res = await request
      .get(rootUrl)
      .set('Authorization', `Bearer ${token}`)

    return res.body
  } catch (error) {
    throw new Error(`Failed to fetch consumables: ${error}`)
  }
}

interface UpdateWof {
  wof: Wof
  token: string
}
export async function updateWof({ wof, token }: UpdateWof): Promise<void> {
  return await request
    .patch(rootUrl)
    .send(wof)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)
}

interface UpdateRego {
  rego: Rego
  token: string
}
export async function updateRego({ rego, token }: UpdateRego): Promise<void> {
  return await request
    .patch(rootUrl)
    .send(rego)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)
}

interface UpdateKm {
  averageKm: Km
  token: string
}
export async function updateKm({ averageKm, token }: UpdateKm): Promise<void> {
  return await request
    .patch(rootUrl)
    .send(averageKm)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)
}
