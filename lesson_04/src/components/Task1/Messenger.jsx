//Умова: Приклад. Створити імітатор мессенджера. Є можлиість додавати/відображати повідомлення і ставити лайки (додайте стилі на свій розсуд).

import { useState } from 'react'
import MessengerInput from './MessengerInput'
import './Messenger.scss';

function Messenger() {
   const [messageList, setMessageList] = useState([])

   function handleAddMessage(message) {
      setMessageList(prev => [...prev, { id: Date.now(), text: message, likes: 0 }])
   }

   function handleLike(id) {
      setMessageList(prev =>
         prev.map(msg =>
            msg.id === id ? { ...msg, likes: msg.likes + 1 } : msg
         )
      )
   }

   return (
      <div className='messenger'>
         <h2 className='messenger-title'>Messenger</h2>
         <MessengerInput onAdd={handleAddMessage} />
         <ul className='message-list'>
            {messageList.map(msg => (
               <li className='messengerli' key={msg.id}>
                  {msg.text} - ❤️ {msg.likes}
                  <button className='actions' onClick={() => handleLike(msg.id)}>Like</button>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Messenger;