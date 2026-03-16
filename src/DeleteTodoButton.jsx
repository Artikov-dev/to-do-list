import React from 'react';

const DeleteTodoButton = ({ onDelete }) => (
  <button onClick={onDelete}>
    Delete
  </button>
);

export default DeleteTodoButton;
