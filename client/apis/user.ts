import request from 'superagent'
import { User } from '../../models/user'

const rootUrl = '/api/v1'

export async function getUsers(): Promise<User[]> {
  const res = await request.get(rootUrl)
  return res.body as User[]
}

export async function addUser(user: User) {
  await request.post(`${rootUrl}/sign-up`).send(user)
}
