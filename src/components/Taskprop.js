import React from 'react';

const Taskprop = (props) => {
    return (
        <li data-todos-index={props.key}>
            <span className="todo-item">{props.todo.body}</span>
      </li> 
    );
}

export default Taskprop;