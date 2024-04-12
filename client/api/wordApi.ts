import request from 'superagent'
import { WordData } from '../models/WordModel'
const wordUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en'

export async function getDefintion(word: string): Promise<WordData> {
  try {
    console.log(`${wordUrl}/${word}`)
    const response = await request.get(`${wordUrl}/${word}`)
    return response.body
  } catch (error) {
    console.error('Error fetching word:', error)
    throw error // Re-throw the error to handle it in the caller function
  }
}
