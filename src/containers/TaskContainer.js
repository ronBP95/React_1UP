import React from 'react';
import { useState, useEffect } from 'react'
import Tasks from '../components/Tasks'

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

    const createTodo = async(todo) => {
        let newTodo = {
            body: todo,
            completed: false
        }
        setTodos([...todos, anotherTodo.data])
    }
    
        const anotherTodo = await TodoModel.create(newTodo)
        console.log(anotherTodo)

    return (
        <div>
            
        </div>
    );
}

export default TaskContainer;
