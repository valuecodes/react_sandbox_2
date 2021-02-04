import axios from 'axios'
import * as actionTypes from '../actions/actions'

const todoReducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.ADD_TODO:
            axios.post("http://localhost:3001/todoList", action.payload)
            return {
                ...state,
                todoList:[...state.todoList,action.payload]
            }
        case actionTypes.COMPLETE_TODO:
            const todoIndex = state.todoList.findIndex(item => item.id===action.payload)
            const stateCopy = {...state}
            stateCopy.todoList[todoIndex].completed = !stateCopy.todoList[todoIndex].completed
            axios.put("http://localhost:3001/todoList/"+stateCopy.todoList[todoIndex].id,stateCopy.todoList[todoIndex])
            return stateCopy
        case actionTypes.DELETE_TODO:
            axios.delete("http://localhost:3001/todoList/"+action.payload)
            return{
                ...state,
                todoList: state.todoList.filter(item => item.id !== action.payload)
            }
        case actionTypes.ADD_TODO_LIST:
            return{
                ...state,
                todoList: action.payload
            }
        default: return state
    }
}

const initialState = {
    todoList: []
}

export default todoReducer