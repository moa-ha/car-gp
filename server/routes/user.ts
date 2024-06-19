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
      res.status(404).json({ message: 'User not found' })
      return null
    }
    res.json(user)
  } catch (error) {
    console.log('error fetching user', error)
    res.status(500).json({ message: "Couldn't get the user" })
  }
})

router.post('/', async (req, res) => {
  const { id, nickname } = req.body
  const userExists = await db.getUserById(id)

  if (!userExists) {
    try {
      await db.newUser({ id, nickname })
      res.status(201).send('User added')
    } catch (error) {
      console.error(error)
      res.status(500).send('Error adding user')
    }
  }
})
export default router
