import React, { useState } from 'react';

const PizzaCounter = () => {
  const pizzas = [
    { name: 'Margherita' },
    { name: 'Pepperoni' },
    { name: 'Hawaiian' }
  ];

  const [counts, setCounts] = useState([0, 0, 0]);

  const handleClick = (index) => {
    setCounts(counts => {
      const updated = [...counts];
      updated[index] += 1;
      return updated;
    });
  };

  return (
    <div className="pizza-counter">
      <h2>Pizza Counter</h2>
      {pizzas.map((pizza, idx) => (
        <PizzaButton
          key={pizza.name}
          name={pizza.name}
          count={counts[idx]}
          onClick={() => handleClick(idx)}
        />
      ))}
    </div>
  );
};

export default PizzaCounter;
