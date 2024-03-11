import request from 'superagent'
import { Player } from '../models/Models'
const playerUrl = '/api/v1/players'

export async function getPlayers(): Promise<Player[]> {
  try {
    const response = await request.get(playerUrl)
    return response.body
  } catch (error) {
    console.error('Error fetching players:', error)
    throw error // Re-throw the error to handle it in the caller function
  }
}

export async function getPlayerById(id: number): Promise<Player[]> {
  try {
    const response = await request.get(`${playerUrl}/${id}`)

    return response.body
  } catch (error) {
    console.error('Error fetching player by id:', error)
    throw error // Re-throw the error to handle it in the caller function
  }
}

export async function getPlayersByPosition(
  position: String
): Promise<Player[]> {
  try {
    const response = await request.get(`${playerUrl}/${position}`)
    return response.body
  } catch (error) {
    console.error('Error fetching players by position:', error)
    throw error
  }
}

export async function addPlayer(player: Player): Promise<Player> {
  try {
    const response = await request.post(playerUrl).send({ player })
    return response.body
  } catch (error) {
    console.log('Error adding player:', error)
    throw error
  }
}
