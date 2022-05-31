import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useNavigate, Navigate } from 'react-router-dom'

import ToDoApp from './ToDoApp';
import Login from './pages/login'
import PrivateRoute from './Components/privateroute';
import AuthRoute from './Components/authroute';
import NotFound from './Components/notfound';
import SignUp from './Components/signup';

import './App.css';

localStorage.setItem('userList',JSON.stringify([{username: 'admin', password: 'admin'}]))

export default function App() {

  const navigate = useNavigate()
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={
            <Navigate to='/todo' replace/>
          } />
          <Route exact path='/todo' element={
            <PrivateRoute>
              <button className='btn' onClick={() => {
                localStorage.setItem('isLogin', JSON.stringify(false))
                navigate('/login')
              }}>Log out</button>
              <ToDoApp />
            </PrivateRoute>     
          }/>
          <Route exact path='/login' element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }/>
          <Route path='/signup' element={
            <AuthRoute>
              <SignUp />
            </AuthRoute>
          } />
          <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );

  
}

