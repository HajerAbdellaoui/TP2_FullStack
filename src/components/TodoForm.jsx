import { useState } from 'react'

function TodoForm({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      onAdd(text)
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Quelle est votre prochaine tâche ?"
        className="todo-input"
      />
      <button type="submit" className="add-button">
        Ajouter
      </button>
    </form>
  )
}

export default TodoForm