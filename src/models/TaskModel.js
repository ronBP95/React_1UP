import axios from 'axios'

const endPoint = 'localhost:8000/'

// router.get('/', (req, res)=> {
//}

class TaskModel {
    static all = ()=> {
        let request = axios.get(endPoint)
        return request
    }
    static create = (todo) => {
        let request = axios.post(endPoint, todo)
        return request
    }
}

export default TaskModel