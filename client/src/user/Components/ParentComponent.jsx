import React, { useState } from 'react';
import ProductDetails from './ProductDetails';
import Cart from '../Cart';


const ParentComponent = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const cartItem = {
      product_id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    };

    setCart((prevCart) => [...prevCart, cartItem]);
  };

  return (
    <div>
      <ProductDetails addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default ParentComponent;
