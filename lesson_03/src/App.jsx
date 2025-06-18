import './App.css'
import "./App.scss";

import { Routes, Route, Link } from 'react-router-dom';
import Task2 from './components/Task2/Temperature'
import Task3 from './components/Task3/Speed'
import Task5 from './components/Task5/Competition'

function App() {
   return (
      <div className="wrapper">
         <Routes>
            <Route path="/" element={
               <div className="task-list">
                  <h2>Tasks list:</h2>
                  <ul>
                     <li className='tasklist'><Link to="/task2">Task 2: <br />
                        З клавіатури вводиться температура. Змінювати колір фону у залежності від значення:<br />
                        менше нуля – білий;<br />
                        від 0 до 10 – синій;<br />
                        від 11 до 22 – зелений;<br />
                        вище 22 – червоний;<br />
                        Реалізувати з класами і стилями.
                     </Link></li>
                     <li className='tasklist'><Link to="/task3">Task 3: <br />
                        Вводиться дозволена швидкість і поточна швидкість авто. Якщо не введено дозволену швидкість, то елемент введення поточної швидкості заблокований. Якщо швидкість менше 50% дозволеної, то колір input – оранжевий, якщо від 50% до 100% - зелений, вище 100% - червоний. Якщо значення вище 90% починає блимати повідомлення «Увага!»
                     </Link></li>
                     <li className='tasklist'><Link to="/task5">Task 5: <br />
                        Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону стрілку спортсмен переміщається у загальний список.
                     </Link></li>
                  </ul>
               </div>
            } />
            <Route path="/Task2" element={<Task2 />} />
            <Route path="/Task3" element={<Task3 />} />
            <Route path="/Task5" element={<Task5 />} />
         </Routes>
      </div>
   )
}

export default App