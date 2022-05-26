import './App.css';

import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'

import ToDoApp from './ToDoApp';
import Login from './Components/Login/Login'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthRoute from './Components/AuthRoute/AuthRoute';
import NotFound from './Components/NotFound/NotFound';

export default class App extends Component{

constructor(props) {
  super(props)
  this.state = {
    user: JSON.parse(sessionStorage.getItem('user'))
  }
}

getUser = (data) => {
  this.setState({
    user: data
  })
}

render() {
  const { user } = this.state
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Login 
            getUser={this.getUser}
          />} />
          <Route exact path='/todo' element={
            <PrivateRoute user={user}>
              <button onClick={() => {
                sessionStorage.setItem('user', null)
                this.getUser(null)
              }}>Log out</button>
              <ToDoApp />
            </PrivateRoute>     
          }/>
          <Route exact path='/login' element={
            <AuthRoute user={user}>
              <Login 
                 getUser={this.getUser}
              />
            </AuthRoute>
          }/>
          <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}
  
}

