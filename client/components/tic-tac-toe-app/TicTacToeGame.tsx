import React, { useState } from 'react'

const defaultGameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]

const winChecks = [
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],

  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
]

export default function TicTacToeGame() {
  const [gameBoard, setGameBoard] = useState(defaultGameBoard)
  const [playerOneTurn, setPlayerOneTurn] = useState(true)
  const [playerOneWin, setPlayerOneWin] = useState(false)
  const [playerTwoWin, setPlayerTwoWin] = useState(false)

  function handleSqaureClick(col, row) {
    console.log('Sqaure clicked: ' + row + ', ' + col)
    if (isEmpty(col, row)) {
      fillSquare(col, row)
      let newPlayerOneTurn = !playerOneTurn
      setPlayerOneTurn(newPlayerOneTurn)
    }
    const winner = checkWin()
    if (winner == 1) setPlayerOneWin(true)
    if (winner == 2) setPlayerTwoWin(true)
  }

  function checkWin() {
    let winner = 0
    winChecks.map((check) => {
      if (
        gameBoard[check[0][0]][check[0][1]] == 'X' &&
        gameBoard[check[1][0]][check[1][1]] == 'X' &&
        gameBoard[check[2][0]][check[2][1]] == 'X'
      ) {
        console.log('Player One Wins')
        winner = 1
      }
      if (
        gameBoard[check[0][0]][check[0][1]] == 'O' &&
        gameBoard[check[1][0]][check[1][1]] == 'O' &&
        gameBoard[check[2][0]][check[2][1]] == 'O'
      ) {
        console.log('Player Two Wins')
        winner = 2
      }
    })
    return winner
  }

  function isEmpty(col, row) {
    if (gameBoard[row][col] == '') return true
    return false
  }

  function fillSquare(col, row) {
    let newGameBoard = [...gameBoard]
    if (playerOneTurn) {
      newGameBoard[row][col] = 'X'
    } else {
      newGameBoard[row][col] = 'O'
    }
    setGameBoard(newGameBoard)
  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className="ttt-player-turn">
        {playerOneTurn ? (
          <h2>Player One's Turn (X)</h2>
        ) : (
          <h2>Player Two's Turn (O)</h2>
        )}
      </div>
      <div className="ttt-board">
        {gameBoard.map((row, i) => (
          <div key={i} className="ttt-board-row">
            {row.map((square, j) => (
              <div
                key={j}
                className="ttt-board-square"
                onClick={() => handleSqaureClick(j, i)}
              >
                <p>{square}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="ttt-player-win">
        {playerOneWin ? (
          <h2>Player One Wins!</h2>
        ) : playerTwoWin ? (
          <h2>Player Two Wins!</h2>
        ) : null}
      </div>
    </div>
  )
}
