import { useState } from "react";

function MessengerInput({ onAdd }) {
   const [message, setMessage] = useState('')

   return (
      <div>
         <div>
            <input
               className="message-input"
               type="text"
               value={message}
               onChange={(e) => setMessage(e.target.value)}
            />
            <button className="messengeradd" onClick={() => {
               if (!message.trim()) return
               onAdd(message)
               setMessage('')
            }}>Send</button>
         </div>
      </div>
   )
}

export default MessengerInput;