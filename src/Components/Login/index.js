import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'


export default function Login(props) {

  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const userList = JSON.parse(localStorage.getItem('userList'))
  const navigate = useNavigate()

  const checkLogin = () => {
    userList.map(user => {
      if(username === user.username && password === user.password) {
        localStorage.setItem('isLogin', JSON.stringify(true))
        navigate('/todo')
      } 
    })
  }
 
  return (
    <div className='login-form'>
      <label>User name:</label> 
      <input type='text' name='username' placeholder='Enter your user name...' onBlur={(e) => setUserName(e.target.value)}/>
      <label>Password:</label> 
      <input type='password' name='password' placeholder='Enter your password...' onBlur={(e) => setPassword(e.target.value)}/>
      <p>Don't have an account? <a onClick={() => navigate('/signup')}>Sign Up</a></p>
      <button onClick={checkLogin}>Log in</button>
    </div>
  )
}


