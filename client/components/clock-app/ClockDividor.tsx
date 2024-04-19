import React from 'react'

interface Props {
  on: boolean
}

export default function ClockDividor(props: Props) {
  return (
    <>
      <h1>{props.on}</h1>
    </>
  )
}
