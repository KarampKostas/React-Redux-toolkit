import React from 'react'
import TodoItems from './TodoItems'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getTodosAsync} from '../redux/todoSlice'

const TodoList = () => {

    const  dispatch = useDispatch()

    const todos = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(getTodosAsync())
    },[dispatch])

    return (
        <div className="todo-list container">
            {todos.map(todo => (
                <TodoItems id={todo.id} title={todo.title} completed={todo.completed} key={todo.id} />
            ))}
            
        </div>
    )
}

export default TodoList
