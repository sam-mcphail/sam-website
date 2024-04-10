import request from 'superagent'
import { WeatherData } from '../models/WeatherModel'

export async function getWeather(): Promise<WeatherData> {
  const response = await request.get(
    'https://api.open-meteo.com/v1/forecast?latitude=-43.5333&longitude=172.6333&current=temperature_2m'
  )
  return response.body
}
