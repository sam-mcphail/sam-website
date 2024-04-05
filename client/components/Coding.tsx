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
          <h1>Projects</h1>
        </div>
        <div className="projects">
          <div className="project-card">
            <h1>Football Team Builder</h1>
            <p>Information about the project</p>
            <Link to="/football-team-builder">
              <button>Check it out</button>
            </Link>
          </div>
          <div className="project-card">
            <h1>Wordle Clone</h1>
            <p>Information about the project</p>
            <Link to="/wordle">
              <button>Check it out</button>
            </Link>
          </div>
          <div className="project-card">
            <h1>Calculator App</h1>
            <p>Information about the project</p>
            <Link to="/calculator">
              <button>Check it out</button>
            </Link>
          </div>
          <div className="project-card">
            <h1>Tic Tac Toe</h1>
            <p>Information about the project</p>
            <Link to="/tic-tac-toe">
              <button>Check it out</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
