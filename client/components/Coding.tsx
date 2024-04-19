import Header from './Header'
import Footer from './Footer'
import React from 'react'
import { Link } from 'react-router-dom'
import questionMark from '../images/question-mark.png'
import wordlePic from '../images/wordle-pic.png'
import tttPic from '../images/ttt-pic.png'
import calcPic from '../images/calc-pic.png'
import teamPic from '../images/team-pic.png'

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
            <h1>Team Builder</h1>
            <p>Information about the project</p>
            <img className="project-image" src={teamPic}></img>
            <Link to="/football-team-builder">
              <button className="project-button">Check it out</button>
            </Link>
          </div>
          <div className="project-card">
            <h1>Wordle Clone</h1>
            <p>Information about the project</p>
            <img className="project-image" src={wordlePic}></img>
            <Link to="/wordle">
              <button className="project-button">Check it out</button>
            </Link>
          </div>
          <div className="project-card">
            <h1>Calculator</h1>
            <p>Information about the project</p>
            <img className="project-image" src={calcPic}></img>
            <Link to="/calculator">
              <button className="project-button">Check it out</button>
            </Link>
          </div>
          <div className="project-card">
            <h1>Tic Tac Toe</h1>
            <p>Information about the project</p>
            <img className="project-image" src={tttPic}></img>
            <Link to="/tic-tac-toe">
              <button className="project-button">Check it out</button>
            </Link>
          </div>
          <div className="project-card">
            <h1>Challenges</h1>
            <p>Information about the project</p>
            <img className="project-image" src={questionMark}></img>
            <Link to="/coding-challenges">
              <button className="project-button">Check it out</button>
            </Link>
          </div>
          <div className="project-card">
            <h1>Clock</h1>
            <p>Information about the project</p>
            <img className="project-image" src={questionMark}></img>
            <Link to="/clock">
              <button className="project-button">Check it out</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
