import React from 'react';

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
        console.log("Data was fetched successfully!")
      })
      .catch(error => {
        console.error(error)
      })
  }

  render(){
    return(
     <ul>
         {this.state.tasks.map(task => { 
             console.log(task)
             return <div key={task._id}>Task: {task.task}</div> })}
      </ul>
    )
  }
}

export default TaskList;

