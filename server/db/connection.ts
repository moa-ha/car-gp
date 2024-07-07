import knex from 'knex'
import knexConfig from './knexfile'

type Environment = 'development' | 'production' | 'test'
const env = (process.env.NODE_ENV as Environment) || 'development'

const connection = knex(knexConfig[env])

export default connection
