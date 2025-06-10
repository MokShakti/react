import { useState } from 'react';
import './Translator.scss';
import { Link } from 'react-router-dom';

function TranslateManager() {

   const wordList = [
      { image: '/img/apple.webp', word: 'apple', translate: 'яблуко' },
      { image: '/img/orange.jpg', word: 'orange', translate: 'апельсин' },
      { image: '/img/banana.webp', word: 'banana', translate: 'банан' },
      { image: '/img/blueberry.png', word: 'blueberry', translate: 'чорниця' },
      { image: '/img/potato.webp', word: 'potato', translate: 'картопля' }
   ]

   const [index, setIndex] = useState(0)
   const [userInput, setUserInput] = useState('')
   const [isCorrect, setIsCorrect] = useState(null)
   const [message, setMessage] = useState('')

   const current = wordList[index]

   const checkAnswer = () => {
      if (userInput.trim().toLowerCase() === current.word) {
         setMessage('Good! You are doing great!')
         setIsCorrect(true)
      } else {
         setMessage('Incorrect! Try again!')
         setIsCorrect(false)
      }
   }

   let boxClass = 'image-box'

   if (isCorrect === true) {
      boxClass += ' correct'
   }

   if (isCorrect === false) {
      boxClass += ' incorrect'
   }

   const nextWord = () => {
      if (index < wordList.length - 1) {
         setIndex(index + 1)
         setUserInput('')
         setIsCorrect(null)
         setMessage('')
      } else {
         setMessage('That was the last word!')
      }
   }


   return (
      <div className='translate-trainer'>
         <div className={boxClass}>
            <img style={{ width: '100px' }} src={current.image} alt="Translate this" />
         </div>

         <p>Translate: <strong>{current.translate}</strong></p>

         <input
            className='translatorinput'
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder='Enter english word'
         />

         <button onClick={checkAnswer}>Check</button>
         <button onClick={nextWord}>Next</button>

         {message && <p className='message'>{message}</p>}
      </div>
   )
}


export default TranslateManager;