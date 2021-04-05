import React from 'react';
import Taskprop from './Taskprop';

const Tasks = (props) => {
    const listOfTasks = props.tasks.map((taskData, index)=> {
      return (
          <Taskprop key={taskData._id} task={taskData} />
      )
    })

    return (
        <ul>
            {listOfTasks}
        </ul>
    );
}

export default Tasks;
