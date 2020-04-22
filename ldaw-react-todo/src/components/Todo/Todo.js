import React from 'react'
import './Todo.scss'

const Todo = ({ id, description, status, onDelete, onDone}) => {

    const handleDelete = () => {
        console.log('delete '+id);
        onDelete(id)
    }
    
    const handleDone = () => {
        console.log('done '+id);
        onDone(id)
    }

    return(
        <div className={status}>
            {description}
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleDone}>Done</button>
        </div>
    );
}

export default Todo
