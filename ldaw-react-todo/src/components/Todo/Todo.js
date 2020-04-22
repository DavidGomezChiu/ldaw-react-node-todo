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
        <div className={'todo '+status}>
            {description}
            <div className="todo-buttons">
                <button className="delete-button" onClick={handleDelete}>Delete</button>
                {status == 'pending' ? <button className="done-button" onClick={handleDone}>Done</button> : ''}
            </div>
        </div>
    );
}

export default Todo
