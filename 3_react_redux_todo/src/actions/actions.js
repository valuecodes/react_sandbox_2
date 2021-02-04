export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const ADD_TODO_LIST = 'ADD_TODO_LIST'

export const addTodo = (todo) => ({type: ADD_TODO, payload:todo})
export const completeTodo = (todoId) => ({type: COMPLETE_TODO, payload:todoId})
export const deleteTodo = (todoId) => ({type: DELETE_TODO, payload:todoId})
export const addTodoList = (todoList) => ({type: ADD_TODO_LIST, payload:todoList})