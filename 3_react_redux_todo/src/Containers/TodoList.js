import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { completeTodo, deleteTodo } from '../actions/actions'

export default function TodoList() {

    const dispatch = useDispatch()
    const todo = useSelector(state => state.todo)

    const completeTodoHandler = (item) => {
        dispatch(completeTodo(item.id))
    }

    const deleteTodoHandler = (item) => {
        dispatch(deleteTodo(item.id))
    }

    return (
        <div>
            {todo.todoList.map(item =>
                <div className='todoListItem' key={item.id}>
                    <p
                        className={item.completed?'completed':''}
                        onClick={()=>completeTodoHandler(item)}>
                            {item.text}
                    </p>
                    <button onClick={() => deleteTodoHandler(item)}>
                        Delete
                    </button>
                </div>    
            )}
        </div>
    )
}
