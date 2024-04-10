import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer">
      <h3 className="footer-info">Sam McPhail 2024</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/coding">Coding</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link
            to="https://github.com/sam-mcphail"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/sam-mcphail-nz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </li>
      </ul>
    </div>
  )
}
