import { Router } from 'express'

import * as db from '../db/maintenance.ts'
import { StatusCodes } from 'http-status-codes'
import { JwtRequest } from '../auth0.ts'

const router = Router()

router.get('/', async (req: JwtRequest, res) => {
  const id = String(req.auth?.sub)

  try {
    const maintenance = await db.getMaintenance(id)
    res.json(maintenance)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Couldn't get maintenance data" })
  }
})

router.patch('/', async (req: JwtRequest, res) => {
  const id = String(req.auth?.sub)
  const data = req.body

  try {
    await db.updateWof(id, data)
    res.status(StatusCodes.OK).json({ message: 'Wof updated successfully' })
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: "Couldn't update wof due dates" })
  }
})

router.patch('/', async (req: JwtRequest, res) => {
  const id = String(req.auth?.sub)
  const data = req.body
  try {
    await db.updateRego(id, data)
    res.status(StatusCodes.OK).json({ message: 'Rgo updated successfully' })
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'Error in updating rego' })
  }
})

export default router
