import React from 'react'
import { getDefintion } from '../../api/wordApi'
import { useQuery } from '@tanstack/react-query'

interface Props {
  word: string
}

export default function Dictionary(props: Props) {
  const myWord = props.word
  const {
    data: definition,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['definition', myWord],
    queryFn: () => getDefintion(myWord),
  })

  return (
    <div>
      <p>{definition}</p>
    </div>
  )
}
