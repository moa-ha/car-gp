import express from 'express'
import * as Path from 'node:path'

import consumables from './routes/consumables.ts'
import maintenance from './routes/maintenance.ts'
import user from './routes/user.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/consumables', consumables)
server.use('/api/v1/maintenance', maintenance)
server.use('/api/v1', user)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
