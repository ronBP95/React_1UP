import React from 'react';
import Taskprop from './Taskprop';

const Task = (props) => {
    const listOfTasks = props.task.map((taskData, index)=> {
      return (

      )
    })

    return (
        <ul>
            {listOfTasks}
        </ul>
    );
}

export default Task;
