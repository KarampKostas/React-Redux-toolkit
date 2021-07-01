import React from 'react'
import { useSelector } from 'react-redux'

const TotalCompleteItems = () => {

    const completedTodos = useSelector((state) => state.todos.filter(todo => todo.completed === true))

    return (
        <div>
            Completed Tasks: {completedTodos.length}
        </div>
    )
}

export default TotalCompleteItems
