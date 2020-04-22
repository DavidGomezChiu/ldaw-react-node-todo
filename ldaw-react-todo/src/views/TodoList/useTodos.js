import { useEffect } from 'react'
import axios from 'axios';

const functions = {
    async UseGetTodos() {    
        console.log('mount');

        let response = await axios.get('http://127.0.0.1:3001/tasks');
        
        console.log('todos');
        console.log(response.data.tasks);
        
        return response.data.tasks;
    },
    async UseCreateTodo(description) {
        var created;
        
        const response = await axios.post('http://127.0.0.1:3001/tasks',{
            description: description
        });
        console.log(response);
        created = response.data.task;

        return created;
    }
    ,
    async UseDeleteTodo(id) {
        var deleted;

        const response = await axios.delete('http://127.0.0.1:3001/tasks/'+id);
        console.log(response);
        deleted = response.data.task

        return deleted;
    },
    async UseMarkAsDone(id) {
        var done;

        const response = await axios.post('http://127.0.0.1:3001/tasks/'+id+'/done');
        console.log(response);
        done = response.data.task;

        return done;
    }
}

export default functions;