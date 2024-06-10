import request from 'superagent'
import { User } from '../../models/user'

const rootUrl = '/api/v1/user'

export async function getUsers(): Promise<User[]> {
  const res = await request.get(rootUrl)
  return res.body as User[]
}

export async function addUser(user: User) {
  const defaultData = [
    {
      name: 'Engine Oil',
      km: 10000,
      user: user.id,
    },
    {
      name: 'Brake Oil',
      km: 40000,
      user: user.id,
    },
    {
      name: 'Mission Oil',
      km: 80000,
      user: user.id,
    },
    {
      name: 'Distilled Water',
      km: 20000,
      user: user.id,
    },
    {
      name: 'Battery',
      km: 50000,
      user: user.id,
    },
    {
      name: 'Tyre',
      km: 40000,
      user: user.id,
    },
  ]

  await request.post(rootUrl).send(user)
  await request.post('/api/v1/consumables').send(defaultData)
}

export async function getUserById(id: string) {
  const res = await request.get(`${rootUrl}/${id}`)
  return res.body as User[]
}
