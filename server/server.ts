import * as Path from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'
import playerRoutes from './routes/players'
// import wordRoutes from './routes/words'

const server = express()

server.use(express.json())
server.use(cors('*' as CorsOptions))
// Define your API routes
server.use('/api/v1/players', playerRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
