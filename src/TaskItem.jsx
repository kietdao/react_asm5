import React, {Component} from 'react'

export default class TaskItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.data !== nextProps.data || this.props.index !== nextProps.index) {
            return true
        }
        return false
    }
    render() {
        console.log(this.props.index)
        return (
            <div className='task-item' key={this.props.index}>
              <span className={this.props.data.priority === 'high' ? 'task-stt red': (this.props.data.priority === 'medium' ? 'task-stt yellow' : 'task-stt green')}></span>
              <p className='task-name'>{this.props.data.name} - {this.props.data.deadline}</p>
              <button className='btn' onClick={() => this.props.onDelete(this.props.index)}>Delete</button> 
            </div>
        )
    }
}