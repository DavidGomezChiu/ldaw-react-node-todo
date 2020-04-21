import React, { useState, useEffect } from 'react'
import './Todo.scss'

const Todo = (props) => {
    const [message, setMessage] = useState('');
    const [completed, setCompleted] = useState(false);

    return(
        <div>
            <h1>Soy Todo</h1>
        </div>
    );
}

export default Todo
