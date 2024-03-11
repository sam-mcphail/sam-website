import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
      <h1 className="header-name">Sam McPhail</h1>
      <Link className="header-link" to="/">
        <h2>Home</h2>
      </Link>
      <Link className="header-link" to="/coding">
        <h2>Coding</h2>
      </Link>
      <Link className="header-link" to="/about">
        <h2>About</h2>
      </Link>
      <Link
        className="header-link"
        to="https://github.com/sam-mcphail"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>GitHub</h2>
      </Link>
    </div>
  )
}
