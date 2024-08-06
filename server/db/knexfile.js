import * as Path from 'node:path'
import * as URL from 'node:url'
import dotenv from 'dotenv'
import Knex from 'knex'
import Client_SQLite3 from 'knex/lib/dialects/sqlite3'

dotenv.config()

const databasePath = process.env.TURSO_DATABASE_URL || ''

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

// Custom SQLite client
class Client_Libsql extends Client_SQLite3 {
  _driver() {
    return require('@libsql/sqlite3')
  }
}

export default {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: Path.join(__dirname, 'dev.sqlite3'),
    },
    migrations: {
      directory: Path.join(__dirname, 'migrations'),
    },
    seeds: {
      directory: Path.join(__dirname, 'seeds'),
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
    },
  },

  test: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: ':memory:',
    },
    migrations: {
      directory: Path.join(__dirname, 'migrations'),
    },
    seeds: {
      directory: Path.join(__dirname, 'seeds'),
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
    },
  },

  production: {
    client: Client_Libsql, // use Custom client class
    useNullAsDefault: true,
    connection: {
      filename: databasePath,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: Path.join(__dirname, 'migrations'),
    },
    seeds: {
      directory: Path.join(__dirname, 'seeds'),
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
    },
  },
}
