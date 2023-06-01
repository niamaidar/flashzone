import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [commands, setCommands] = useState([]);

  useEffect(() => {
    const fetchCommands = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/clients/1/commands');
        setCommands(response.data);
      } catch (error) {
        console.log('Failed to fetch commands:', error);
      }
    };

    fetchCommands();
  }, []);

  return (
    <div>
      <h2>Cart</h2>
      {commands.map((command) => (
        <div key={command.id}>
          <h3>Command ID: {command.id}</h3>
          <p>Date: {command.datecommand}</p>
          <p>Total Price: {command.totalPrice}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
