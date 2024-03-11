import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getPlayerById } from '../../api/playerApi'
import { Player } from '../../models/Models'

export default function VersusCard(props) {
  const id = props.playerId
  const {
    data: player,
    error,
    isLoading,
  } = useQuery<Player[]>({
    queryKey: ['player', id],
    queryFn: () => getPlayerById(id as unknown as number),
  })

  if (error) {
    return <p>There was an error fetching the player</p>
  }

  if (isLoading) {
    return <p>The player is loading</p>
  }

  if (player && id > 0) {
    return (
      <div className="versus-card">
        <h5 className="versus-card-text">{player[0].display_name}</h5>
        <img className="versus-card-image" src={player[0].image}></img>
      </div>
    )
  }

  if (player && id == 0) {
    return (
      <div className="versus-card">
        <h5 className="versus-card-text">Pick a player</h5>
        <img
          className="versus-card-image"
          src="https://img.a.transfermarkt.technology/portrait/header/default.jpg?lm=1"
        ></img>
      </div>
    )
  }
}
