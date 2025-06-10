import './MyForm.scss';

import { useState } from "react";
import { Link } from 'react-router-dom';

function MyForm() {
   const [userLogin, setUserLogin] = useState('')
   const [userPassword, setUserPassword] = useState('')
   const [message, setMessage] = useState('')
   const [style, setStyle] = useState({})

   const user = [
      { userLogin: 'Ivan', password: 'shonada' }
   ]

   function handleLogin() {
      const found = user.find(
         (user) => user.userLogin === userLogin && user.password === userPassword
      )

      if (found) {
         setMessage(<img style={{ width: '100px' }} src="/img/smiley.webp" alt="Smiley" />)
         // setStyle({})
      } else if (userLogin === 'Ivan') {
         setMessage('Incorrect Login or password')
         setStyle({ color: 'blue' })
      } else {
         setMessage('Incorrect Login or password')
         setStyle({ color: 'red' })
      }
   }

   return (
      <div className="login-form">
         <label>
            <input
               className={style["login-label"]}
               type="text"
               placeholder='Login'
               value={userLogin}
               onChange={(e) => setUserLogin(e.target.value)} />
         </label>
         <label>
            <input
               className={style["login-label"]}
               type='password'
               placeholder='Password'
               value={userPassword}
               onChange={(e) => setUserPassword(e.target.value)}
            />
         </label>
         <button className="login-button" onClick={handleLogin}>Login</button>
         <h1 className="login-h1" style={style}>{message}</h1>
         <hr />
      </div>
   )
}

export default MyForm;