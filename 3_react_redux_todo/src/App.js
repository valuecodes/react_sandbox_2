import React,{ useEffect, useState } from 'react'
import './App.css';
import AddTodo from './Containers/AddTodo';
import TodoList from './Containers/TodoList';
import axios from 'axios'
import { addTodoList } from './actions/actions';
import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("http://localhost:3001/todoList/").then((response) => {
      dispatch(addTodoList(response.data))
    });
  },[])

  return (
    <div className="App">
      <AddTodo/>
      <TodoList/>
    </div>
  );
}

export default App;
