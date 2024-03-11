import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import { getPlayers } from '../functions/functions'

import connection from '../connections'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

describe('getPlayers', () => {
  it('returns all players', async () => {
    const allPlayers = await getPlayers()
    expect(allPlayers).toHaveLength(3)
  })
})

afterAll(() => {
  connection.destroy()
})
