function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span
        className="todo-text"
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button
        className="delete-button"
        onClick={() => onDelete(todo.id)}
      >
        ×
      </button>
    </div>
  )
}

export default TodoItem