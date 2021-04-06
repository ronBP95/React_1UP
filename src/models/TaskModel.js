import axios from 'axios'

const endPoint = 'http://localhost:8000/user/tasks'

// router.get('/', (req, res)=> {
//}

class TaskModel {
    static all = ()=> {
        let request = axios.get(endPoint)
        return request
    }
    static create = (task) => {
        let request = axios.post("http://localhost:8000/user/tasks/create", task)
        return request
    }
    // static update = (task) => {
    //     let request = axios.put(endPoint, task)
    //     return request
    // }
    static destroy = () => {
        let request = axios.delete("http://localhost:8000/user/tasks/destroy")
        return request
    }
}

export default TaskModel