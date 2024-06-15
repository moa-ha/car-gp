import request from 'superagent'
import { MaintenanceUser, Wof } from '../../models/maintenance'

const rootUrl = '/api/v1/maintenance'

export async function getMaintenance() {
  const res = await request.get(rootUrl)
  return res.body as MaintenanceUser
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
