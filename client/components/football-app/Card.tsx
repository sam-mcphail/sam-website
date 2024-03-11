import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getPlayerById } from '../../api/playerApi'
import { Player } from '../../models/Models'
import { GiBroadsword, GiCheckedShield } from 'react-icons/gi'

export default function Card(props) {
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

  if (!player) {
    return (
      <div className="card">
        <h3>Pick player</h3>
      </div>
    )
  }

  if (player && id > 0) {
    return (
      <div className="card">
        <h5 className="card-text">{player[0].display_name}</h5>
        <img className="card-image" src={player[0].image}></img>
        <div className="card-details">
          <p>
            <GiBroadsword />
            {player[0].att_rating}
          </p>
          <p>
            <GiCheckedShield />
            {player[0].def_rating}
          </p>
          <p>${player[0].value}m</p>
        </div>
        <h5 className="card-text">{props.position}</h5>
      </div>
    )
  }

  if (player && id == 0) {
    return (
      <div className="card">
        <h5 className="card-text">Pick a player</h5>
        <img
          className="card-image"
          src="https://img.a.transfermarkt.technology/portrait/header/default.jpg?lm=1"
        ></img>
        <div className="card-details">
          <p>
            <GiBroadsword /> 0
          </p>
          <p>
            <GiCheckedShield /> 0
          </p>
          <p>$0m</p>
        </div>
        <h5 className="card-text">{props.position}</h5>
      </div>
    )
  }
}
