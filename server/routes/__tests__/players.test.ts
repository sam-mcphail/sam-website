import { describe, it, expect, vi } from 'vitest'
import request from 'supertest'
import server from '../../server'
import { getPlayers } from '../../db/functions/functions'

vi.mock('../../db/functions/functions')

describe('/', () => {
  it('calls getPlayers', async () => {
    vi.mocked(getPlayers).mockResolvedValue([
      {
        id: 1,
        full_name: 'Lionel Messi',
        display_name: 'Messi',
        position: 'forward',
        country: 'Argentina',
        team: 'Inter Miami',
        value: 8.5,
        att_rating: 9,
        def_rating: 2,
        image:
          'https://img.a.transfermarkt.technology/portrait/big/28003-1694590254.jpg?lm=1',
      },
    ])
    try {
      const res = await request(server).get('api/v1/players')
      expect(res.statusCode).toBe(200)
      expect(getPlayers).toHaveBeenCalled()
    } catch (error) {
      console.error(error)
    }
  })
})
