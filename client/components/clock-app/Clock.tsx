import React, { useState, useEffect } from 'react'
import ClockNumber from './ClockNumer'
import ClockDividor from './ClockDividor'

export default function Clock() {
  const [time, setTime] = useState<string | null>(null)
  const [hours1, setHours1] = useState<number | null>(null)
  const [minutes1, setMinutes1] = useState<number | null>(null)
  const [seconds1, setSeconds1] = useState<number | null>(null)
  const [hours2, setHours2] = useState<number | null>(null)
  const [minutes2, setMinutes2] = useState<number | null>(null)
  const [seconds2, setSeconds2] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = getTime()
      setTime(currentTime)
      setHours1(parseInt(currentTime.split('')[0]))
      setHours2(parseInt(currentTime.split('')[1]))
      setMinutes1(parseInt(currentTime.split('')[2]))
      setMinutes2(parseInt(currentTime.split('')[3]))
      setSeconds1(parseInt(currentTime.split('')[4]))
      setSeconds2(parseInt(currentTime.split('')[5]))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  function getTime() {
    const d = new Date()
    let hours = d.getHours().toString()
    let minutes = d.getMinutes().toString()
    let seconds = d.getSeconds().toString()
    if (seconds.length < 2) {
      seconds = '0' + seconds
    }
    if (minutes.length < 2) {
      minutes = '0' + minutes
    }
    if (hours.length < 2) {
      hours = '0' + hours
    }
    return hours + minutes + seconds
  }
  return (
    <div className="clock-container">
      <div className="clock">
        <div className="number">
          <ClockNumber digit={hours1} />
        </div>
        <div className="number">
          <ClockNumber digit={hours2} />
        </div>
        <div className="dividor">
          <ClockDividor on={true} />
        </div>
        <div className="number">
          <ClockNumber digit={minutes1} />
        </div>
        <div className="number">
          <ClockNumber digit={minutes2} />
        </div>
        <div className="dividor">
          <ClockDividor on={true} />
        </div>
        <div className="number">
          <ClockNumber digit={seconds1} />
        </div>
        <div className="number">
          <ClockNumber digit={seconds2} />
        </div>
      </div>
    </div>
  )
}
