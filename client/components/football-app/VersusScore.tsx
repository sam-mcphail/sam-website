import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Player } from '../../models/Models'
import { getPlayers } from '../../api/playerApi'

export default function VersusScore(props) {
  const teamOne = props.teamOne
  const teamTwo = props.teamTwo

  const {
    data: players,
    isLoading,
    error,
  } = useQuery<Player[]>({ queryKey: ['players'], queryFn: getPlayers })

  const [teamOneAttRatings, setTeamOneAttRatings] = useState(0)
  const [teamOneDefRatings, setTeamOneDefRatings] = useState(0)
  const [teamTwoAttRatings, setTeamTwoAttRatings] = useState(0)
  const [teamTwoDefRatings, setTeamTwoDefRatings] = useState(0)

  function getTeamOneRatings() {
    let attRating = 0
    let defRating = 0
    // loop over all players
    // each time if id matches an id in team add att rating
    players?.map((p) => {
      for (let j = 0; j < teamOne.length; j++) {
        if (p.id === teamOne[j]) {
          attRating += p.att_rating
          defRating += p.def_rating
        }
      }
    })
    setTeamOneAttRatings(attRating)
    setTeamOneDefRatings(defRating)
  }

  function getTeamTwoRatings() {
    let attRating = 0
    let defRating = 0
    // loop over all players
    // each time if id matches an id in team add att rating
    players?.map((p) => {
      for (let j = 0; j < teamTwo.length; j++) {
        if (p.id === teamTwo[j]) {
          attRating += p.att_rating
          defRating += p.def_rating
        }
      }
    })
    setTeamTwoAttRatings(attRating)
    setTeamTwoDefRatings(defRating)
  }

  function simulateGame() {
    getTeamOneRatings()
    getTeamTwoRatings()
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
    <>
      <h1>Scoreboard</h1>
      <button onClick={simulateGame}>Simulate game</button>
      <p>Team One Ratings</p>
      <p>
        Attack: {teamOneAttRatings} Defence: {teamOneDefRatings}
      </p>
      <p>Team Two Ratings</p>
      <p>
        Attack: {teamTwoAttRatings} Defence: {teamTwoDefRatings}
      </p>
    </>
  )
}
