import React, { useState } from 'react'
import { FaSquare } from 'react-icons/fa'

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
  const [playedGameBoards, setPlayedGameBoards] = useState(new Array(0))
  const [gamePlayed, setGamePlayed] = useState(false)
  const [playerOneTurn, setPlayerOneTurn] = useState(true)
  const [playerOneWin, setPlayerOneWin] = useState(false)
  const [playerTwoWin, setPlayerTwoWin] = useState(false)
  const [gameDrawn, setGameDrawn] = useState(false)
  const [totalP1Wins, setTotalP1Wins] = useState(0)
  const [totalP2Wins, setTotalP2Wins] = useState(0)
  const [totalDraws, setTotalDraws] = useState(0)
  const [nextGameVisible, setNextGameVisible] = useState(false)

  function handleSqaureClick(col, row) {
    if (!playerOneWin && !playerTwoWin && boardPlayable()) {
      console.log('Sqaure clicked: ' + row + ', ' + col)
      if (isEmpty(col, row)) {
        fillSquare(col, row)
        let newPlayerOneTurn = !playerOneTurn
        setPlayerOneTurn(newPlayerOneTurn)
      }
      const winner = checkWin()
      if (winner == 1) {
        setPlayerOneWin(true)
        setTotalP1Wins(totalP1Wins + 1)
        gameFinished()
      }
      if (winner == 2) {
        setPlayerTwoWin(true)
        setTotalP2Wins(totalP2Wins + 1)
        gameFinished()
      }
      if (!boardPlayable() && !playerOneWin && !playerTwoWin) {
        setGameDrawn(true)
        setTotalDraws(totalDraws + 1)
        gameFinished()
      }
    }
  }

  function gameFinished() {
    setGamePlayed(true)
    setNextGameVisible(true)
    console.log('next game visible')
  }

  function handleNextGame() {
    let newPlayedGameBoard = [...playedGameBoards]
    newPlayedGameBoard.push([...gameBoard])
    setPlayedGameBoards(newPlayedGameBoard)
    setGameBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ])
    setPlayerOneTurn(true)
    setPlayerOneWin(false)
    setPlayerTwoWin(false)
    setGameDrawn(false)
    setNextGameVisible(false)
  }

  function boardPlayable() {
    let playable = false
    gameBoard.map((row) => {
      row.map((square) => {
        if (square == '') playable = true
      })
    })
    return playable
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
      <div className="ttt-board-and-table">
        <div className="ttt-board">
          {gameBoard.map((row, i) => (
            <div key={i} className="ttt-board-row">
              {row.map((square, j) => (
                <div
                  key={j}
                  className="ttt-board-square"
                  onClick={() => handleSqaureClick(j, i)}
                >
                  <h1>{square}</h1>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="ttt-table">
          <table>
            <tr>
              <th className="ttt-table-element">Player 1</th>
              <th className="ttt-table-element">Draw</th>
              <th className="ttt-table-element">Player 2</th>
            </tr>
            <tr>
              <td className="ttt-table-element">{totalP1Wins}</td>
              <td className="ttt-table-element">{totalDraws}</td>
              <td className="ttt-table-element">{totalP2Wins}</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="ttt-next-game">
        {nextGameVisible ? (
          <button onClick={() => handleNextGame()}>Next game</button>
        ) : null}
      </div>
      <div className="ttt-player-win">
        {playerOneWin ? (
          <h2>Player One Wins!</h2>
        ) : playerTwoWin ? (
          <h2>Player Two Wins!</h2>
        ) : gameDrawn ? (
          <h2>Game Drawn!</h2>
        ) : null}
      </div>

      {gamePlayed ? (
        <>
          <h2>Previous Games</h2>
          <div className="ttt-prev-boards">
            {playedGameBoards.map((board) => (
              <div className="ttt-prev-board">
                {board.map((row) => (
                  <div className="ttt-prev-board-row">
                    {row.map((square) => (
                      <div className="ttt-prev-board-square">
                        <h3>{square}</h3>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}
