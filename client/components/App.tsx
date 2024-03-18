import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Coding from './Coding'
import FootballApp from './football-app/FootballApp'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WordleApp from './wordle-app/WordleApp'
import CalcApp from './calculator-app/CalcApp'

export default function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/coding', element: <Coding /> },
    { path: '/football-team-builder', element: <FootballApp /> },
    { path: '/wordle', element: <WordleApp /> },
    { path: '/calculator', element: <CalcApp /> },
  ])
  return <RouterProvider router={router} />
}
