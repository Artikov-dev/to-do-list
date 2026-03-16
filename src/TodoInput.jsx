import React from 'react';

const TodoInput = ({ input, setInput, addTodo }) => (
  <div className="todo-input">
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Add a new task..."
      onKeyDown={(e) => e.key === 'Enter' && addTodo()}
    />
    <button onClick={addTodo}>Add</button>
  </div>
);

export default TodoInput;
