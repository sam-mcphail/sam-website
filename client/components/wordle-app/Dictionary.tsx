import React, { useEffect } from 'react'
import { getDefintion } from '../../api/wordApi'
import { useQuery } from '@tanstack/react-query'
import { WordData } from '../../models/WordModel'
import { useState } from 'react'

interface Props {
  word: string
}

export default function Dictionary(props: Props) {
  const [dictWord, setDictWord] = useState('Word')
  const myWord = props.word
  const {
    data: defWord,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['definition', myWord],
    queryFn: () => getDefintion(myWord),
  })

  useEffect(() => {
    setDictWord(defWord?.word)
  })

  return (
    <div>
      {/* <h2>{defWord?.word}</h2>
      {defWord?.meanings.map((m) => (
        <div>
          <h3>{m.partOfSpeech}</h3>
          {m.definitions.map((d) => (
            <p>{d.definition}</p>
          ))}
        </div>
      ))} */}
      <p>{dictWord}</p>
    </div>
  )
}
