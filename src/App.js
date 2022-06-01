import React, { useEffect, useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import Form from './components/Form'
import logo from './logo/logo.png'

function App () {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])

  const handlenewTodo = e => {
    e.preventDefault()
    if (newTodo.length == 0) {
      return
    }

    const todoItem = {
      text: newTodo,
      completed: false
    }

    // setting "todos" to previous one and adding above "todoItem"
    setTodos([...todos, todoItem])
    localStorage.setItem('todos', JSON.stringify([...todos, todoItem]))
    setNewTodo('')
  }

  const handleTododelete = index => {
    const filteredTodos = todos.filter((todo, i) => {
      return i != index
    })
    setTodos(filteredTodos)
    localStorage.setItem('todos', JSON.stringify(filteredTodos))
  }

  const handletoggleComplete = index => {
    const updatedTodos = todos.map((todo, i) => {
      if (index === i) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  // The localStorage object stores data with no expiration date.
  // The data is not deleted when the browser is closed, and are available for future sessions.
  const getTodos = JSON.parse(localStorage.getItem('todos'))

  useEffect(() => {
    if (getTodos === null) {
      setTodos([])
    } else {
      setTodos(getTodos)
    }
  }, [])

  return (
    <div className='App'>
      <div className='flex typed-out'>
        <img src={logo} alt='logo'></img>
        <h1> Welcome to Task Manager !!</h1>
      </div>
      <Form
        handlenewTodo={handlenewTodo}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
      />
      <Todo
        todos={todos}
        handletoggleComplete={handletoggleComplete}
        handleTododelete={handleTododelete}
      />
    </div>
  )
}

export default App
