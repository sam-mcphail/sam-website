import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import CodingChallenges from './CodingChallenges'

export default function CodingChallengesApp() {
  return (
    <div>
      <Header />
      <div className="cc-page">
        <CodingChallenges />
      </div>
      <Footer />
    </div>
  )
}
