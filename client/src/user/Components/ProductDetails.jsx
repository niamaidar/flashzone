<<<<<<< HEAD


// import { useState, useEffect } from 'react';
// import Rating from './Rating';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import Cart from '../Cart';


=======
import { useState, useEffect } from 'react';
import Rating from './Rating';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Comments from '../Comments'

const ProductPage = () => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const {id} = useParams()
    function removeProductPrefix(imageString) {
      return imageString.replace("products/", "");
    }
    let str = "products/KYDsCfjFfChZxrkX3x20AslI60z5WgdMvdJXY9zE.jpg";
    console.log(str.trim("products/"));
    console.warn("results", product);
>>>>>>> 810c320360f9b1f695357535d3ad6be76b535aaa

// const ProductPage = () => {
//     const [product, setProduct] = useState(null);
//     const [error, setError] = useState(null);
//     const [cartItems, setCartItems] = useState([]);
//     const {id} = useParams();
//     const navigate = useNavigate();

//     const fetchCartItems = async () => {
//         try {
//           const response = await axios.get('http://localhost:8000/api/carts');
//           setCartItems(response.data);
//         } catch (error) {
//           console.error('Error fetching cart items:', error);
//         }
//       };
//     useEffect(() => {
//         fetchProduct();
        
//     }, []);

//     if (error) {
//         return <div>{error}</div>;
//     }
//     if (!product) {
//         return <div>Loading...</div>;
//     } 
// console.log(product);

// const addToCart = () => {
//     const cartItem = {
//       command_id: 1, // Replace with the actual command ID
//       product_id: product.id,
//       quantity: 1, // Set the default quantity to 1
//     };
//     axios.post('http://localhost:8000/api/carts', cartItem)
//     .then((response) => {
//       // Handle the success response
//       console.log('Product added to cart:', response.data);
//       fetchCartItems(); // Fetch the updated cart items after adding a new item
//     })
//     .catch((error) => {
//       // Handle the error response
//       console.error('Error adding product to cart:', error);
//     });
// };
//         };
//         setCart((prevCart) => [...prevCart, cartItem]);
        
//         alert('good');
//         navigate('/cart')
      
      

//       const calculateTotalPrice = () => {
//         return cartItem.reduce((total, item) => total + item.price * item.quantity, 0);
//       };
    
//       const verifyCommand = () => {
//         // Create a new command
//         const command = {
//           datecommand: new Date().toISOString(),
//           client_id: 1, // Replace with the actual client ID
//         };
    
//         // Save the cart items as the products for the command
//         command.products = cart.map((item) => ({
//           id: item.id,
//           name: item.name,
//           price: item.price,
//           quantity: item.quantity,
//         }));
    
//         // Send the command to the server to save it
//         axios.post('http://localhost:8000/api/commands', command)
//           .then((response) => {
//             // Handle the success response
//             console.log('Command created:', response.data);
//           })
//           .catch((error) => {
//             // Handle the error response
//             console.error('Error creating command:', error);
//           });
//       };


// return (
//     <div className="container">
//       <div className="card mt-4">
//         <div className="card-header">
//           <h2>{product && product.name}</h2>
//           {/* {review && <Rating value={review.rating} text={`${review.numReviews} reviews`} />} */}
//         </div>
//         <div className="card-body">
//           {product && (
//             <img
//               className="ProductDetails_image img-fluid"
//               src={`http://localhost:8000/api/images/${product.file_path}`}
//               alt="Product"
//             />
//           )}
//           <div className="ProductDetails_info">
//             {product && <p>Price: {product.price}dh</p>}
//             {product && (
//               <>
//                 <p>Description: {product.description}</p>
//                 <p>Brand: {product.brand}</p>
//                 <p>Quantity: {product.quantity}</p>
//                 <p>Category: {product.category}</p>
//               </>
//             )}
//           </div>
//         </div>
//         <hr />
//             <button onClick={addToCart}
//                     className="ProductCard_button p-2 bg-green-600 text-white rounded hover:bg-green-500"> 
//                     Add to cart
//             </button>
          
//         <div className="card-body">
//           <h3>Comments</h3>
//           {product && product.comments && product.comments.length > 0 ? (
//             product.comments.map((comment) => (
//               <div key={comment.id} className="ProductDetails_comment">
//                 <Rating value={comment.rating} />
//                 <p>{comment.comment}</p>
//               </div>
//             ))
//           ) : (
//             <p>No comments available</p>
//           )}
//         </div>
//         <Cart
//         cart={cart}
//         calculateTotalPrice={calculateTotalPrice}
//         verifyCommand={verifyCommand}
//       />

       
        
        
 
//       </div>
//     </div>
//   );


// export default ProductPage;


import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Cart from '../Cart';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product data:', error);
      setError('Error fetching product data');
    }
  };

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/carts');
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  useEffect(() => {
    fetchProduct();
    fetchCartItems();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  if (!product) {
    return <div>Loading...</div>;
  }

  const addToCart = () => {
    const cartItem = {
      command_id: 1, // Replace with the actual command ID
      product_id: product.id,
      quantity: 1, // Set the default quantity to 1
    };

    axios.post('http://localhost:8000/api/carts', cartItem)
      .then((response) => {
        console.log('Product added to cart:', response.data);
        fetchCartItems();
      })
      .catch((error) => {
        console.error('Error adding product to cart:', error);
      });
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const verifyCommand = () => {
    const command = {
      datecommand: new Date().toISOString(),
      client_id: 1, // Replace with the actual client ID
    };

    command.products = cart.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    axios.post('http://localhost:8000/api/commands', command)
      .then((response) => {
        console.log('Command created:', response.data);
      })
      .catch((error) => {
        console.error('Error creating command:', error);
      });
  };

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-header">
          <h2>{product.name}</h2>
        </div>
        <div className="card-body">
<<<<<<< HEAD
          <img className="ProductDetails_image img-fluid" src={`http://localhost:8000/api/images/${product.file_path}`} alt="Product" />
=======
          {product && (
            <img
              className="ProductDetails_image img-fluid"
              src={`http://localhost:8000/api/images/${removeProductPrefix(
                product.file_path
              )}`}              
              alt="Product"
            />
          )}
>>>>>>> 810c320360f9b1f695357535d3ad6be76b535aaa
          <div className="ProductDetails_info">
            <p>Price: {product.price}dh</p>
            <p>Description: {product.description}</p>
            <p>Brand: {product.brand}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Category: {product.category}</p>
          </div>
        </div>
        <hr />
<<<<<<< HEAD
        <button
          onClick={addToCart}
          className="ProductCard_button p-2 bg-green-600 text-white rounded hover:bg-green-500"
        >
          Add to cart
        </button>
        <div className="card-body">
          <h3>Comments</h3>
          {product.comments && product.comments.length > 0 ? (
            product.comments.map((comment) => (
              <div key={comment.id} className="ProductDetails_comment">
                <Rating value={comment.rating} />
                <p>{comment.comment}</p>
              </div>
            ))
          ) : (
            <p>No comments available</p>
          )}
        </div>
=======
         <Comments/>
        {/* <div className="card-footer">
          <h4>Add a Comment</h4>
          <textarea
            className="form-control"
            // value={newComment}
            // onChange={handleCommentChange}
          />
          <button className="btn btn-primary mt-2" onClick={handleAddComment}>
            Submit
          </button>
        </div> */}
>>>>>>> 810c320360f9b1f695357535d3ad6be76b535aaa
      </div>
      <Cart
        cart={cart}
        calculateTotalPrice={calculateTotalPrice}
        verifyCommand={verifyCommand}
        fetchCartItems={fetchCartItems}
      />
    </div>
  );
};
export default ProductDetails ;