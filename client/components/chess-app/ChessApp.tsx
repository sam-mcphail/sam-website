import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ChessGame from './ChessGame'

export default function ChessApp() {
  return (
    <>
      <Header />
      <div className="chess-page">
        <ChessGame />
      </div>
      <Footer />
    </>
  )
}
