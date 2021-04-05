import React from 'react';

const Taskprop = (props) => {
    return (
        <li data-tasks-index={props.key}>
            <span className="task-item">{props.tasks.body}</span>
      </li> 
    );
}

export default Taskprop;