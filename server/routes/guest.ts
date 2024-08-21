//for guest page - no function but just to check dates

import { Router } from 'express'
import { getConsumablesForGuest } from '../db/guest'
import * as db from '../db/guest.ts'

const router = Router()

// GET /guest
router.get('/', async (req, res) => {
  try {
    const consumables = await getConsumablesForGuest('default')
    return res.json(consumables)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const consumable = await db.getConsumableByIdForGuest(id)
    return res.json(consumable)
  } catch (err) {
    next(err)
    console.log(err)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
