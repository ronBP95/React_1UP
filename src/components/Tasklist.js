import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        tasks: []
    }
  }

  componentDidMount() {
    return fetch('http://localhost:8000/user/tasks')
      .then(response => response.json())
      .then(response => {
        this.setState({
          tasks: response.tasks
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render(){
    return(
     <ul>
        {this.state.tasks.map(task => { return <Task task={task} />})}
      </ul>
    )
  }
}

export default TaskList;