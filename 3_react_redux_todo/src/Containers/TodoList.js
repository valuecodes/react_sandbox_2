import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { completeTodo, deleteTodo, updateTodo } from '../actions/actions'

export default function TodoList() {
    const dispatch = useDispatch()
    const todo = useSelector(state => state.todo)

    const [currentlyUpdating, setCurrentlyUpdating] = useState(null) // id
    const [updatingText, setUpdatingText] = useState(null) // text

    const completeTodoHandler = (item) => {
        dispatch(completeTodo(item.id))
    }
    const deleteTodoHandler = (item) => {
        dispatch(deleteTodo(item.id))
    }
    const updateTodoHandler = (id) => {
        dispatch(updateTodo(id,updatingText))
        setCurrentlyUpdating(null)
        setUpdatingText(null)
    }

    return (
        <div>
            {todo.todoList.map(item =>
                <div className='todoListItem' key={item.id}>
                    {currentlyUpdating===item.id ?
                        <input value={updatingText||''} onChange={e => setUpdatingText(e.target.value)}/>
                        :
                        <p
                            className={item.completed?'completed':''}
                            onClick={()=>completeTodoHandler(item)}>
                                {item.text}
                        </p>                    
                    }
                    {currentlyUpdating===item.id?
                        <button onClick={() => updateTodoHandler(item.id)}>Save</button>:
                        <button onClick={() => setCurrentlyUpdating(item.id)}>
                            Update
                        </button>
                    }
                    <button onClick={() => deleteTodoHandler(item)}>
                        Delete
                    </button>
                </div>    
            )}
        </div>
    )
}
