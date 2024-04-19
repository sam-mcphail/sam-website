import React, { useEffect, useState } from 'react'
import { listSmithNumbers } from '../../../functions/smith-numbers'
import { useQuery } from '@tanstack/react-query'

export default function SmithNumbers() {
  const [visibility, setVisibility] = useState(false)
  const {
    data: smiths,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['smiths'],
    queryFn: () => listSmithNumbers(1, 10000),
  })

  function handleButton() {
    setVisibility(!visibility)
  }

  return (
    <div>
      <h1>Smith Numbers</h1>
      <button onClick={() => handleButton()}>Show smith numbers</button>
      {visibility ? (
        <div>
          {smiths.map((s, i) => (
            <p key={i}>{s}</p>
          ))}
        </div>
      ) : null}
    </div>
  )
}
