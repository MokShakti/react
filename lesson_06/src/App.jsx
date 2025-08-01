import './App.css'
import "./App.scss";

import { Routes, Route, Link } from 'react-router-dom';
import Task1 from './components/Task1/Calculator'
import Task2 from './components/Task2/DataGrid'
import Task3 from './components/Task3/WindowSizeDisplay'
import Task4 from './components/Task4/SearchWithDebounce'

function App() {

   return (
      <div className="wrapper">
         <Routes>
            <Route path="/" element={
               <div className="task-list">
                  <h2>Tasks list:</h2>
                  <ul>
                     <li className='tasklist'><Link to="/task1">Task 1: <br />
                        Оптимізація вибіркового рендеру з useMemo та React.memo
                        Створіть компонент-калькулятор, який має два незалежні поля вводу: одне для числа A і одне для числа B. Також є окремий компонент ResultDisplay, який відображає A + B. Обгорніть ResultDisplay у React.memo(). Використайте useMemo в батьківському компоненті, щоб обчислити A + B і передати цей результат до ResultDisplay. Переконайтеся, що ResultDisplay ререндериться лише тоді, коли змінюються A або B, а не коли змінюється інший незалежний стан у батьківському компоненті (наприклад, лічильник, що не впливає на A чи B).
                     </Link></li>
                     <li className='tasklist'><Link to="/task2">Task 2: <br />
                        Задача 2. Таблиця з фільтрацією та сортуванням, чутлива до UI:

                        - Створіть компонент DataGrid (батьківський) та GridRow (дочірній). <br />

                        - DataGrid отримує великий масив даних, має поле вводу для фільтрації, кнопки для сортування за різними колонками. <br />

                        - GridRow (обгорнутий у React.memo) відображає один рядок даних. <br />

                        - Використайте useDeferredValue для пошукового запиту та/або параметрів сортування. <br />

                        - Використайте useMemo для обчислення відфільтрованих та відсортованих даних на основі відкладених значень. <br />

                        - Використайте useCallback для функцій-обробників сортування та інших інтерактивних елементів, які передаються до дочірніх компонентів. <br />

                        - Мета: забезпечити швидкий відгук на введення та кліки, навіть якщо обробка даних займає час.
                     </Link></li>
                     <li className='tasklist'><Link to="/task3">Task 3: <br />
                        useWindowSize – розмір вікна браузера
                        Створіть кастомний хук useWindowSize, який повертає поточну ширину та висоту вікна браузера. Він повинен оновлюватися при зміні розміру вікна.
                        Створіть компонент, який відображає поточні розміри вікна браузера (ширина x висота), використовуючи useWindowSize. На основі розмірів відображати іконки монітора, планшета або телефона.
                     </Link></li>
                     <li className='tasklist'><Link to="/task4">Task 4: <br />
                        useDebounce – відкладений виклик функції
                        Створіть кастомний хук useDebounce, який приймає значення та затримку в мілісекундах. Він повинен повертати "відкладене" значення, яке оновлюється лише після того, як минув заданий час без змін.
                        Створіть поле пошуку, де результати пошуку оновлюються не відразу після кожного символу, а з невеликою затримкою (наприклад, 500мс) після зупинки введення, використовуючи useDebounce.
                     </Link></li>
                  </ul>
               </div>
            } />
            <Route path="/Task1" element={<Task1 />} />
            <Route path="/Task2" element={<Task2 />} />
            <Route path="/Task3" element={<Task3 />} />
            <Route path="/Task4" element={<Task4 />} />
         </Routes>
      </div>
   )
}

export default App