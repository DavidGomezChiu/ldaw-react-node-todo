import React,{ useState, useEffect } from 'react'
import axios from 'axios';
import './TodoList.scss'
import functions from './useTodos'
import Todo from '../../components/Todo/Todo';
import CreateForm from '../../components/CreateForm/CreateForm';

let result;
const TodoList = () => {
    const [todos, setTodos] = useState({todos:[]});
    const [needsChange, setNeedsChange] = useState(false);

    const fetchTodos = async () => {
        result = await axios.get('http://127.0.0.1:3001/tasks');
        let resultTodos = Object.assign([], result.data.tasks);
        let tempTodos = Object.assign([], todos);
        resultTodos.forEach(element => {
            tempTodos.push(element);
        });
        console.log(tempTodos)
        setNeedsChange(true)
    }

    useEffect(() => {
        fetchTodos();
    },[])

    useEffect(() => {
        if(result){
            console.log(result.data.tasks);
            setNeedsChange(false)
            setTodos({todos:result.data.tasks})
        }
    },[result])

    const deleteTodo = (id) => {
        functions.UseDeleteTodo(id);
        setTimeout(() => {
            fetchTodos()
        },500);
    }

    const markAsDone = (id) => {
        functions.UseMarkAsDone(id);
        setTimeout(() => {
            fetchTodos()
        },500);
    }

    const createTodo = description => {
        console.log('creando: '+description);
        functions.UseCreateTodo(description);
        setTimeout(() => {
            fetchTodos()
        },500);
    }

    return(
        <div className="todolist-container">
            <h1>Soy TodoList</h1>
            <p>Mi lista de todos:</p>
            <CreateForm onCreate={createTodo}></CreateForm>
            <div className="task-container">
                {
                    console.log(todos)
                }
                {
                    todos.todos.length > 0 ?
                        (() => {
                            let jsx = todos.todos.map((todo,index) => (
                                <Todo
                                    key={todo.id || index}
                                    id={todo.id}
                                    description={todo.description}
                                    status={todo.status}
                                    onDelete={deleteTodo}
                                    onDone={markAsDone}
                                ></Todo>
                            ));
                            console.log(jsx)
                            return jsx
                        })()
                        :
                        ''
                }
            </div>
        </div>
    );
}

export default TodoList
