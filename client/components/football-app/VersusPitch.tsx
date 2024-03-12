import React from 'react'
import Card from './Card'
import VersusCard from './VersusCard'

export default function VersusPitch(props) {
  return (
    <div className="versus-pitch">
      <div className="versus-team">
        <div className="versus-goalkeepers">
          <VersusCard playerId={props.teamOne[10]} position={'Goalkeeper'} />
        </div>
        <div className="versus-goalkeepers">
          <VersusCard playerId={props.teamOne[9]} position={'Defender'} />
          <VersusCard playerId={props.teamOne[8]} position={'Defender'} />
          <VersusCard playerId={props.teamOne[7]} position={'Defender'} />
          <VersusCard playerId={props.teamOne[6]} position={'Defender'} />
        </div>
        <div className="versus-goalkeepers">
          <VersusCard playerId={props.teamOne[5]} position={'Midfielder'} />
          <VersusCard playerId={props.teamOne[4]} position={'Midfielder'} />
          <VersusCard playerId={props.teamOne[3]} position={'Midfielder'} />
        </div>
        <div className="versus-goalkeepers">
          <VersusCard playerId={props.teamOne[2]} position={'Forward'} />
          <VersusCard playerId={props.teamOne[1]} position={'Forward'} />
          <VersusCard playerId={props.teamOne[0]} position={'Forward'} />
        </div>
      </div>
      <div className="versus-team">
        <div className="versus-goalkeepers">
          <VersusCard playerId={props.teamTwo[2]} position={'Forward'} />
          <VersusCard playerId={props.teamTwo[1]} position={'Forward'} />
          <VersusCard playerId={props.teamTwo[0]} position={'Forward'} />
        </div>
        <div className="versus-goalkeepers">
          <VersusCard playerId={props.teamTwo[5]} position={'Midfielder'} />
          <VersusCard playerId={props.teamTwo[4]} position={'Midfielder'} />
          <VersusCard playerId={props.teamTwo[3]} position={'Midfielder'} />
        </div>
        <div className="versus-goalkeepers">
          <VersusCard playerId={props.teamTwo[9]} position={'Defender'} />
          <VersusCard playerId={props.teamTwo[8]} position={'Defender'} />
          <VersusCard playerId={props.teamTwo[7]} position={'Defender'} />
          <VersusCard playerId={props.teamTwo[6]} position={'Defender'} />
        </div>
        <div className="versus-goalkeepers">
          <VersusCard playerId={props.teamTwo[10]} position={'Goalkeeper'} />
        </div>
      </div>
    </div>
  )
}
