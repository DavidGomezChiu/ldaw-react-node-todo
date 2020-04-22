import React, { useState } from 'react'
import './CreateForm.scss'

const CreateForm = ({onCreate}) => {
    const [term, setTerm] = useState([]);

    const useOnChange = (event) => {
        setTerm(event.target.value)
    }

    const handleCreate = () => {
        onCreate(term)
    }

    return(
        <div>
            <input
                type="text"
                placeholder="Todo description"
                value={term}
                onChange={useOnChange}
            ></input>
            <button onClick={handleCreate}>Crear</button>
        </div>
    );
}

export default CreateForm
