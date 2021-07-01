import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAsync } from '../redux/todoSlice'

const AddTodoForm = () => {

    const [value,setValue] = useState('')
    const [error,setError] = useState(null)

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault()
        setError(false)
        if(value === ''){
            setError(true)
            return
        }
        dispatch(addTodoAsync({
            title:value
        }))

        setValue('')
    }

    return (
        <div className="container">
            {error && <div style={{color:"red"}}>Insert something</div>}
            <form className="form-control " onSubmit={submitHandler}>
                <input 
                className={error ? "error" : null}
                type="text" 
                placeholder="Add task.."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                />
                <button 
                type="submit"
                
                >Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm
