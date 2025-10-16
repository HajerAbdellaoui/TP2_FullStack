import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoApp() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="todo-app">
      <h1>Ma Todo List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList 
        todos={todos} 
        onToggle={toggleTodo} 
        onDelete={deleteTodo} 
      />
      {todos.length === 0 && (
        <p className="empty-message">Aucune tâche pour le moment</p>
      )}
    </div>
  )
}

export default TodoApp