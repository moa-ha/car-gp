import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'

import * as db from '../db/maintenance.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const maintenance = await db.getMaintenance()
    res.json(maintenance)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
