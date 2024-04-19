import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Clock from './Clock'

export default function ClockApp() {
  return (
    <>
      <Header />
      <div className="clock-page">
        <Clock />
      </div>
      <Footer />
    </>
  )
}
