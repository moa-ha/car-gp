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

router.post('/', async (req, res) => {
  const { id, nickname } = req.body

  try {
    await db.newUser({ id, nickname })
    await db.defaultConsumables(id)
    res.status(201).send('User added')
  } catch (error) {
    console.error(error)
    res.status(500).send('Error adding user')
  }
})
export default router
