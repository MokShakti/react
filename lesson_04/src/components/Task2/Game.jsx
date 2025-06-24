import './Game.scss';

import { useEffect, useState } from 'react'

import Player from './Player'
import NumberDisplay from './NumberDisplay';
import { secretLength, digitRange, player1, player2 } from './constants';

function Game() {

   const [secret, setSecret] = useState(null)
   const [guessed, setGuessed] = useState([null, null, null])
   const [usedDigits, setUsedDigits] = useState([])
   const [playerGuesses, setPlayerGuesses] = useState({ player1: [], player2: [] })
   const [turn, setTurn] = useState('player1')
   const [gameOver, setGameOver] = useState(false)
   const [loser, setLoser] = useState(null)

   useEffect(() => {
      generateSecret()
   }, [])

   function generateSecret() {
      const digits = []
      while (digits.length < secretLength) {
         const digit = Math.floor(Math.random() * digitRange)
         if (!digits.includes(digit)) {
            digits.push(digit)
         }
      }

      setSecret(digits)
      setGuessed([null, null, null])
      setUsedDigits([])
      setPlayerGuesses({ player1: [], player2: [] })
      setTurn('player1')
      setGameOver(false)
      setLoser(null)
   }

   function handleGuess(player, digit) {
      if (usedDigits.includes(digit)) {
         return
      }

      setUsedDigits([...usedDigits, digit])

      setPlayerGuesses({
         ...playerGuesses,
         [player]: [...playerGuesses[player], digit]
      })

      if (secret.includes(digit)) {
         const updated = [...guessed]

         for (let i = 0; i < secret.length; i++) {
            if (secret[i] === digit) {
               updated[i] = digit
            }
         }

         setGuessed(updated)

         if (!updated.includes(null)) {
            setGameOver(true)
            setLoser(player)
            return
         }
      }

      setTurn(player === player1 ? player2 : player1)
   }

   return (
      <div className='game-container'>
         <NumberDisplay guessed={guessed} />
         <Player
            name="player1"
            onGuess={handleGuess}
            disableDigits={usedDigits}
            guessedByPlayer={playerGuesses.player1}
            isCurrentTurn={turn === 'player1'}
            gameOver={gameOver}
         />
         <Player
            name="player2"
            onGuess={handleGuess}
            disableDigits={usedDigits}
            guessedByPlayer={playerGuesses.player2}
            isCurrentTurn={turn === 'player2'}
            gameOver={gameOver}
         />

         {gameOver && loser && (
            <div>
               <p className='loser-message'>Програв: {loser === 'player1' ? 'Гравець 1' : 'Гравець 2'}</p>
               <button className='new-game-button' onClick={generateSecret}>New game</button>
            </div>
         )}
      </div>
   );
}

export default Game;