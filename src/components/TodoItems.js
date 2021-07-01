import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCompleteAsync,deleteTodoAsync } from '../redux/todoSlice';

const TodoItems = ({id,title,completed}) => {

    const  dispatch = useDispatch();


    const checkHandler = () =>{
     
        dispatch(toggleCompleteAsync({
            id:id,
            completed:!completed
        }))
    }

    const deleteHandler = () => {

        dispatch(deleteTodoAsync({
            id:id
        }))
        
    }

    return (
        
            <li  className ="list-item">
                <div className={completed ? "list-item-content green" : "list-item-content"}>
                    <span className="list-item-span">
                        <input type="checkbox" className="xaxa"   checked={completed} onChange={checkHandler}/>
                        <div>{title}</div>
                    </span>
                    <button onClick={deleteHandler}>Delete</button>
                </div>
            </li>
           
    )
}

export default TodoItems
