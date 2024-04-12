import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getWeather } from '../api/weatherApi'
import { WeatherData } from '../models/WeatherModel'

export default function Header() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    callWeather()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = getTime()
      setTime(currentTime)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  async function callWeather() {
    const currentWeather = await getWeather()
    setWeather(currentWeather)
    console.log(currentWeather)
  }

  function getTime() {
    const d = new Date()
    const hours = d.getHours().toString()
    const minutes = d.getMinutes().toString()
    let seconds = d.getSeconds().toString()
    if (seconds.length < 2) {
      seconds = '0' + seconds
    }
    return hours + ':' + minutes + ':' + seconds
  }

  return (
    <div className="header">
      <h1 className="header-name">Sam McPhail</h1>
      <Link className="header-link" to="/">
        <h2>Home</h2>
      </Link>
      <Link className="header-link" to="/coding">
        <h2>Coding</h2>
      </Link>
      <Link
        className="header-link"
        to="https://github.com/sam-mcphail"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>GitHub</h2>
      </Link>
      <Link
        className="header-link"
        to="https://www.linkedin.com/in/sam-mcphail-nz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>LinkedIn</h2>
      </Link>
      <div className="time-and-weather">
        <h2>Chirstchurch weather</h2>
        <p>{weather?.current.temperature_2m}°C</p>
        <p>{time}</p>
      </div>
    </div>
  )
}

// https://api.open-meteo.com/v1/forecast?latitude=-43.5333&longitude=172.6333&hourly=temperature_2m&timezone=Pacific%2FAuckland
