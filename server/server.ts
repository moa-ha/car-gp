import express from 'express'
import * as Path from 'node:path'

import consumables from './routes/consumables.ts'
import maintenance from './routes/maintenance.ts'
import user from './routes/user.ts'
import checkJwt from './auth0.ts'
import guest from './routes/guest.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/consumables', checkJwt, consumables)
server.use('/api/v1/maintenance', checkJwt, maintenance)
server.use('/api/v1/user', user)

server.use('/api/v1/guest', guest)
// server.use('/guest', guest)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
