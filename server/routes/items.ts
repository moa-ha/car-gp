import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'

import * as db from '../db/items.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const items = await db.getItems()

    res.json({ items: items.map((item) => item.name) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const item = await db.getItemById(req.params.id)
    res.json(item)
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
    const id = await db.addItem({ name, replaced, due, km })
    res
      .setHeader('Location', `${req.baseUrl}/${id}`)
      .sendStatus(StatusCodes.CREATED)
  } catch (err) {
    next(err)
  }
})

export default router
