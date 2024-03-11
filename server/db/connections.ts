// import knexFile from './knexfile.js'
// import knex from 'knex'

// type Environment = 'production' | 'test' | 'development'

// const environment = (process.env.NODE_ENV || 'development') as Environment
// const config = knexFile[environment]

// const connection = knex(config)

// export default connection

import knex from 'knex'
import config from './knexfile'

type Environment = 'development' | 'production' | 'test'
const env = (process.env.NODE_ENV || 'development') as Environment
const connection = knex(config[env])

export default connection
