import React, { useEffect, useState } from 'react'
import { IoBackspaceOutline } from 'react-icons/io5'
import secretWordsList from '../../data/secret-words.json'
import validWordsList from '../../data/valid-words.json'
import Dictionary from './Dictionary'

const defaultKeyboard = {
  keys: [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
  ],
  used: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  wrong: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  correct: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
}
const defaultKeyboardRowOne = [
  defaultKeyboard['keys'].slice(0, 10),
  defaultKeyboard['used'].slice(0, 10),
  defaultKeyboard['wrong'].slice(0, 10),
  defaultKeyboard['correct'].slice(0, 10),
]
const defaultKeyboardRowTwo = [
  defaultKeyboard['keys'].slice(10, 19),
  defaultKeyboard['used'].slice(10, 19),
  defaultKeyboard['wrong'].slice(10, 19),
  defaultKeyboard['correct'].slice(10, 19),
]
const defaultKeyboardRowThree = [
  defaultKeyboard['keys'].slice(20),
  defaultKeyboard['used'].slice(20),
  defaultKeyboard['wrong'].slice(20),
  defaultKeyboard['correct'].slice(20),
]
const defaultGuessArrays = {
  1: [
    ['', '', '', '', ''],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ],
  2: [
    ['', '', '', '', ''],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ],
  3: [
    ['', '', '', '', ''],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ],
  4: [
    ['', '', '', '', ''],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ],
  5: [
    ['', '', '', '', ''],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ],
  6: [
    ['', '', '', '', ''],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ],
}
const defaultGuess = 1
const defaultLetterGuess = 0
const defaultGamesArray = new Array(0)

export default function WordleGame() {
  // Set all useStates
  const [keyboard, setKeyboard] = useState(defaultKeyboard)
  const [keyboardRowOne, setKeyboardRowOne] = useState(defaultKeyboardRowOne)
  const [keyboardRowTwo, setKeyboardRowTwo] = useState(defaultKeyboardRowTwo)
  const [keyboardRowThree, setKeyboardRowThree] = useState(
    defaultKeyboardRowThree
  )
  const [guessArrays, setGuessArrays] = useState(defaultGuessArrays)
  const [guess, setGuess] = useState(defaultGuess)
  const [letterGuess, setLetterGuess] = useState(defaultLetterGuess)
  const [gamesArray, setGamesArray] = useState(defaultGamesArray)
  const [oneGuessGames, setOneGuessGames] = useState(0)
  const [twoGuessGames, setTwoGuessGames] = useState(0)
  const [threeGuessGames, setThreeGuessGames] = useState(0)
  const [fourGuessGames, setFourGuessGames] = useState(0)
  const [fiveGuessGames, setFiveGuessGames] = useState(0)
  const [sixGuessGames, setSixGuessGames] = useState(0)
  const [secretWord, setSecretWord] = useState('')
  const [dictionaryWord, setDictionaryWord] = useState('')

  // Get random word and create word array
  function getRandomWordNumber() {
    return Math.floor(Math.random() * secretWordsList.length)
  }
  useEffect(() => {
    setSecretWord(secretWordsList[getRandomWordNumber()])
  }, [])
  function arrayCapsSecretWord(word: string) {
    return word.toUpperCase().split('')
  }
  const secretArray = arrayCapsSecretWord(secretWord)

  function handleKeyClick(letter: string) {
    let newGuessArrays = { ...guessArrays }
    newGuessArrays[`${guess}`][0][letterGuess] = letter
    newGuessArrays[`${guess}`][0] = newGuessArrays[`${guess}`][0].slice(0, 5)
    updateGuessArrays(newGuessArrays)
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key
      const regex = /[a-z]/
      if (!regex.test(key) || key.length > 1) {
        e.preventDefault()
      } else {
        console.log(key)
        handleKeyClick(key.toUpperCase())
      }
    }
    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  function updateGuessArrays(newArrays) {
    setGuessArrays(newArrays)
    getNewLetterGuess()
  }

  function getNewLetterGuess() {
    const isEmpty = (letter: string) => letter == ''
    let letterGuess = 5
    if (guessArrays[`${guess}`][0].findIndex(isEmpty) >= 0) {
      letterGuess = guessArrays[`${guess}`][0].findIndex(isEmpty)
    }
    setLetterGuess(letterGuess)
  }

  function handleBackspaceClick() {
    let newGuessArrays = { ...guessArrays }
    newGuessArrays[`${guess}`][0][letterGuess - 1] = ''
    updateGuessArrays(newGuessArrays)
  }

  function handleEnterClick() {
    if (guessArrays[`${guess}`][0][4] != '') {
      // check if in word list
      if (isInWordList(guessArrays[`${guess}`][0].join('').toLowerCase())) {
        // set dictionary word
        setDictionaryWord(guessArrays[`${guess}`][0].join('').toLowerCase())
        console.log(guessArrays[`${guess}`][0].join('').toLowerCase())
        // check for correct placement
        let newCorrectPlacementGuessArrays = { ...guessArrays }
        newCorrectPlacementGuessArrays[`${guess}`][2] = checkCorrectPlacement(
          secretArray,
          guessArrays[`${guess}`][0]
        )
        setGuessArrays(newCorrectPlacementGuessArrays)
        // check for wrong placement
        let newWrongPlacementGuessArrays = { ...guessArrays }
        newWrongPlacementGuessArrays[`${guess}`][1] = checkWrongPlacement(
          secretArray,
          guessArrays[`${guess}`][0]
        )
        setGuessArrays(newWrongPlacementGuessArrays)
        // check keyboard correct placement
        keyboardCorrectPlacement(guessArrays[`${guess}`][2])
        console.log('Correct ' + keyboard['correct'])
        // check keyboard wrong placement
        keyboardWrongPlacement(guessArrays[`${guess}`][1])
        console.log('Wrong ' + keyboard['wrong'])
        // check keyboard used

        // update keyboard rows
        setKeyboardRowOne([
          keyboard['keys'].slice(0, 10),
          keyboard['used'].slice(0, 10),
          keyboard['wrong'].slice(0, 10),
          keyboard['correct'].slice(0, 10),
        ])
        setKeyboardRowTwo([
          keyboard['keys'].slice(10, 19),
          keyboard['used'].slice(10, 19),
          keyboard['wrong'].slice(10, 19),
          keyboard['correct'].slice(10, 19),
        ])
        setKeyboardRowThree([
          keyboard['keys'].slice(20),
          keyboard['used'].slice(20),
          keyboard['wrong'].slice(20),
          keyboard['correct'].slice(20),
        ])

        // if isWin endGame()
        let correctLetters = 0
        for (let i = 0; i < secretArray.length; i++) {
          if (secretArray[i] == guessArrays[`${guess}`][0][i]) {
            correctLetters++
          }
        }
        // console.log(correctLetters)
        if (correctLetters == 5) {
          gameWin(guess)
          return
        }
      } else {
        console.log('NOT IN WORD LIST!!!')
        return
      }
    }

    // for now just move on to next turn if there is a five letter word
    const isEmpty = (letter: string) => letter == ''
    let newGuess = guess
    if (guessArrays[`${guess}`][0].findIndex(isEmpty) < 0 && guess < 6) {
      newGuess = guess + 1
      setLetterGuess(0)
    }
    setGuess(newGuess)
  }

  function isInWordList(word: string) {
    for (let i = 0; i < validWordsList.length; i++) {
      if (word === validWordsList[i]) return true
    }
    return false
  }

  function checkCorrectPlacement(secret, guess) {
    let placementArray = [false, false, false, false, false]
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] == secret[i]) {
        placementArray[i] = true
      }
    }
    return placementArray
  }

  function checkWrongPlacement(secret, guess) {
    let placementArray = [false, false, false, false, false]

    for (let i = 0; i < guess.length; i++) {
      let found = false
      for (let j = 0; j < secret.length; j++) {
        if (i !== j && guess[i] === secret[j]) {
          found = true
          break
        }
      }
      placementArray[i] = found
    }

    return placementArray
  }

  function gameWin(guess: number) {
    let newGamesArray = [...gamesArray]
    gamesArray.push(guess)
    setGamesArray(newGamesArray)
    setOneGuessGames(gamesArray.filter((guess) => guess == 1).length)
    setTwoGuessGames(gamesArray.filter((guess) => guess == 2).length)
    setThreeGuessGames(gamesArray.filter((guess) => guess == 3).length)
    setFourGuessGames(gamesArray.filter((guess) => guess == 4).length)
    setFiveGuessGames(gamesArray.filter((guess) => guess == 5).length)
    setSixGuessGames(gamesArray.filter((guess) => guess == 6).length)
    useEffect(() => {
      setKeyboard((prevKeyboard) => ({ ...prevKeyboard, ...defaultKeyboard }))
      setKeyboardRowOne((prevKeyboardRowOne) => [
        ...prevKeyboardRowOne,
        ...defaultKeyboardRowOne,
      ])
      setKeyboardRowTwo((prevKeyboardRowTwo) => [
        ...prevKeyboardRowTwo,
        ...defaultKeyboardRowTwo,
      ])
      setKeyboardRowThree((prevKeyboardRowThree) => [
        ...prevKeyboardRowThree,
        ...defaultKeyboardRowThree,
      ])
      setGuessArrays((prevGuessArrays) => ({
        ...prevGuessArrays,
        ...defaultGuessArrays,
      }))
      setGuess((prevGuess) => defaultGuess)
      setLetterGuess((prevLetterGuess) => defaultLetterGuess)
    })
  }

  function keyboardCorrectPlacement(guessCorrectPlacement) {
    setKeyboard((prevKeyboard) => {
      const correctKeyboard = [...prevKeyboard.correct]
      guessCorrectPlacement.forEach((isCorrect, index) => {
        if (isCorrect) {
          const keyIndex = keyboard.keys.indexOf(
            guessArrays[`${guess}`][0][index]
          )
          if (keyIndex !== -1) {
            correctKeyboard[keyIndex] = true
          }
        }
      })
      return { ...prevKeyboard, correct: correctKeyboard }
    })
  }

  function keyboardWrongPlacement(guessWrongPlacement) {
    setKeyboard((prevKeyboard) => {
      const wrongKeyboard = [...prevKeyboard.wrong]
      guessWrongPlacement.forEach((isWrong, index) => {
        if (isWrong) {
          const keyIndex = keyboard.keys.indexOf(
            guessArrays[`${guess}`][0][index]
          )
          if (keyIndex !== -1) {
            wrongKeyboard[keyIndex] = true
          }
        }
      })
      return { ...prevKeyboard, wrong: wrongKeyboard }
    })
  }

  console.log(secretWord)

  return (
    <div className="wordle-game">
      <div className="guess-board">
        <div className="guess-row">
          {guessArrays['1'][0].map((l, i) =>
            guessArrays['1'][2][i] ? (
              <div key={i} className="guess-square-correct">
                <h1 className="guess-letter">{l}</h1>
              </div>
            ) : guessArrays['1'][1][i] ? (
              <div key={i} className="guess-square-wrong-placement">
                <h1 className="guess-letter">{l}</h1>
              </div>
            ) : (
              <div key={i} className="guess-square">
                <h1 className="guess-letter">{l}</h1>
              </div>
            )
          )}
        </div>
        <div className="guess-row">
          {guessArrays['2'][0].map((l, i) =>
            guessArrays['2'][2][i] ? (
              <div key={i} className="guess-square-correct">
                <h1 className="guess-letter">{l}</h1>
              </div>
            ) : guessArrays['2'][1][i] ? (
              <div key={i} className="guess-square-wrong-placement">
                <h1 className="guess-letter">{l}</h1>
              </div>
            ) : (
              <div key={i} className="guess-square">
                <h1 className="guess-letter">{l}</h1>
              </div>
            )
          )}
        </div>
        <div className="guess-row">
          {guessArrays['3'][0].map((l, i) =>
            guessArrays['3'][2][i] ? (
              <div key={i} className="guess-square-correct">
                <h1 className="guess-letter">{l}</h1>
              </div>
            ) : guessArrays['3'][1][i] ? (
              <div key={i} className="guess-square-wrong-placement">
                <h1 className="guess-letter">{l}</h1>
              </div>
            ) : (
              <div key={i} className="guess-square">
                <h1 className="guess-letter">{l}</h1>
              </div>
            )
          )}
        </div>
        <div className="guess-row">
          {guessArrays['4'][0].map((l, i) =>
            guessArrays['4'][2][i] ? (
              <div key={i} className="guess-square-correct">
                <h1 className="guess-letter">{l}</h1>
              </div>
            ) : guessArrays['4'][1][i] ? (
              <div key={i} className="guess-square-wrong-placement">
                <h1 className="guess-letter">{l}</h1>
              </div>
            ) : (
              <div key={i} className="guess-square">
                <h1 className="guess-letter">{l}</h1>
              </div>
            )
          )}
        </div>
        <div className="guess-row">
          {guessArrays['5'][0].map((l, i) =>
            guessArrays['5'][2][i] ? (
              <div key={i} className="guess-square-correct">
                <h1 className="guess-letter">{l}</h1>
              </div>
            ) : guessArrays['5'][1][i] ? (
              <div key={i} className="guess-square-wrong-placement">
                <h1 className="guess-letter">{l}</h1>
              </div>
            ) : (
              <div key={i} className="guess-square">
                <h1 className="guess-letter">{l}</h1>
              </div>
            )
          )}
        </div>
        <div className="guess-row">
          {guessArrays['6'][0].map((l, i) =>
            guessArrays['6'][2][i] ? (
              <div key={i} className="guess-square-correct">
                <h1 className="guess-letter">{l}</h1>
              </div>
            ) : guessArrays['6'][1][i] ? (
              <div key={i} className="guess-square-wrong-placement">
                <h1 className="guess-letter">{l}</h1>
              </div>
            ) : (
              <div key={i} className="guess-square">
                <h1 className="guess-letter">{l}</h1>
              </div>
            )
          )}
        </div>
      </div>
      <div className="keyboard">
        <div className="keyboard-row">
          {keyboardRowOne[0].map((l, i) =>
            keyboardRowOne[3][i] ? (
              <button
                key={i}
                className="keyboard-key-correct"
                onClick={() => handleKeyClick(l)}
              >
                <div className="keyboard-key-content">
                  <strong>{l}</strong>
                </div>
              </button>
            ) : keyboardRowOne[2][i] ? (
              <button
                key={i}
                className="keyboard-key-wrong"
                onClick={() => handleKeyClick(l)}
              >
                <div className="keyboard-key-content">
                  <strong>{l}</strong>
                </div>
              </button>
            ) : keyboardRowOne[1][i] ? (
              <button
                key={i}
                className="keyboard-key-used"
                onClick={() => handleKeyClick(l)}
              >
                <div className="keyboard-key-content">
                  <strong>{l}</strong>
                </div>
              </button>
            ) : (
              <button
                key={i}
                className="keyboard-key"
                onClick={() => handleKeyClick(l)}
              >
                <div className="keyboard-key-content">
                  <strong>{l}</strong>
                </div>
              </button>
            )
          )}
        </div>
        <div className="keyboard-row">
          {keyboardRowTwo[0].map((l, i) => (
            <button
              key={i}
              className="keyboard-key"
              onClick={() => handleKeyClick(l)}
            >
              <div className="keyboard-key-content">
                <strong>{l}</strong>
              </div>
            </button>
          ))}
        </div>
        <div className="keyboard-row">
          <button className="keyboard-enter" onClick={() => handleEnterClick()}>
            <div className="keyboard-key-content">
              <strong>ENTER</strong>
            </div>
          </button>
          {keyboardRowThree[0].map((l, i) => (
            <button
              key={i}
              className="keyboard-key"
              onClick={() => handleKeyClick(l)}
            >
              <div className="keyboard-key-content">
                <strong>{l}</strong>
              </div>
            </button>
          ))}
          <button
            className="keyboard-backspace"
            onClick={() => handleBackspaceClick()}
          >
            <div className="keyboard-key-content">
              <IoBackspaceOutline />
            </div>
          </button>
        </div>
      </div>
      <div className="wordle-other">
        <div className="other-info">
          <h4 className="other-info-title">Game History</h4>
          <h5>Guesses:</h5>
          <p>One: {oneGuessGames}</p>
          <p>Two: {twoGuessGames}</p>
          <p>Three: {threeGuessGames}</p>
          <p>Four: {fourGuessGames}</p>
          <p>Five: {fiveGuessGames}</p>
          <p>Six: {sixGuessGames}</p>
        </div>
        <div className="other-info">
          <h4 className="other-info-title">Dictionary</h4>
          <Dictionary word={dictionaryWord} />
        </div>
      </div>
    </div>
  )
}
