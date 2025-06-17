
//Умова: Вводиться дозволена швидкість і поточна швидкість авто. Якщо не введено дозволену швидкість, то елемент введення поточної швидкості заблокований. Якщо швидкість менше 50% дозволеної, то колір input – оранжевий, якщо від 50% до 100% - зелений, вище 100% - червоний. Якщо значення вище 90% починає блимати повідомлення «Увага!»

import { useEffect, useState } from "react";
import './Speed.scss';

function Speed() {

   const [allowed, setAllowed] = useState('')
   const [speed, setSpeed] = useState('')
   const [bgClass, setBgClass] = useState('default')
   const [showWarning, setShowWarning] = useState(false)

   useEffect(() => {
      const max = parseFloat(allowed)
      const current = parseFloat(speed)

      if (isNaN(max) || isNaN(current)) {
         setBgClass('default')
         setShowWarning(false)
         return
      }

      const percent = (current / max) * 100

      if (percent < 50) {
         setBgClass('orange')
         setShowWarning(false)
      } else if (percent <= 100) {
         setBgClass('green')
         setShowWarning(percent > 90)
      } else {
         setBgClass('red')
         setShowWarning(true)
      }
   }, [allowed, speed])

   return (
      <div className="speed">
         <input
            className={`speed ${bgClass}`}
            type="number"
            value={allowed}
            onChange={e => setAllowed(e.target.value)}
            placeholder="Enter allowed here"
         />

         <input
            className={`speed ${bgClass}`}
            type="number"
            value={speed}
            onChange={e => setSpeed(e.target.value)}
            placeholder="Enter current here"
            disabled={!allowed}
         />

         {showWarning && (
            <p className="blinking">Warning! Speeding</p>
         )}
      </div>
   );
}

export default Speed;