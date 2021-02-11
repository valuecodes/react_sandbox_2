import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions/actions'

export default function AddTodo() {

    const dispatch = useDispatch()
    const [inputText, setInputText] = useState('')

    const modifyInputHandler = (e) => {
        setInputText(e.target.value)
    }

    const addTodoHandler = () => {
        const newTodo={id:new Date()+(Math.random()),text:inputText,completed:false}
        dispatch(addTodo(newTodo))
        setInputText('')
    }

    return (
        <div className='todoInput'>
            <input onChange={modifyInputHandler} value={inputText} placeholder='Type Todo...' type='text'/>
            <button onClick={addTodoHandler}>Add Todo</button>
        </div>
    )
}
