import React, { useState } from 'react'

const defaultBoard = [
  [
    { square: 'gray', team: 'black', piece: 'rook1' },
    { square: 'green', team: 'black', piece: 'knight1' },
    { square: 'gray', team: 'black', piece: 'bishop1' },
    { square: 'green', team: 'black', piece: 'queen' },
    { square: 'gray', team: 'black', piece: 'king' },
    { square: 'green', team: 'black', piece: 'bishop2' },
    { square: 'gray', team: 'black', piece: 'knight2' },
    { square: 'green', team: 'black', piece: 'rook2' },
  ],
  [
    { square: 'green', team: 'black', piece: 'pawn1' },
    { square: 'gray', team: 'black', piece: 'pawn2' },
    { square: 'green', team: 'black', piece: 'pawn3' },
    { square: 'gray', team: 'black', piece: 'pawn4' },
    { square: 'green', team: 'black', piece: 'pawn5' },
    { square: 'gray', team: 'black', piece: 'pawn6' },
    { square: 'green', team: 'black', piece: 'pawn7' },
    { square: 'gray', team: 'black', piece: 'pawn8' },
  ],
  [
    { square: 'gray', team: null, piece: null },
    { square: 'green', team: null, piece: null },
    { square: 'gray', team: null, piece: null },
    { square: 'green', team: null, piece: null },
    { square: 'gray', team: null, piece: null },
    { square: 'green', team: null, piece: null },
    { square: 'gray', team: null, piece: null },
    { square: 'green', team: null, piece: null },
  ],
  [
    { square: 'green', team: null, piece: null },
    { square: 'gray', team: null, piece: null },
    { square: 'green', team: null, piece: null },
    { square: 'gray', team: null, piece: null },
    { square: 'gray', team: null, piece: null },
    { square: 'green', team: null, piece: null },
    { square: 'gray', team: null, piece: null },
    { square: 'green', team: null, piece: null },
  ],
  [
    { square: 'gray', team: null, piece: null },
    { square: 'green', team: null, piece: null },
    { square: 'gray', team: null, piece: null },
    { square: 'green', team: null, piece: null },
    { square: 'gray', team: null, piece: null },
    { square: 'green', team: null, piece: null },
    { square: 'gray', team: null, piece: null },
    { square: 'green', team: null, piece: null },
  ],
  [
    { square: 'green', team: null, piece: null },
    { square: 'gray', team: null, piece: null },
    { square: 'green', team: null, piece: null },
    { square: 'gray', team: null, piece: null },
    { square: 'gray', team: null, piece: null },
    { square: 'green', team: null, piece: null },
    { square: 'gray', team: null, piece: null },
    { square: 'green', team: null, piece: null },
  ],
  [
    { square: 'gray', team: 'white', piece: 'pawn1' },
    { square: 'green', team: 'white', piece: 'pawn2' },
    { square: 'gray', team: 'white', piece: 'pawn3' },
    { square: 'green', team: 'white', piece: 'pawn4' },
    { square: 'gray', team: 'white', piece: 'pawn5' },
    { square: 'green', team: 'white', piece: 'pawn6' },
    { square: 'gray', team: 'white', piece: 'pawn7' },
    { square: 'green', team: 'white', piece: 'pawn8' },
  ],
  [
    { square: 'green', team: 'white', piece: 'rook1' },
    { square: 'gray', team: 'white', piece: 'knight1' },
    { square: 'green', team: 'white', piece: 'bishop1' },
    { square: 'gray', team: 'white', piece: 'queen' },
    { square: 'green', team: 'white', piece: 'king' },
    { square: 'gray', team: 'white', piece: 'bishop2' },
    { square: 'green', team: 'white', piece: 'knight2' },
    { square: 'gray', team: 'white', piece: 'rook2' },
  ],
]

export default function ChessGame() {
  const [gameBoard, setGameBoard] = useState(defaultBoard)
  return (
    <div className="chess-game">
      <h1>Chess Game</h1>
      <div className="chess-board">
        {gameBoard.map((row) => (
          <div className="chess-board-row">
            {row.map((square) => (
              <div className="chess-board-square">
                <p>{square.square}</p>
                <p>{square.colour}</p>
                <p>{square.piece}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
