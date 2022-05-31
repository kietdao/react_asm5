import React, {Component} from 'react'

export default class TaskForm extends Component {
    render() {
        return (
            <div className='task-form'>
                <h2>New Task</h2>
                <div className='form-group'>
                <label>Name</label>
                <input type='text' onChange={this.props.handleTaskNameChange} />
                </div>
                <div className='form-group'>
                <label>Deadline</label>
                <input type='date' onChange={this.props.handleDeadLineChange}/>
                </div>
                <div className='form-group'>
                <label>Priority</label>
                <div className='form-item'>
                    <input type='radio' className='red' onChange={this.props.handlePriorityChange} name='priority' value='high'/> High
                </div>
                <div className='form-item'>
                    <input type='radio' className='yellow' onChange={this.props.handlePriorityChange} name='priority' value='medium'/> Medium
                </div>
                <div className='form-item'>
                    <input type='radio' className='green' onChange={this.props.handlePriorityChange} name='priority' value='low'/> Low
                </div>
                </div>
                <div className='form-group'>
                    <button onClick={this.props.addNewTask} className='btn'>Add Task</button>
                </div>
            </div>
        )
    }
}