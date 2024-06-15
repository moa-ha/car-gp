import { Router } from 'express'
import * as db from '../db/users.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const user = await db.getUsers()
    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Couldn't get user data" })
  }
})

router.get('/:id', async (req, res) => {
  const id = String(req.params.id)
  try {
    const user = await db.getUserById(id)

    if (!user) {
      console.log('no user')
      res.status(404).json({ message: 'User not found' })
      return
    }

    console.log('got the user')
    res.json(user)
  } catch (error) {
    console.log('error fetching user', error)
    res.status(500).json({ message: "Couldn't get the user" })
  }
})

router.post('/', async (req, res) => {
  const { id, nickname } = req.body
  console.log('trying to add user')

  const userExists = await db.getUserById(id)
  if (!userExists) {
    try {
      console.log('added user')

      await db.newUser({ id, nickname })
      res.status(201).send('User added')
    } catch (error) {
      console.error(error)
      console.log('something wrong with adding user')

      res.status(500).send('Error adding user')
    }
  } else {
    console.log('user exists: ' + userExists)
  }
})
export default router
