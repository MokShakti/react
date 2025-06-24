import './App.css'
import "./App.scss";

import { Routes, Route, Link } from 'react-router-dom';
import Task1 from './components/Task1/Messenger'
import Task2 from './components/Task2/Game'

function App() {

   return (
      <div className="wrapper">
         <Routes>
            <Route path="/" element={
               <div className="task-list">
                  <h2>Tasks list:</h2>
                  <ul>
                     <li className='tasklist'><Link to="/task1">Task 1: <br />
                        Приклад. Створити імітатор мессенджера. Є можлиість додавати/відображати повідомлення і ставити лайки (додайте стилі на свій розсуд).
                     </Link></li>
                     <li className='tasklist'><Link to="/task2">Task 2: <br />
                        Задача. Гра “Вгадай число”. Правила гри:
                        1) комп”ютер генерує трицифрове число;
                        2) кожен гравець по черзі задає цифру, якої ще не було (відсліковуємо, щоб цифри не повторювалися гравцями — не дозволяємо повторно ввести (блокуємо кнопку “Зробити хід”)).
                        3) якщо цифру вгадано, вона відображаться у полі гри “Число”;
                        4) програє той, хто вгадав останню цифру.
                        Бажано відображати біля області кожного гравця цифри, які він вгадав
                     </Link></li>
                  </ul>
               </div>
            } />
            <Route path="/Task1" element={<Task1 />} />
            <Route path="/Task2" element={<Task2 />} />
         </Routes>
      </div>
   )
}

export default App
