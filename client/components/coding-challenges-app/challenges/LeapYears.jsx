import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { getLeapYears } from '../../../functions/functions'

export default function LeapYears() {
  const {
    data: years,
    isLoading,
    error,
  } = useQuery({ queryKey: ['years'], queryFn: getLeapYears })
  const [visibility, setVisibility] = useState(false)

  function showLeapYears() {
    setVisibility(!visibility)
  }

  if (!years || isLoading) {
    return (
      <>
        <h1>Loading years</h1>
      </>
    )
  }

  if (error) {
    return (
      <>
        <h1>Error occurred</h1>
      </>
    )
  }

  return (
    <div className="leap-years">
      <h1>Leap Years</h1>
      <button onClick={showLeapYears}>Show leap years</button>
      {visibility ? (
        <div className="ly-list">
          {years.map((ly) => (
            <p>{ly}</p>
          ))}
        </div>
      ) : null}
    </div>
  )
}
