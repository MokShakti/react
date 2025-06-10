import './App.css'
import "./App.scss";

import { Routes, Route, Link } from 'react-router-dom';
import Task1 from './components/Task1/MyForm';
import Task2 from './components/Task2/AirplaneTickets';
import Task3 from './components/Task3/Translator';
import Task4 from './components/Task4/MarkedList';
import Task5 from './components/Task5/WebSearch';
import Task6 from './components/Task6/Kitchen';

function App() {
   return (
      <div className="wrapper">
         <Routes>
            <Route path="/" element={
               <div className="task-list">
                  <h2>Tasks list:</h2>
                  <ul>
                     <li className='tasklist'><Link to="/task1">Task 1: <br />
                        Вводимо логіна і пароль. Якщо логін вірний відображаємо смайл. Якщо ні, то:<br />
                        1) якщо логін = Іван – колір повідомлення про помилку синій;<br />
                        2) якщо хтось інший, то колір повідомлення червоний
                     </Link></li>
                     <li className='tasklist'><Link to="/task2">Task 2:<br />
                        З випадаючого списку вибираємо клас квитка у літаку. Якщо:<br />
                        1) бізнес -  виводимо елементи для вибору газети та коньяку (якщо вибрано коньяк, то запропонувати закуску (так/ні)), на фоні зображення бізнес кают;<br />
                        2) економ – виводимо елементи для вибору типу пива і чипсів, на фоні хмарки.
                     </Link></li>
                     <li className='tasklist'><Link to="/task3">Task 3:<br />
                        Елемент тренажера англійської. Виводимо зображення елемента і слово. Користувач вводить відповідь. Якщо вірно – відтворюємо фразу «Добре. Молодець!» (і додаємо зелену рамку до елемента), якщо ні - то відтворюємо фразу «Невірно, спробуйте ще раз» (і додаємо червону рамку).</Link></li>
                     <li className='tasklist'><Link to="/task4">Task 4: Вивести список як маркований список з елементами у форматі (name: salary).</Link></li>
                     <li className='tasklist'><Link to="/task5">Task 5: Самостійно сформуйте масив даних та виведіть фрагмент на зразок поданого (дані не обов’язково повинні співпадати).</Link></li>
                     <li className='tasklist'><Link to="/task6">Task 6: Задача. На кухню поступають замовлення. Спочатку ми додаємо їх у список “Очікують на виконання”, якщо повар береться робити — замовлення переходить у список “Виконуються”,   якщо замовлення виконано — переходить у список “Готові до виносу”. Якщо натиснути на “Подано” - страва зникає з таблиці.</Link></li>
                  </ul>
               </div>
            } />
            <Route path="/task1" element={<Task1 />} />
            <Route path="/task2" element={<Task2 />} />
            <Route path="/task3" element={<Task3 />} />
            <Route path="/task4" element={<Task4 />} />
            <Route path="/task5" element={<Task5 />} />
            <Route path="/task6" element={<Task6 />} />
         </Routes>
      </div>
   )
}

export default App