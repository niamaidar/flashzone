import React, { useState } from "react";
// import Header from "./Header";
import AddProduct from "../admin/AddProduct";

function Command() {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [product, setProduct] = useState(null);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddProduct = (newProduct) => {
    setProduct(newProduct);
    const price = newProduct ? parseFloat(newProduct.price) : 0;
    setTotalPrice(quantity * price);
  };

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h2>Command</h2>
        <div>
          {product && (
            <div>
              <h4>{product.name}</h4>
              <img src={product.file_path} alt={product.name} />
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          )}
        </div>
        <div>
          <h4>Quantity</h4>
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <div>
          <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
        </div>
        <AddProduct onAddProduct={handleAddProduct} />
      </div>
    </div>
  );
}

export default Command;
