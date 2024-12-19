import { useState } from 'react'
import './App.css'
import conffeti from 'canvas-confetti'

import { Square } from './components/Square'
import { TURN } from './constants'
import { checkWinnerFrom } from './logic/board'
import { WinnerModal } from './components/WinnerModal'



function App() {

  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURN.X)
  const [winner, setWinner] = useState(null)



  const checkEndGame = (newBoard) => {
    // Al llenar completamente el tablero, y no tener ganador
    return newBoard.every((square) => square !== null)
  }

  const resetGame = () => { // Reseteamos el tablero, los turnos y el ganador.
    setBoard(Array(9).fill(null))
    setTurn(TURN.X)
    setWinner(null)
  }

  const updateBoard = (index) => {

    if (board[index] || winner) return // Si la celda contiene algo o hay un ganador, no se actualiza.

    const newBoard = [...board] // Realizamos una capia del tablero
    newBoard[index] = turn // Asignamos el valor a la celda correspondiente

    setBoard(newBoard) // Actualizamos el tablero

    const newTurn = turn === TURN.X ? TURN.O : TURN.X
    setTurn(newTurn) // Actualizamos el turno

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) { // Actualizamos el ganador
      conffeti()
      setWinner(newWinner) // Si hay un ganador x u o
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // si fue un empate
    }
  }

  return (
    <main className='board'>
      <h1>Tic - Tac - Toe</h1>
      <button onClick={resetGame} >Reiniciar Juego</button>
      <section className='game'>
        {
          board.map((square, index) => (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          ))
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURN.X} >{TURN.X}</Square>
        <Square isSelected={turn === TURN.O} >{TURN.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>

  )
}

export default App
