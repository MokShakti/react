import './Kitchen.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Cook() {

   const [dish, setDish] = useState('')
   const [waitingList, setWaitingList] = useState([])
   const [processingList, setProcessingList] = useState([])
   const [completedList, setCompletedList] = useState([])

   const addDish = () => {
      if (dish.trim()) {
         setWaitingList([...waitingList, dish.trim()])
         setDish('')
      }
   }

   const moveToProcessing = (item) => {
      setWaitingList(waitingList.filter(d => d !== item))
      setProcessingList([...processingList, item])
   }

   const moveToCompleted = (item) => {
      setProcessingList(processingList.filter(d => d !== item))
      setCompletedList([...completedList, item])
   }

   const removeCompleted = (item) => {
      setCompletedList(completedList.filter(d => d !== item))
   }

   return (
      <div className="kitchen">
         <div className="input-row">
            <input
               type="text"
               value={dish}
               onChange={e => setDish(e.target.value)}
               placeholder="New dish to cook"
            />
            <button onClick={addDish}>Add</button>
         </div>

         <div className="columns">
            <div className="column">
               <h4>Waiting to process</h4>
               <ul>
                  {waitingList.map(item => (
                     <li key={item}>
                        {item}
                        <button onClick={() => moveToProcessing(item)}>Cook</button>
                     </li>
                  ))}
               </ul>
            </div>

            <div className="column">
               <h4>Processing</h4>
               <ul>
                  {processingList.map(item => (
                     <li key={item}>
                        {item}
                        <button onClick={() => moveToCompleted(item)}>Done</button>
                     </li>
                  ))}
               </ul>
            </div>

            <div className="column">
               <h4>Ready to serve</h4>
               <ul>
                  {completedList.map(item => (
                     <li key={item}>
                        {item}
                        <button onClick={() => removeCompleted(item)}>Served</button>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
}

export default Cook;