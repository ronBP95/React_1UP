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
        let newTask = {
            body: task,
            completed: false
        }
        const anotherTask = await TaskModel.create(newTask)
        console.log(anotherTask)
        setTasks([...tasks, anotherTask.data])
    }
    return (
        <div className='TaskContainer'>
            <img id="tasktitle" src="https://fontmeme.com/permalink/210406/54dbb8ba3a3038833fd0c6c219eee1d0.png" alt="super-mario-font" border="0"></img>
            <Tasklist tasks={tasks} />
            <TaskForm createTask={createTask} />
        </div>
    );

}

export default TaskContainer;
