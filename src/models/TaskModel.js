import axios from 'axios'

const endPoint = 'localhost:8000/api/v1/todos'

// router.get('/', (req, res)=> {
//}

// define a regular class
class TodoModel {
    // is define a method to get all todos
    static all = ()=> {
        let request = axios.get(endPoint)
        // this is going to take time it is a promise
        return request
    }
    static create = (todo) => {
        // post request sending the todo object as the second argument
        let request = axios.post(endPoint, todo)
        return request
    }
    // methods to update delete etc.
}

export default TodoModel