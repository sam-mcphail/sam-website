import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Player } from '../../models/Models'
import { getPlayers } from '../../api/playerApi'
import { useEffect } from 'react'

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
  const [teamOneWeightedAttRatings, setTeamOneWeightedAttRatings] = useState(0)
  const [teamOneWeightedDefRatings, setTeamOneWeightedDefRatings] = useState(0)
  const [teamTwoWeightedAttRatings, setTeamTwoWeightedAttRatings] = useState(0)
  const [teamTwoWeightedDefRatings, setTeamTwoWeightedDefRatings] = useState(0)

  const [teamOneGoals, setTeamOneGoals] = useState(0)
  const [teamTwoGoals, setTeamTwoGoals] = useState(0)
  const [teamOneHasGoalScorers, setTeamOneHasGoalScorers] = useState(false)
  const [teamTwoHasGoalScorers, setTeamTwoHasGoalScorers] = useState(false)
  const [teamOneGoalScorers, setTeamOneGoalScorers] = useState(new Array(0))
  const [teamTwoGoalScorers, setTeamTwoGoalScorers] = useState(new Array(0))

  function getTeamOneRatings() {
    let attRating = 0
    let defRating = 0
    let wAttRating = 0
    let wDefRating = 0
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
    // forwards index 0 - 2
    players?.map((p) => {
      for (let j = 0; j < 3; j++) {
        if (p.id === teamOne[j]) {
          wAttRating += p.att_rating * 1.8
          wDefRating += p.def_rating * 0.3
        }
      }
    })
    // midfielders index 3 - 5
    players?.map((p) => {
      for (let j = 3; j < 6; j++) {
        if (p.id === teamOne[j]) {
          wAttRating += p.att_rating * 1.1
          wDefRating += p.def_rating * 0.9
        }
      }
    })
    // defenders index 6 - 9
    players?.map((p) => {
      for (let j = 6; j < 10; j++) {
        if (p.id === teamOne[j]) {
          wAttRating += p.att_rating * 0.6
          wDefRating += p.def_rating * 1.4
        }
      }
    })
    // goalkeeper index 10
    players?.map((p) => {
      if (p.id === teamOne[10]) {
        wAttRating += p.att_rating * 0.1
        wDefRating += p.def_rating * 2
      }
    })
    setTeamOneAttRatings(Number(attRating.toFixed(1)))
    setTeamOneDefRatings(Number(defRating.toFixed(1)))
    setTeamOneWeightedAttRatings(Number(wAttRating.toFixed(1)))
    setTeamOneWeightedDefRatings(Number(wDefRating.toFixed(1)))
  }

  useEffect(() => {
    if (!isLoading && !error && players) {
      simulateGame()
    }
  }, [isLoading, error, players])

  function getTeamTwoRatings() {
    let attRating = 0
    let defRating = 0
    let wAttRating = 0
    let wDefRating = 0
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
    // forwards index 0 - 2
    players?.map((p) => {
      for (let j = 0; j < 3; j++) {
        if (p.id === teamTwo[j]) {
          wAttRating += p.att_rating * 1.8
          wDefRating += p.def_rating * 0.3
        }
      }
    })
    // midfielders index 3 - 5
    players?.map((p) => {
      for (let j = 3; j < 6; j++) {
        if (p.id === teamTwo[j]) {
          wAttRating += p.att_rating * 1.1
          wDefRating += p.def_rating * 0.9
        }
      }
    })
    // defenders index 6 - 9
    players?.map((p) => {
      for (let j = 6; j < 10; j++) {
        if (p.id === teamTwo[j]) {
          wAttRating += p.att_rating * 0.6
          wDefRating += p.def_rating * 1.4
        }
      }
    })
    // goalkeeper index 10
    players?.map((p) => {
      if (p.id === teamTwo[10]) {
        wAttRating += p.att_rating * 0.1
        wDefRating += p.def_rating * 2
      }
    })
    setTeamTwoAttRatings(Number(attRating.toFixed(1)))
    setTeamTwoDefRatings(Number(defRating.toFixed(1)))
    setTeamTwoWeightedAttRatings(Number(wAttRating.toFixed(1)))
    setTeamTwoWeightedDefRatings(Number(wDefRating.toFixed(1)))
  }

  function simulateGame() {
    setTeamOneGoalScorers([])
    setTeamTwoGoalScorers([])
    getTeamOneRatings()
    getTeamTwoRatings()
    setTeamOneGoals(
      getNumberOfGoals(teamOneWeightedAttRatings, teamTwoWeightedDefRatings)
    )
    setTeamOneGoalScorers(getTeamOneGoalScorers(teamOneGoals))
    console.log('Team one scorers: ' + teamOneGoalScorers)
    setTeamTwoGoals(
      getNumberOfGoals(teamTwoWeightedAttRatings, teamOneWeightedDefRatings)
    )
    setTeamTwoGoalScorers(getTeamTwoGoalScorers(teamTwoGoals))
    console.log('Team two scorers: ' + teamTwoGoalScorers)
  }

  function getTeamOneGoalScorers(numOfGoals) {
    let goalScorerArray = new Array(0)
    if (numOfGoals == 0) return new Array(0)
    for (let i = 0; i < numOfGoals; i++) {
      goalScorerArray.push(getGoalScorerIndex())
    }
    setTeamOneHasGoalScorers(true)
    return goalScorerArray
  }

  function getTeamTwoGoalScorers(numOfGoals) {
    let goalScorerArray = new Array(0)
    if (numOfGoals == 0) return new Array(0)
    for (let i = 0; i < numOfGoals; i++) {
      goalScorerArray.push(getGoalScorerIndex())
    }
    setTeamTwoHasGoalScorers(true)
    return goalScorerArray
  }

  function getGoalScorerIndex() {
    const goal = Math.random()
    if (goal < 0.2) return 0
    if (0.2 <= goal && goal < 0.4) return 1
    if (0.4 <= goal && goal < 0.6) return 2
    if (0.6 <= goal && goal < 0.7) return 3
    if (0.7 <= goal && goal < 0.8) return 4
    if (0.8 <= goal && goal < 0.9) return 5
    if (0.9 <= goal && goal < 0.925) return 6
    if (0.925 <= goal && goal < 0.95) return 7
    if (0.95 <= goal && goal < 0.975) return 8
    if (0.975 <= goal) return 9
  }

  function getNumberOfGoals(teamAtt, oppDef) {
    return Math.floor(Math.random() * (teamAtt / oppDef) * 6)
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
      <p>Goals: {teamOneGoals}</p>
      {teamOneHasGoalScorers ? (
        <div>
          <p>Goalscorers: </p>
          {teamOneGoalScorers.map((g, i) => (
            <p key={i}>{g}</p>
          ))}
        </div>
      ) : null}
      <p>Goals: {teamTwoGoals}</p>
      {teamTwoHasGoalScorers ? (
        <div>
          <p>Goalscorers: </p>
          {teamTwoGoalScorers.map((g, i) => (
            <p key={i}>{g}</p>
          ))}
        </div>
      ) : null}
    </>
  )
}
