import React, { useState } from 'react';

const TaskForm = (props) => {
    const [task, setTask] = useState('')

    const onInputChange = (event)=> {
        setTask(event.target.value)
    }

    const onFormSubmit = (event)=> {
        event.preventDefault()
        props.createTask(task)
        setTask('')
    }

    return (
        <div>
            <form onSubmit={ onFormSubmit }>
                <input 
                  onChange={ onInputChange }
                  type="text" id="newItemDescription"
                  placeholder="Input Text Here"
                  value={task}
                />
                <button type="submit" id="addTask" >Add Task</button>
            </form>
        </div>
    );
}

export default TaskForm;
