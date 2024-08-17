import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: '.env' })

const tursoDatabaseUrl = process.env.TURSO_CONNECTION_URL as string
const tursoAuthToken = process.env.TURSO_AUTH_TOKEN as string

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './src//migrations',
  dialect: 'sqlite',
  driver: 'turso',
  dbCredentials: {
    url: tursoDatabaseUrl,
    authToken: tursoAuthToken,
  },
})
