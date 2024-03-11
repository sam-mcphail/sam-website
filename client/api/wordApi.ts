import request from 'superagent'
const wordUrl = 'api/v2/dictionary'

export async function getDefintion(word: string) {
  try {
    console.log(`${wordUrl}/${word}`)
    const response = await request.get(`${wordUrl}/${word}`)
    return response.body
  } catch (error) {
    console.error('Error fetching word:', error)
    throw error // Re-throw the error to handle it in the caller function
  }
}
