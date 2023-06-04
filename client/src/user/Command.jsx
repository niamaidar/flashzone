// import React, { useState } from "react";
// // import Header from "./Header";
// import AddProduct from "../admin/AddProduct";

// function Command() {
//   const [quantity, setQuantity] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [product, setProduct] = useState(null);

//   const handleIncrement = () => {
//     setQuantity((prevQuantity) => prevQuantity + 1);
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       setQuantity((prevQuantity) => prevQuantity - 1);
//     }
//   };

//   const handleAddProduct = (newProduct) => {
//     setProduct(newProduct);
//     const price = newProduct ? parseFloat(newProduct.price) : 0;
//     setTotalPrice(quantity * price);
//   };

//   return (
//     <div>
//       <Header />
//       <div className="col-sm-6 offset-sm-3">
//         <h2>Command</h2>
//         <div>
//           {product && (
//             <div>
//               <h4>{product.name}</h4>
//               <img src={product.file_path} alt={product.name} />
//               <p>Price: ${product.price}</p>
//               <p>Description: {product.description}</p>
//             </div>
//           )}
//         </div>
//         <div>
//           <h4>Quantity</h4>
//           <button onClick={handleDecrement}>-</button>
//           <span>{quantity}</span>
//           <button onClick={handleIncrement}>+</button>
//         </div>
//         <div>
//           <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
//         </div>
//         <AddProduct onAddProduct={handleAddProduct} />
//       </div>
//     </div>
//   );
// }

// export default Command;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import Header from "./Header";
import axios from "axios";




function Command() {
//     const [quantity, setQuantity] = useState(1);
//     const [totalPrice, setTotalPrice] = useState(0);
//     const [product, setProduct] = useState(null);
//     const navigate = useNavigate();
//     const { id } = useParams();
    
// const fetchProduct = async () => {
//           try {
//             const response = await axios.get(`http://localhost:8000/api/products/${id}`);
//             setProduct(response.data);
//             setTotalPrice(response.data.price);
//           } catch (error) {
//             console.log(error);
//             // Handle error or show an error message to the user
//           }
//         };
//     useEffect(() => {
        
//         fetchProduct();
//       }, [id]);

//       const handleIncreaseQuantity = () => {
//         if (quantity < product.quantity) {
//           setQuantity(quantity + 1);
//           setTotalPrice(totalPrice + product.price);
//         }
//       };
    
//       const handleDecreaseQuantity = () => {
//         if (quantity > 1) {
//           setQuantity(quantity - 1);
//           setTotalPrice(totalPrice - product.price);
//         }
//       };
    

// //   const handlePlaceOrder = () => {
// //     // Send the command to the backend API
// //     const commandData = {
// //       datecommand: new Date().toISOString().split("T")[0],
// //       totalPrice: totalPrice,
// //       client_id: 1, // Replace with the actual client ID
// //       product_id: id,
// //     };

// //     fetch("http://localhost:8000/api/commands", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(commandData),
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         console.log(data);
// //         // Handle success or show a success message to the user
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //         // Handle error or show an error message to the user
// //       });
// //   };

// const handlePlaceOrder = async () => {
//     try {
//       const response = await axios.post("http://localhost:8000/api/commands", {
//         datecommand: new Date(),
//         totalPrice: totalPrice,
//         client_id: id, // Replace with the actual client ID
//         product_id: id,
//       });

//       console.log(response.data);
//       alert("Command has been placed");
//       navigate("/list");
//     } catch ( error) {
//       console.log("command has not been placed ",error);
//       // Handle error or show an error message to the user
//     }
//   };

// //   const handleRemoveOrder = () => { 		// Remove the order from the database and display a message to the user.
// //   const getCommand = async (id) => {
// //     try {
// //       const response = await axios.get(`http://localhost:8000/api/commands/${id}`);
// //       const command = response.data;
// //       console.log(command);
// //       // Display the command details to the user
// //     } catch (error) {
// //       console.log("Failed to fetch command:", error);
// //       // Handle error or show an error message to the user
// //     }
// //   };
  
//   // Call the function with the ID of the newly created command
// //   

  return (
    <div>
    <div> command page test </div>
      {/* {product && (
        <div>
          <img src={product.file_path} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Quantity:</p>
          <div>
            <button onClick={handleDecreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncreaseQuantity}>+</button>
          </div>
          <p>Total Price: ${totalPrice}</p>
          <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
      )} */}
    </div>
  );
}

export default Command;
