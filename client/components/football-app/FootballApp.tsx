import Header from '../Header'
import Footer from '../Footer'
import PlayerList from './PlayerListAndPitch'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPlayers } from '../../api/playerApi'
import { Player } from '../../models/Models'
import PlayerListAndPitch from './PlayerListAndPitch'
import { useState } from 'react'
// import AddPlayerForm from './AddPlayerForm'

export default function FootballApp() {
  const [infoVisibility, setinfoVisibility] = useState(false)

  function handleInfoClick() {
    setinfoVisibility(!infoVisibility)
  }

  return (
    <>
      <Header />
      <div className="football-page">
        <div className="page-title">
          <h1>This is the football page!</h1>
          <button onClick={handleInfoClick}>Click for more information</button>
          {infoVisibility ? <p>Choose your team.</p> : null}
        </div>
        {/* <AddPlayerForm /> */}
        <PlayerListAndPitch />
      </div>
      <Footer />
    </>
  )
}
