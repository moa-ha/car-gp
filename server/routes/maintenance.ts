import { Router } from 'express'

import * as db from '../db/maintenance.ts'
import { StatusCodes } from 'http-status-codes'
import { JwtRequest } from '../auth0.ts'
import { Jwt } from 'jsonwebtoken'

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
    res.setHeader('Location', req.baseUrl).sendStatus(StatusCodes.CREATED)
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
    res.setHeader('Location', req.baseUrl).sendStatus(StatusCodes.CREATED)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'Error in updating rego' })
  }
})

export default router
