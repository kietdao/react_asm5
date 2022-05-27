import { React, useState, useEffect } from 'react'
import './Login.css'
import { useNavigate, Navigate } from 'react-router-dom'

export default function Login(props) {

  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const userInfo = {username: 'admin', password: 'admin'}
  const navigate = useNavigate()
  
  const checkLogin = () => {
    if(username === userInfo.username && password === userInfo.password) {
      localStorage.setItem('user', JSON.stringify({username, password}))
      localStorage.setItem('isLogin', JSON.stringify(true))
      // props.getUser(JSON.parse(sessionStorage.getItem('user')))
      navigate('/todo')
    } 
  }
 
  return (
    <div className='login-form'>
      <label>User name:</label> 
      <input type='text' name='username' placeholder='Enter your user name...' onBlur={(e) => setUserName(e.target.value)}/>
      <label>Password:</label> 
      <input type='password' name='password' placeholder='Enter your password...' onBlur={(e) => setPassword(e.target.value)}/>
      <button onClick={checkLogin}>Log in</button>
    </div>
  )
}


