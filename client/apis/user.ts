import request from 'superagent'
import { User } from '../../models/user'

const rootUrl = '/api/v1/user'

export async function getUsers(): Promise<User[]> {
  const res = await request.get(rootUrl)
  return res.body as User[]
}

// user was truthy even though it caught error, so returned null when error to run useNewUser hook
export async function getUserById(id: string): Promise<User | null> {
  try {
    const res = await request.get(`${rootUrl}/${id}`)
    return res.body as User
  } catch (error) {
    console.error('Unexpected error:', error)
    return null // Return null if user not found
  }
}

export async function newUser(user: User) {
  const defaultMaintenance = [
    {
      user: user.id,
      wof: '',
      wofDue: '',
      rego: '',
      regoDue: '',
      averageKm: 15000,
    },
  ]
  const defaultConsumables = [
    {
      name: 'Engine Oil',
      replaced: '',
      km: 10000,
      due: '',
      user: user.id,
    },
    {
      name: 'Brake Oil',
      replaced: '',
      km: 40000,
      due: '',
      user: user.id,
    },
    {
      name: 'Mission Oil',
      replaced: '',
      km: 80000,
      due: '',
      user: user.id,
    },
    {
      name: 'Distilled Water',
      replaced: '',
      km: 20000,
      due: '',
      user: user.id,
    },
    {
      name: 'Battery',
      replaced: '',
      km: 50000,
      due: '',
      user: user.id,
    },
    {
      name: 'Tyre',
      replaced: '',
      km: 40000,
      due: '',
      user: user.id,
    },
  ]

  await request.post(rootUrl).send(user)
  await request.post('/api/v1/maintenance').send(defaultMaintenance)
  await request.post('/api/v1/consumables').send(defaultConsumables)
}
