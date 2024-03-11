import React from 'react'
import Card from './Card'
import VersusCard from './VersusCard'

export default function VersusPitch(props) {
  return (
    <div className="versus-pitch">
      <div className="versus-team">
        <div className="versus-goalkeepers">
          <VersusCard playerId={props.players[10]} position={'Goalkeeper'} />
        </div>
        <div className="versus-goalkeepers">
          <VersusCard playerId={props.players[9]} position={'Defender'} />
          <VersusCard playerId={props.players[8]} position={'Defender'} />
          <VersusCard playerId={props.players[7]} position={'Defender'} />
          <VersusCard playerId={props.players[6]} position={'Defender'} />
        </div>
        <div className="versus-goalkeepers">
          <VersusCard playerId={props.players[5]} position={'Midfielder'} />
          <VersusCard playerId={props.players[4]} position={'Midfielder'} />
          <VersusCard playerId={props.players[3]} position={'Midfielder'} />
        </div>
        <div className="versus-goalkeepers">
          <VersusCard playerId={props.players[2]} position={'Forward'} />
          <VersusCard playerId={props.players[1]} position={'Forward'} />
          <VersusCard playerId={props.players[0]} position={'Forward'} />
        </div>
      </div>
      <div className="versus-team">
        <div className="versus-goalkeepers">
          <VersusCard playerId={1} position={'Forward'} />
          <VersusCard playerId={1} position={'Forward'} />
          <VersusCard playerId={1} position={'Forward'} />
        </div>
        <div className="versus-goalkeepers">
          <VersusCard playerId={1} position={'Midfielder'} />
          <VersusCard playerId={1} position={'Midfielder'} />
          <VersusCard playerId={1} position={'Midfielder'} />
        </div>
        <div className="versus-goalkeepers">
          <VersusCard playerId={1} position={'Defender'} />
          <VersusCard playerId={1} position={'Defender'} />
          <VersusCard playerId={1} position={'Defender'} />
          <VersusCard playerId={1} position={'Defender'} />
        </div>
        <div className="versus-goalkeepers">
          <VersusCard playerId={1} position={'Goalkeeper'} />
        </div>
      </div>
    </div>
  )
}
