import React, { Component } from 'react'
import TaskForm from './components/taskform';
import TaskList from './components/tasklist';

export default class ToDoApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
          taskList: []
        }
      }
      handleTaskNameChange = (e) => {
        this.setState({
          newTaskName: e.target.value
        })
      }
      
      handleDeadLineChange = (e) => {
        this.setState({
          newDeadLine: e.target.value
        })
      }
      
      handlePriorityChange = (e) => {
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
                  handleTaskNameChange = {this.handleTaskNameChange}
                  handleDeadLineChange = {this.handleDeadLineChange}
                  handlePriorityChange = {this.handlePriorityChange}
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
