import { useState, useMemo } from "react";
import ResultDisplay from "./ResultDisplay"
import "./Calculator.css"

//Умова: Оптимізація вибіркового рендеру з useMemo та React.memo. Створіть компонент - калькулятор, який має два незалежні поля вводу: одне для числа A і одне для числа B.Також є окремий компонент ResultDisplay, який відображає A + B.Обгорніть ResultDisplay у React.memo().Використайте useMemo в батьківському компоненті, щоб обчислити A + B і передати цей результат до ResultDisplay.Переконайтеся, що ResultDisplay ререндериться лише тоді, коли змінюються A або B, а не коли змінюється інший незалежний стан у батьківському компоненті(наприклад, лічильник, що не впливає на A чи B).


function Calculator() {

   const [a, setA] = useState('')
   const [b, setB] = useState('')
   const [count, setCount] = useState(0)

   const sum = useMemo(() => {
      const numA = parseFloat(a) || 0;
      const numB = parseFloat(b) || 0;
      return numA + numB;
   }, [a, b])

   return (
      <div className="calculator">
         <label>
            A:
            <input
               type="number"
               value={a}
               onChange={e => setA(e.target.value)}
            />
         </label>
         <label>
            B:
            <input
               type="number"
               value={b}
               onChange={e => setB(e.target.value)}
            />
         </label>

         <ResultDisplay value={sum} />
         <hr />

         <div className="counter">
            <button onClick={() => setCount((c) => c + 1)}>+1 to the counter</button>
            <p>Counter: {count}</p>
         </div>
      </div>
   );
}

export default Calculator;