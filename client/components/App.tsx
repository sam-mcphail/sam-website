import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Coding from './Coding'
import FootballApp from './football-app/FootballApp'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WordleApp from './wordle-app/WordleApp'
import CalcApp from './calculator-app/CalcApp'
import TicTacToeApp from './tic-tac-toe-app/TicTacToeApp'

export default function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/coding', element: <Coding /> },
    { path: '/football-team-builder', element: <FootballApp /> },
    { path: '/wordle', element: <WordleApp /> },
    { path: '/calculator', element: <CalcApp /> },
    { path: '/tic-tac-toe', element: <TicTacToeApp /> },
  ])
  return <RouterProvider router={router} />
}
