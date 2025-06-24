import { useState } from "react";

function Player({
   name,
   onGuess,
   disableDigits,
   guessedByPlayer,
   isCurrentTurn,
   gameOver
}) {
   const [input, setInput] = useState('')

   const handleClick = () => {
      const digit = Number(input)
      const isEmpty = input === ''
      const isNotNumber = isNaN(digit)
      const isOutOfRange = digit < 0 || digit > 9
      const isUsed = disableDigits.includes(digit)

      if (isEmpty || isNotNumber || isOutOfRange || isUsed || !isCurrentTurn || gameOver) {
         return
      }

      onGuess(name, digit)
      setInput('')
   }

   return (
      <div className={`player ${!isCurrentTurn ? 'inactive' : ''}`}>
         <h3>{name === 'player1' ? 'Player 1' : 'Player 2'}</h3>
         <input
            type="text"
            value={input}
            maxLength={1}
            onChange={(e) => setInput(e.target.value)}
            disabled={!isCurrentTurn || gameOver}
         />
         <button
            onClick={handleClick}
            disabled={
               !isCurrentTurn ||
               disableDigits.includes(Number(input)) ||
               gameOver
            }
         >
            Your move
         </button>

         <p className="guessed-digits">Number you've tried: {guessedByPlayer.join(', ')}</p>
      </div>
   )
}

export default Player;