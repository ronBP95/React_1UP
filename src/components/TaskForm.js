import React, { useState } from 'react';

const TaskForm = (props) => {
    const [task, setTask] = useState('')

    const onInputChange = (event)=> {
        // the value yes event.target.value
        setTask(event.target.value)
    }

    const onFormSubmit = (event)=> {
        event.preventDefault()
        // body: e.target.value
        // completed: false
        //call a function that is passed down as props
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
                <button type="submit" id="addTask" className='btn'>Add Task</button>
            </form>
        </div>
    );
}

export default TaskForm;
