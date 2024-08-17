import { config } from 'dotenv'
import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'

config({ path: '.env' }) // or .env.local

// Initialise the Turso client
const tursoDatabaseUrl = process.env.TURSO_CONNECTION_URL as string
const tursoAuthToken = process.env.TURSO_AUTH_TOKEN as string

const client = createClient({
  url: tursoDatabaseUrl,
  authToken: tursoAuthToken,
})

export const db = drizzle(client)
