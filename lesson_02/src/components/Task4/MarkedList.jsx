import './MarkedList.scss';
import { Link } from 'react-router-dom';

function List() {

   const employee = [
      {
         id: '1',
         surname: 'Jackson',
         salary: 10000,
      },

      {
         id: '2',
         surname: 'Winchester',
         salary: 10000,
      },

      {
         id: '3',
         surname: 'Campbell',
         salary: 10000,
      },

      {
         id: '4',
         surname: 'Grimes',
         salary: 10000,
      },

      {
         id: '5',
         surname: 'Negan',
         salary: 10000,
      },

   ]

   return (
      <ul>
         {employee.map((person) => (
            <li key={person.id}>{person.surname}: {person.salary}</li>
         ))}
      </ul>
   );
}

export default List;