import { Player } from '../../../client/models/Models'
import connection from '../connections'

export async function getPlayers(): Promise<Player[]> {
  const data = await connection('players').select('*')
  return data
}

export async function getPlayerById(id: number): Promise<Player[]> {
  const data = await connection('players').where('id', id).select('*')
  return data
}

export async function getPlayersByPosition(
  position: string
): Promise<Player[]> {
  const data = await connection('players')
    .where('position', position)
    .select('*')
  return data
}

export async function addPlayer(player: Player): Promise<Player | null> {
  const newPlayer = {
    ...player,
    id: Number(player.id),
    value: Number(player.value),
    att_rating: Number(player.att_rating),
    def_rating: Number(player.def_rating),
  }
  const addedPlayer = await connection('players')
    .insert(newPlayer)
    .returning('*')
  return addedPlayer[0]
}
