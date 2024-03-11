import React from 'react'
import Card from './Card'

export default function VersusPitch(props) {
  return (
    <div className="versus-pitch">
      <div className="versus-team">
        <div className="versus-goalkeepers">
          <Card playerId={props.players[10]} position={'Goalkeeper'} />
        </div>
        <div className="versus-goalkeepers">
          <Card playerId={props.players[9]} position={'Defender'} />
          <Card playerId={props.players[8]} position={'Defender'} />
          <Card playerId={props.players[7]} position={'Defender'} />
          <Card playerId={props.players[6]} position={'Defender'} />
        </div>
        <div className="versus-goalkeepers">
          <Card playerId={props.players[5]} position={'Midfielder'} />
          <Card playerId={props.players[4]} position={'Midfielder'} />
          <Card playerId={props.players[3]} position={'Midfielder'} />
        </div>
        <div className="versus-goalkeepers">
          <Card playerId={props.players[2]} position={'Forward'} />
          <Card playerId={props.players[1]} position={'Forward'} />
          <Card playerId={props.players[0]} position={'Forward'} />
        </div>
      </div>
      <div className="versus-team">
        <div className="versus-goalkeepers">
          <Card playerId={1} position={'Forward'} />
          <Card playerId={1} position={'Forward'} />
          <Card playerId={1} position={'Forward'} />
        </div>
        <div className="versus-goalkeepers">
          <Card playerId={1} position={'Midfielder'} />
          <Card playerId={1} position={'Midfielder'} />
          <Card playerId={1} position={'Midfielder'} />
        </div>
        <div className="versus-goalkeepers">
          <Card playerId={1} position={'Defender'} />
          <Card playerId={1} position={'Defender'} />
          <Card playerId={1} position={'Defender'} />
          <Card playerId={1} position={'Defender'} />
        </div>
        <div className="versus-goalkeepers">
          <Card playerId={1} position={'Goalkeeper'} />
        </div>
      </div>
    </div>
  )
}
