import { Router } from 'express'
import { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'

import * as db from '../db/consumables.ts'

const router = Router()

router.get('/', async (req: JwtRequest, res) => {
  const user = req.auth ? req.auth.sub : 'default'

  try {
    const consumables = await db.getConsumablesByUser(String(user))
    res.json(consumables)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const consumable = await db.getConsumableById(id)
    return res.json(consumable)
  } catch (err) {
    next(err)
    console.log(err)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

//adding is working with this
router.post('/', async (req, res, next) => {
  const data = req.body
  try {
    await db.addConsumable(data)
    res.setHeader('Location', req.baseUrl).sendStatus(StatusCodes.CREATED)
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong adding item' })
    next(e)
  }
})

router.delete('/:id', async (req: JwtRequest, res, next) => {
  const id = Number(req.params.id)
  try {
    await db.deleteConsumable(id)
    res
      .setHeader('Location', `${req.baseUrl}/${id}`)
      .sendStatus(StatusCodes.CREATED)
  } catch (err) {
    res.status(500).json({ message: 'It is not deleted. Try again' })
    next(err)
  }
})

router.patch('/:id', async (req, res, next) => {
  const id = Number(req.params.id)
  const data = req.body
  try {
    await db.editConsumable(id, data)
    res
      .setHeader('Location', `${req.baseUrl}/${id}`)
      .sendStatus(StatusCodes.CREATED)
  } catch (e) {
    res.status(500).json({ message: 'Failed to update' })
    next(e)
  }
})

export default router
