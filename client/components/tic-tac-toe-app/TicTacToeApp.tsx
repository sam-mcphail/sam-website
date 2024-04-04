import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import TicTacToeGame from './TicTacToeGame'

export default function TicTacToeApp() {
  return (
    <div>
      <Header />
      <div className="tic-tac-toe-page">
        <TicTacToeGame />
      </div>
      <Footer />
    </div>
  )
}
