import React from 'react';
import { useState, useEffect } from 'react'
import TaskModel from '../models/TaskModel'
import TaskForm from '../components/TaskForm'
import Tasklist from '../components/Tasklist';

const TaskContainer = () => {
    const [tasks, setTasks] = useState([])

    useEffect(()=> {
        const fetchData = async()=> {
            const res = await TaskModel.all()
            console.log(res)
            setTasks(res.data)
        }
        fetchData()
    }, [])

    const createTask = async(task) => {
        let newTodo = {
            "task": "Add Function Works!"
        }
        const anotherTask = await TaskModel.create(newTodo)
        console.log(anotherTask)
        // setTasks([...tasks, anotherTask.data])
        window.location.reload();
    }

    const clearTask = async() => {
        const removeAll = await TaskModel.destroy()
        console.log(removeAll)
        window.location.reload();
    }

   

    return (
        <div className='TaskContainer'>
            <img id="tasktitle" src="https://fontmeme.com/permalink/210406/54dbb8ba3a3038833fd0c6c219eee1d0.png" alt="super-mario-font" border="0"></img>
            <p id="taskoptions"><Tasklist tasks={tasks} /></p>
            <TaskForm createTask={createTask} />
            <button id="clearbutton" onClick={clearTask}>Clear All</button>
        </div>
    );

}

export default TaskContainer;
