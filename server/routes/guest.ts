//for guest page - no function but just to check dates

import { Router } from 'express'
import { getConsumablesForGuest } from '../db/guest'
const router = Router()

router.get('/', async (req, res) => {
  try {
    const consumables = await getConsumablesForGuest('default')
    res.json(consumables)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
