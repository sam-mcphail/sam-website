import express from 'express'
import request from 'superagent'

const router = express.Router()
const apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

// GET /api/v2/dictionary
router.get('/api/v2/dictionary/:word', async (req, res) => {
  try {
    const word = req.params
    const response = await request.get(`${apiUrl}${word}`)
    res.json(response)
  } catch (error) {
    console.log('Error fetching definition: ', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
