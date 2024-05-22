import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'

import * as db from '../db/consumables.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const consumables = await db.getConsumables()
    res.json(consumables)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const Consumable = await db.getConsumableById(req.params.id)
    res.json(Consumable)
  } catch (err) {
    next(err)
  }
})

//needs function review
router.post('/', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }

  try {
    const { name, replaced, due, km } = req.body
    const id = await db.addConsumable({ name, replaced, due, km })
    res
      .setHeader('Location', `${req.baseUrl}/${id}`)
      .sendStatus(StatusCodes.CREATED)
  } catch (err) {
    next(err)
  }
})

export default router
