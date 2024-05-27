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
    const id = Number(req.params.id)
    const consumable = await db.getConsumableById(id)
    return res.json(consumable)
  } catch (err) {
    next(err)
    console.log(err)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

//needs function review
// router.post('/', checkJwt, async (req: JwtRequest, res, next) => {
//   if (!req.auth?.sub) {
//     res.sendStatus(StatusCodes.UNAUTHORIZED)
//     return
//   }

//   try {
//     const { name, replaced, due, km } = req.body
//     const id = await db.addConsumable({ name, replaced, due, km })
//     res
//       .setHeader('Location', `${req.baseUrl}/${id}`)
//       .sendStatus(StatusCodes.CREATED)
//   } catch (err) {
//     next(err)
//   }
// })

router.post('/', async (req, res) => {
  const data = req.body
  try {
    await db.addConsumable(data)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'Something went wrong adding item' })
  }
})

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
export default router
