import Header from './Header'
import Footer from './Footer'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Coding() {
  return (
    <>
      <Header />
      <div className="coding-page">
        <div className="page-title">
          <h1>This is the coding page!</h1>
        </div>
        <div className="projects">
          <h2>Projects</h2>
          <Link to="/football-team-builder">
            <p>Football Team Builder</p>
          </Link>
          <Link to="/wordle">
            <p>Wordle Clone</p>
          </Link>
          <Link to="/calculator">
            <p>Calculator App</p>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
