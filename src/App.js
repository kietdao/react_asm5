import './App.css';

import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'

import ToDoApp from './ToDoApp';
import Login from './Components/Login/Login'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthRoute from './Components/AuthRoute/AuthRoute';
import NotFound from './Components/NotFound/NotFound';
import { checkToken } from './Components/Ultis/sesssion';
import { Navigate } from 'react-router-dom'

export default class App extends Component{

constructor(props) {
  super(props)
}

render() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={
            <Navigate to='/todo' replace/>
          } />

          <Route exact path='/todo' element={
            <PrivateRoute>
              <button onClick={() => {
                localStorage.setItem('isLogin', JSON.stringify(false))
              }}>Log out</button>
              <ToDoApp />
            </PrivateRoute>     
          }/>

          <Route exact path='/login' element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }/>

          <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}
  
}

