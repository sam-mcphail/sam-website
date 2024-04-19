import React from 'react'

interface Props {
  digit: number | null
}

export default function ClockNumber(props: Props) {
  if (props.digit == 1) {
    return (
      <>
        <div className="clock-one-square1"></div>
        <div className="clock-one-square2"></div>
      </>
    )
  }

  if (props.digit == 2) {
    return (
      <>
        <div className="clock-two-square1"></div>
        <div className="clock-two-square2"></div>
      </>
    )
  }
  if (props.digit == 3) {
    return (
      <>
        <div className="clock-three-square1"></div>
        <div className="clock-three-square2"></div>
      </>
    )
  }
  if (props.digit == 4) {
    return (
      <>
        <div className="clock-four-square1"></div>
        <div className="clock-four-square2"></div>
      </>
    )
  }
  if (props.digit == 5) {
    return (
      <>
        <div className="clock-five-square1"></div>
        <div className="clock-five-square2"></div>
      </>
    )
  }
  if (props.digit == 6) {
    return (
      <>
        <div className="clock-six-square1"></div>
        <div className="clock-six-square2"></div>
      </>
    )
  }
  if (props.digit == 7) {
    return (
      <>
        <div className="clock-seven-square1"></div>
        <div className="clock-seven-square2"></div>
      </>
    )
  }
  if (props.digit == 8) {
    return (
      <>
        <div className="clock-eight-square1"></div>
        <div className="clock-eight-square2"></div>
      </>
    )
  }
  if (props.digit == 9) {
    return (
      <>
        <div className="clock-nine-square1"></div>
        <div className="clock-nine-square2"></div>
      </>
    )
  }

  if (props.digit == 0) {
    return (
      <>
        <div className="clock-zero-square1"></div>
        <div className="clock-zero-square2"></div>
      </>
    )
  }

  return (
    <>
      <h1>{props.digit}</h1>
    </>
  )
}
