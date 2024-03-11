import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Game from './WordleGame'

export default function WordleApp() {
  return (
    <div>
      <Header />
      <div className="wordle-page">
        <div className="page-title">
          <h1>Wordle Clone</h1>
        </div>
        <Game />
      </div>
      <Footer />
    </div>
  )
}
