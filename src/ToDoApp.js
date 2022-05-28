import React, { Component } from 'react'
import TaskForm from './Components/taskform';
import TaskList from './Components/tasklist';

export default class ToDoApp extends Component {
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
          <div className='ToDoApp'>
                <TaskForm
                  handleTaskName = {this.handleTaskName}
                  handleDeadLine = {this.handleDeadLine}
                  handlePriority = {this.handlePriority}
                  addNewTask = {this.addNewTask}
                />
    
                <TaskList 
                  taskList = {this.state.taskList}
                  onDelete = {this.deleteTask}
                />
          </div>
        )
      }
}
