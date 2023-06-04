// // import React, { useState } from 'react';


// // const Cart = ({ cart, calculateTotalPrice, verifyCommand }) => {
// //   const [cartItems, setCartItems] = useState([]);

// //   const addToCart = (item) => {
// //     setCartItems([...cartItems, item]);
// //   };
// //   return (
// //     <div>
// //       <h3>Cart Items</h3>
// //       {cartItems.length > 0 ? (
// //         <>
// //           {cartItems.map((item) => (
// //             <div key={item.id} className="CartItem">
// //               <p>{item.name}</p>
// //               <p>Price: {item.price}</p>
// //               <p>Quantity: {item.quantity}</p>
// //             </div>
// //           ))}
// //           <p>Total Price: {calculateTotalPrice()}</p>
// //           <button onClick={verifyCommand}>Verify Command</button>
// //         </>
// //       ) : (
// //         <p>No items in the cart</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Cart;


// import axios from 'axios';
// import React, { useState, useEffect } from 'react';


// const Cart = ({ calculateTotalPrice, verifyCommand }) => {
//   const [cartItems, setCartItems] = useState([]);
//   // const [totalPrice, setTotalPrice] = useState(0); //initialize to 0.00;  //total price after adding items to the

//   const fetchCartItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/api/carts');
//       setCartItems(response.data);
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//     }
//   };
//   useEffect(() => {
   

//     fetchCartItems();
//   }, []);

//   return (
//     <div>
//       <h3>Cart Items</h3>
//       {cartItems.length > 0 ? (
//         <>
//           {cartItems.map((item) => (
//             <div key={item.id} className="CartItem">
//               <p>{item.name}</p>
//               <p>Price: {item.price}</p>
//               <p>Quantity: {item.quantity}</p>
//             </div>
//           ))}
//           <p>Total Price: {calculateTotalPrice()}</p>
//           <button onClick={verifyCommand}>Verify Command</button>
//         </>
//       ) : (
//         <p>No items in the cart</p>
//       )}
//     </div>
//   );
// };

// export default Cart;

import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Cart = ({ cart, calculateTotalPrice, verifyCommand, fetchCartItems }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div>
      <h3>Cart Items</h3>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="CartItem">
              <p>{item.name}</p>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
          <p>Total Price: {calculateTotalPrice()}</p>
          <button onClick={verifyCommand}>Verify Command</button>
        </>
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};

export default Cart;