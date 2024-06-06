import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'

import * as db from '../db/consumables.ts'
import { ConsumableData } from '../../models/consumable.ts'

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

router.post('/', checkJwt, async (req: JwtRequest, res) => {
  const { consumable } = req.body as { consumable: ConsumableData }
  const auth0Id = req.auth ? req.auth.sub : undefined

  if (!consumable) {
    console.log(consumable)

    console.error('No consumable item')
    return res.status(400).send('Bad request')
  }

  if (!auth0Id) {
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }

  try {
    const newConsumable = await db.addConsumable(consumable, auth0Id)
    res.status(201).json({ consumable: newConsumable })
  } catch (error) {
    console.error(error)
    res.status(500).send("Couldn't add consumable item")
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

// router.post('/', checkJwt, async (req, res, next) => {
//   const data = req.body
//   try {
//     await db.addConsumable(data)
//     res.setHeader('Location', req.baseUrl).sendStatus(StatusCodes.CREATED)
//   } catch (e) {
//     res.status(500).json({ message: 'Something went wrong adding item' })
//     next(e)
//   }
// })

router.delete('/:id', checkJwt, async (req: JwtRequest, res, next) => {
  // LEAVE IT FOR REFERENCE FOR FUTURE
  // if (!req.auth?.sub) {
  //   res.sendStatus(StatusCodes.UNAUTHORIZED)
  //   return
  // }

  // const auth0Id = req.auth ? req.auth.sub : undefined
  // if (!id) {
  //   console.error('Invalid id')
  //   return res.status(400).send('Bad request')
  // }

  // if (!auth0Id) {
  //   console.error('No auth0Id')
  //   return res.status(401).send('Unauthorized')
  // }
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

router.patch('/:id', checkJwt, async (req, res, next) => {
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
