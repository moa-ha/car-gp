import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: '.env' })

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './src//migrations',
  dialect: 'sqlite',
  driver: 'turso',
  dbCredentials: {
    url: 'libsql://car-gp-moa-ha.turso.io',
    authToken:
      'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjI5OTc1MjAsImlkIjoiYjFhZTVkM2EtMTEyYi00ODAyLWFkMTYtN2NkMTE4Y2ZlMjFkIn0.2ke2vNHdj3OAf1Y53muJmkf5hZFy56F7EY2ukW4bE7kbhSv0bsijuwvYRj3ZSE-x8ZqcHCI1bI56K1keGySfDg',
  },
})
// export default defineConfig({
//   schema: './src/db/schema.ts',
//   out: './src//migrations',
//   dialect: 'sqlite',
//   driver: 'turso',
//   dbCredentials: {
//     url: process.env.TURSO_CONNECTION_URL!,
//     authToken: process.env.TURSO_AUTH_TOKEN!,
//   },
// })
