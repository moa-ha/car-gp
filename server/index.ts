import server from './server.ts'

const PORT = process.env.PORT || 3000

server.listen(Number(PORT), '0.0.0.0', () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', PORT)
})
