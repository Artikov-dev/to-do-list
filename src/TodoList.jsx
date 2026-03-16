import React from 'react';
import DeleteTodoButton from './DeleteTodoButton';

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
        <DeleteTodoButton onDelete={() => deleteTodo(todo.id)} />
      </li>
    ))}
  </ul>
);

export default TodoList;
