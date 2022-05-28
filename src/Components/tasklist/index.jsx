import React, {Component} from 'react'

export default class TaskList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.taskList !== nextProps.taskList) {
            return true
        }
        return false
    }
    render() {
        return (
            <div className='tasks-list'>
                <h2>List Task</h2>
                {this.props.taskList.map((task) => {
                    return (
                        <div className='task-item' key={task.name}>
                        <span className={task.priority === 'high' ? 'task-stt red': (task.priority === 'medium' ? 'task-stt yellow' : 'task-stt green')}></span>
                        <p className='task-name'>{`${task.name} - ${task.deadline}`}</p>
                        <button className='btn' onClick={() => this.props.onDelete(task.index)}>Delete</button> 
                        </div>
                    )
                })}
            </div>
        )
    }
}