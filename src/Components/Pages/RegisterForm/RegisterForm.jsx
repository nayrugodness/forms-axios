import axios from 'axios';
import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';

export const RegisterForm = () => {

    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");   


  const url = "https://backend-edw.herokuapp.com/usuario";    
  
  const register = (e) => {
    e.preventDefault();
    axios.post(url,{
      name: name,
      username:userName,
      password:password
    })
    .then(response => response)
    .then(data => alert(JSON.stringify(data.data.Message)))  
  }
  return (
    <>
      <form className='form'>
        <h2>Register</h2>
          <input onChange={e=>setName(e.target.value)} type="text" name="" id="name-1" placeholder='Enter your name' className='form-input'/>         
          <input onChange={e=>setUserName(e.target.value)} type="text" name="" id="username-1" placeholder='Enter your user name' className='form-input'/>          
          <input onChange={e=>setPassword(e.target.value)} type="password" name="" id="pass-1" placeholder='Enter your password' className='form-input'/>                 
          <button onClick={register} className='btn-principal'>Register</button>
          <NavLink to="/"><button className='btn-phantom'>Log In</button></NavLink>
      </form>    
    </>
  )
}
