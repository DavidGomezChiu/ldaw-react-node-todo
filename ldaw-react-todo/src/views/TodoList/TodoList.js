import React from 'react'
import './TodoList.scss'
import useTodos from './useTodos'

const TodoList = () => {
    const todos = useTodos();

    console.log(todos);

    return(
        <div>
            <h1>Soy TodoList</h1>
            <p>Mi lista de todos:</p>
            <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id}>{todo.description}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TodoList
