import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/carts');
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // const verifyCommand = () => {
  //   const command = {
  //     datecommand: new Date().toISOString(),
  //     client_id: 1, // Replace with the actual client ID
  //   };

  //   command.products = cart.map((item) => ({
  //     id: item.id,
  //     name: item.name,
  //     price: item.price,
  //     quantity: item.quantity,
  //   }));

  //   axios
  //     .post('http://localhost:8000/api/commands', command)
  //     .then((response) => {
  //       console.log('Command created:', response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error creating command:', error);
  //     });
  // };

  return (
    <div className="container">
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="CartItem">
              <p>{item.name}</p>
              <p>Price: {item.price}dh</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
          <p>Total Price: {calculateTotalPrice()}dh</p>
          {/* <button onClick={verifyCommand}>Verify Command</button> */}
        </div>
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};

export default Cart;




// import React, { useState, useEffect } from 'react';

// const Cart = () => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/carts');
//       const data = await response.json();
//       setCart(data);
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//     }
//   };

//   const calculateTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <div className="container">
//       <h2>Cart</h2>
//       {cart.length > 0 ? (
//         <div>
//           {cart.map((item) => (
//             <div key={item.id} className="CartItem">
//               <p>{item.name}</p>
//               <p>Price: {item.price}dh</p>
//               <p>Quantity: {item.quantity}</p>
//             </div>
//           ))}
//           <p>Total Price: {calculateTotalPrice()}dh</p>
//         </div>
//       ) : (
//         <p>No items in the cart</p>
//       )}
//     </div>
//   );
// };

// export default Cart;
