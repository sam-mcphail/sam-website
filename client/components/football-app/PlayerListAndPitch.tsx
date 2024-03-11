import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPlayers } from '../../api/playerApi'
import { Player } from '../../models/Models'
import Card from './Card'

export default function PlayerListAndPitch() {
  const {
    data: players,
    isLoading,
    error,
  } = useQuery<Player[]>({ queryKey: ['players'], queryFn: getPlayers })

  const [playerArray, setPlayerArray] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ])

  let allSelect = true
  let goalkeeperSelect = false
  let defenderSelect = false
  let midfielderSelect = false
  let forwardSelect = false

  function handleAllButtonClick() {
    allSelect = true
    goalkeeperSelect = false
    midfielderSelect = false
    defenderSelect = false
    goalkeeperSelect = false
  }

  function handleGoalKeeperButtonClick() {
    allSelect = false
    goalkeeperSelect = true
    midfielderSelect = false
    defenderSelect = false
    goalkeeperSelect = false
  }

  function handleDefenderButtonClick() {
    allSelect = false
    goalkeeperSelect = false
    midfielderSelect = true
    defenderSelect = false
    goalkeeperSelect = false
  }

  function handleMidfielderButtonClick() {
    allSelect = false
    goalkeeperSelect = false
    midfielderSelect = false
    defenderSelect = true
    goalkeeperSelect = false
  }

  function handleForwardButtonClick() {
    allSelect = false
    goalkeeperSelect = false
    midfielderSelect = false
    defenderSelect = false
    goalkeeperSelect = true
  }

  const forwardsArray = playerArray.slice(0, 3)
  const midfieldersArray = playerArray.slice(3, 6)
  const defendersArray = playerArray.slice(6, 10)
  const goalkeepersArray = playerArray.slice(10)

  let selected = 0

  function handleClearSelection() {
    setPlayerArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  }

  function handleListPlayerClick(id: number) {
    getSelected()
    const newArray = playerArray.map((c, i) => {
      let unique = true
      playerArray.map((j) => {
        if (id == j) {
          unique = false
        }
      })
      if (i === selected && unique) {
        return id
      } else {
        return c
      }
    })
    setPlayerArray(newArray)
  }

  function handleForwardPlayerClick(i: number) {
    const newArray = [...playerArray]
    newArray[i] = 0
    setPlayerArray(newArray)
  }

  function handleMidfielderPlayerClick(i: number) {
    const newArray = [...playerArray]
    newArray[i + 3] = 0
    setPlayerArray(newArray)
  }

  function handleDefenderPlayerClick(i: number) {
    const newArray = [...playerArray]
    newArray[i + 6] = 0
    setPlayerArray(newArray)
  }

  function handleGoalkeeperPlayerClick(i: number) {
    const newArray = [...playerArray]
    newArray[i + 10] = 0
    setPlayerArray(newArray)
  }

  function getSelected() {
    const index = playerArray.findIndex((e) => e == 0)
    if (index == undefined) selected = 0
    else selected = index
  }

  if (!players || isLoading) {
    return (
      <>
        <h1 className="page-title">Loading players...</h1>
      </>
    )
  }

  if (error) {
    return (
      <>
        <h1 className="page-title">An error occurred</h1>
      </>
    )
  }

  return (
    <div className="list-and-pitch">
      <div className="player-list">
        <h2 className="player-list-title">Player list</h2>
        <button onClick={handleClearSelection}>Clear selection</button>
        <div className="position-buttons">
          <button onClick={handleAllButtonClick}>All</button>
          <button onClick={handleGoalKeeperButtonClick}>Goalkeepers</button>
          <button onClick={handleDefenderButtonClick}>Defenders</button>
          <button onClick={handleMidfielderButtonClick}>Midfielders</button>
          <button onClick={handleForwardButtonClick}>Forwards</button>
        </div>
        {players.map((p) =>
          allSelect ? (
            <div
              className="list-player"
              key={p.id}
              onClick={() => handleListPlayerClick(p.id)}
            >
              <img
                className="list-player-image"
                src={p.image}
                alt={p.full_name}
              ></img>
              <div className="list-player-details">
                <h3 className="list-player-name">{p.full_name}</h3>
                <div className="list-player-info">
                  <div className="list-player-stats-1">
                    <p>Position: {p.position}</p>
                    <p>Country: {p.country}</p>
                    <p>Team: {p.team}</p>
                  </div>
                  <div className="list-player-stats-2">
                    <p>Attack rating: {p.att_rating}</p>
                    <p>Defence rating: {p.def_rating}</p>
                    <p>Value: ${p.value}m</p>
                  </div>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
      <div className="pitch">
        <div className="forwards">
          {forwardsArray.map((p, i) => (
            <div key={i}>
              <div onClick={() => handleForwardPlayerClick(i)}>
                <Card playerId={p} position="Forward" />
              </div>
            </div>
          ))}
        </div>
        <div className="midfielders">
          {midfieldersArray.map((p, i) => (
            <div key={i}>
              <div onClick={() => handleMidfielderPlayerClick(i)}>
                <Card playerId={p} position="Midfielder" />
              </div>
            </div>
          ))}
        </div>
        <div className="defenders">
          {defendersArray.map((p, i) => (
            <div key={i}>
              <div onClick={() => handleDefenderPlayerClick(i)}>
                <Card playerId={p} position="Defender" />
              </div>
            </div>
          ))}
        </div>
        <div className="goalkeepers">
          {goalkeepersArray.map((p, i) => (
            <div key={i}>
              <div onClick={() => handleGoalkeeperPlayerClick(i)}>
                <Card playerId={p} position="Goalkeeper" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
