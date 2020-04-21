import { useState, useEffect } from 'react'
import axios from 'axios';

const useTodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get('http://127.0.0.1:3001/tasks');
            console.log(response);
            console.log(response.data.tasks);
            setTodos(response.data.tasks);
        })();
    },[])

    return todos;
}

export default useTodos;