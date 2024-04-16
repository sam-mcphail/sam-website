import React, { useState } from 'react'
import LeapYears from './challenges/LeapYears'

export default function CodingChallenges() {
  const [leapYearsVisible, setLeapYearsVisible] = useState(false)

  function selectLeapYears() {
    setLeapYearsVisible(!leapYearsVisible)
  }

  return (
    <div>
      <h1>Coding Challenges</h1>
      <div className="cc-list">
        <button onClick={() => selectLeapYears()}>Leap Years</button>
      </div>
      {leapYearsVisible ? <LeapYears /> : null}
    </div>
  )
}
