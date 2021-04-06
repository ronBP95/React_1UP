import React from 'react';

const Task = (props) => {
    return (
        <li data-tasks-index={props.key}>
            <span className="task-item">{props.task.body}</span>
      </li> 
    );
}

export default Task;