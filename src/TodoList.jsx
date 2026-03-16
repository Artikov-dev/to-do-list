import React from 'react';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <li key={todo.id} className={todo.completed ? 'completed' : ''}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span>{todo.text}</span>
        <button onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
