import { Router } from 'express'

import * as db from '../db/maintenance.ts'
import { StatusCodes } from 'http-status-codes'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const maintenance = await db.getMaintenance()
    res.json(maintenance)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Couldn't get maintenance data" })
  }
})

router.patch('/', async (req, res) => {
  const data = req.body
  try {
    await db.updateWof(data)
    res.setHeader('Location', req.baseUrl).sendStatus(StatusCodes.CREATED)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: "Couldn't update wof due dates" })
  }
})

export default router
