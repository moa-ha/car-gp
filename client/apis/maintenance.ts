import request from 'superagent'
import { MaintenanceUser } from '../../models/maintenance'

const rootUrl = '/api/v1/maintenance'

export async function getMaintenance() {
  const res = await request.get(rootUrl)
  return res.body as MaintenanceUser
}
