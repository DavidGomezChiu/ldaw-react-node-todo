import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './TodoList.scss'

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        setTodos([{title:'hacer popó',completed:false}]);
    }

    useEffect(() => {
        fetchTodos();
    },[])

    return(
        <div>
            <h1>Soy TodoList</h1>
            <p>Mi lista de todos:</p>
            {todos.length}
        </div>
    );
}

export default TodoList
