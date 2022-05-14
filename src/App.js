import './App.css';
import React, { Component } from 'react'

import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
export default class App extends Component{

constructor(props) {
  super(props)
  this.state = {
    taskList: []
  }
}

handleTaskName = (e) => {
  this.setState({
    newTaskName: e.target.value
  })
}

handleDeadLine = (e) => {
  this.setState({
    newDeadLine: e.target.value
  })
}

handlePriority = (e) => {
  this.setState({
    newPriority: e.target.value
  })
}

addNewTask = () => {
  this.setState({
    taskList: [
      ...this.state.taskList,
      {
        'name': this.state.newTaskName,
        'deadline': this.state.newDeadLine,
        'priority': this.state.newPriority
      }
    ]
  })
}

deleteTask = (inputIndex) => {
  this.state.taskList.splice(inputIndex, 1)
  this.setState({
    taskList: [
      ...this.state.taskList
    ]
  })
}

render() {
  return (
    <div className="App">
        
        <TaskForm 
          handleTaskName = {this.handleTaskName}
          handleDeadLine = {this.handleDeadLine}
          handlePriority = {this.handlePriority}
          addNewTask = {this.addNewTask}
        />

        <div className='tasks-list'>
          <h2>List Task</h2>
          {this.state.taskList.map((task, index) => {
              return <TaskItem 
                data = {task}
                onDelete = {this.deleteTask}
                index = {index}
              />
          })}
        </div>
    </div>
  );
}
  
}

