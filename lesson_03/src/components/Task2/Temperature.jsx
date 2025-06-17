
// Умова: Задача 2. З клавіатури вводиться температура. Змінювати колір фону у залежності від значення:
// менше нуля – білий;
// від 0 до 10 – синій;
// від 11 до 22 – зелений;
// вище 22 – червоний;
// 
// Реалізувати з класами і стилями.

import { useState, useEffect } from "react";
import './Temperature.scss';


function Temperature() {

   const [temp, setTemp] = useState('')
   const [bgClass, setBgClass] = useState('default')

   useEffect(() => {
      const num = parseFloat(temp)

      if (isNaN(num)) {
         setBgClass('default')
      } else if (num < 0) {
         setBgClass('white')
      } else if (num <= 10) {
         setBgClass('blue')
      } else if (num <= 22) {
         setBgClass('green')
      } else {
         setBgClass('red')
      }
   }, [temp])

   return (
      <div className={`temperature ${bgClass}`}>

         <input
            type="number"
            value={temp}
            onChange={e => setTemp(e.target.value)}
            placeholder="Enter temperature here"
         />

      </div>
   );
}

export default Temperature;