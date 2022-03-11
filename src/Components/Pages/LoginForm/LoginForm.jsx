import React,{useState} from 'react';

import axios from 'axios';
import { NavLink } from 'react-router-dom';

export const LoginForm = () => {
  
  const URL = "https://backend-edw.herokuapp.com/login";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    
    e.preventDefault();

    axios.post(URL, {
      "username":username,
      "password": password
    })
    .then(response => alert(JSON.stringify(response.data.Message)))

  }
 
  return (
    <form className='form'>
        <h2>Log In</h2>               
          <input onChange={e => setUsername(e.target.value)} type="text" name="" id="username-1" placeholder='Enter your user name' className='form-input'/>            
          <input onChange={e => setPassword(e.target.value)} type="password" name="" id="pass-1" placeholder='Enter your password' className='form-input'/>             
          <button onClick={login} className='btn-principal'>Log In</button>
          <NavLink to="/register">
            <button className='btn-phantom'>Register</button>
          </NavLink>
      </form>    
  )
}
