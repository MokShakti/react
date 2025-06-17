//Умова: Задача 5. Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону стрілку спортсмен переміщається у загальний список.

import { useState } from "react";
import './Competition.scss';

function Competition() {

   const [available, setAvailable] = useState([
      { name: "Liam Stone" },
      { name: "Emma Blake" },
      { name: "Noah Grant" },
      { name: "Ava Cole" },
      { name: "Elijah Reed" },
      { name: "Sophia Lane" },
      { name: "Mason Ford" },
      { name: "Isabella Hart" },
      { name: "Logan West" },
      { name: "Mia Brooks" }
   ])

   const [selected, setSelected] = useState([])

   const handleAdd = (athlete) => {
      setAvailable(prev => prev.filter(a => a.name !== athlete.name))
      setSelected(prev => [...prev, athlete])
   }

   const handleRemove = (athlete) => {
      setSelected(prev => prev.filter(a => a.name !== athlete.name))
      setAvailable(prev => [...prev, athlete])
   }

   return (
      <div className="competition">
         <div className="column">
            <h3>Available</h3>
            {available.map((athlete, index) => (
               <div key={index} className="item">
                  {athlete.name}
                  <button onClick={() => handleAdd(athlete)}>Goes to competition</button>
               </div>
            ))}
         </div>

         <div className="column">
            <h3>Selected</h3>
            {selected.map((athlete, index) => (
               <div key={index} className="item">
                  {athlete.name}
                  <button onClick={() => handleRemove(athlete)}>Remove from competition</button>
               </div>
            ))}
         </div>
      </div>
   );
}

export default Competition;