import React, { useState } from 'react'
import LeapYears from './challenges/LeapYears'
import SmithNumbers from './challenges/SmithNumbers'

export default function CodingChallenges() {
  const [leapYearsVisible, setLeapYearsVisible] = useState(false)
  const [smithNumbersVisible, setSmithNumbersVisible] = useState(false)

  function selectLeapYears() {
    setLeapYearsVisible(!leapYearsVisible)
    setSmithNumbersVisible(false)
  }

  function selectSmithNumbers() {
    setSmithNumbersVisible(!smithNumbersVisible)
    setLeapYearsVisible(false)
  }

  return (
    <div>
      <h1>Coding Challenges</h1>
      <div className="cc-list">
        <button onClick={() => selectLeapYears()}>Leap Years</button>
        <button onClick={() => selectSmithNumbers()}>Smith Numbers</button>
      </div>
      {leapYearsVisible ? <LeapYears /> : null}
      {smithNumbersVisible ? <SmithNumbers /> : null}
    </div>
  )
}
