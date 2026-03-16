import React from 'react';

const PizzaButton = ({ name, count, onClick }) => (
  <button onClick={onClick} style={{ margin: '5px' }}>
    {name} ({count})
  </button>
);

export default PizzaButton;
