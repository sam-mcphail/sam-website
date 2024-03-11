import express from 'express'
import {
  getPlayers,
  getPlayerById,
  addPlayer,
  getPlayersByPosition,
} from '../db/functions/functions'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const players = await getPlayers()
    res.status(200).json(players)
  } catch (error) {
    console.error('Error fetching players: ', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const playerId = Number(req.params.id)
    const player = await getPlayerById(playerId)

    res.status(200).json(player)
  } catch (error) {
    console.error('Error fetching player by id: ', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

// router.get('/position', async (req, res) => {
//   try {
//     const position = req.params.position
//     const players = await getPlayersByPosition(position)
//   } catch (error) {
//     console.error('Error fetching players by position: ', error)
//     res.status(500).json({ error: 'Internal Server Error' })
//   }
// })

router.post('/', async (req, res) => {
  try {
    const player = req.body.player
    const newPlayer = await addPlayer(player)
    if (!newPlayer) {
      res.json({ message: "Couldn't add player" })
    } else {
      res.json({ newPlayer })
    }
  } catch (error) {
    console.error('Error adding player: ', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router
