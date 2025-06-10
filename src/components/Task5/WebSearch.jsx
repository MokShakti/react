import './WebSearch.scss';
import { Link } from 'react-router-dom';

function WebSearch() {

   const data = [
      {
         site: "W3SchoolsUA",
         url: "https://w3schoolsua.github.io",
         title: "React Підручник – W3Schools українською - GitHub Pages",
         description: "React — це бібліотека JavaScript для створення інтерфейсів користувача. React використовується для створення односторінкових програм. React дозволяє нам..."
      },
      {
         site: "React",
         url: "https://uk.legacy.reactjs.org",
         title: "Посібник: знайомство з React",
         description: "Даний посібник не потребує попереднього ознайомлення з React. У цьому посібнику ми працюватимемо над створенням маленької гри."
      },
      {
         site: "W3SchoolsUA",
         url: "https://w3schoolsua.github.io",
         title: "React Старт – W3Schools українською",
         description: "Підручник React. Старт. React безпосередньо в HTML. Напишемо завдання React. Запустити програму React. Змінити програму React. Що далі?"
      }
   ]

   return (
      <div className='web-results'>
         {data.map((item, index) => (
            <div className='web-item' key={index}>

               <a className='web-site' href={item.url} target='_blank'>{item.site}</a>

               <a className='web-url' href={item.url} target='_blank'>{item.url}</a>

               <div className='webtitle'>{item.title}</div>
               <div className='web-description'>{item.description}</div>
            </div>
         ))}
      </div>);
}

export default WebSearch;