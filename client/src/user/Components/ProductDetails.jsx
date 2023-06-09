// import { useState, useEffect } from 'react';
// import Rating from './Rating';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import Cart from '../Cart';

// const ProductDetails = ({ addToCart }) => {
//   const [product, setProduct] = useState(null);
//   const [error, setError] = useState(null);
//   const [cart, setCart] = useState([]);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const fetchProduct = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/api/products/${id}`);
//       setProduct(response.data);
//     } catch (error) {
//       console.error('Error fetching product data:', error);
//       setError('Error fetching product data');
//     }
//   };

//   useEffect(() => {
//     fetchProduct();
//   }, []);

// //   const addToCart = () => {
// //     const cartItem = {

// //       product_id: product.id,
// //       name: product.name,
// //       price: product.price,
// //       quantity: 1,
// //     };

// //     axios.post('http://localhost:8000/api/carts', cartItem)
// //       .then(() => {
// //         console.log(cartItem)
// //         alert('added to cart successfully')
// //         // navigate('/cart');
// //       })
// //       .catch((error) => {
// //         console.error('Error adding product to cart:', error);
// //       });
// //   };
// // const addToCart = () => {
// //     const cartItem = {
// //       product_id: product.id,
// //       name: product.name,
// //       price: product.price,
// //       quantity: 1,
// //     };
  
// //     axios.post('http://localhost:8000/api/carts', cartItem)
// //       .then((response) => {
// //         console.log('Response:', response.data);
// //         alert('Added to cart successfully');
// //         // navigate('/cart');
// //       })
// //       .catch((error) => {
// //         console.error('Error adding product to cart:', error);
// //       });
// //   };

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!product) {
//     return <div>Loading...</div>;
//   }
// //   const calculateTotalPrice = () => {
// //     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
// //   };

// //   const verifyCommand = () => {
// //     const command = {
// //       datecommand: new Date().toISOString(),
// //       client_id: 1, // Replace with the actual client ID
// //     };

// //     command.products = cart.map((item) => ({
// //       id: item.id,
// //       name: item.name,
// //       price: item.price,
// //       quantity: item.quantity,
// //     }));

// //     axios
// //       .post('http://localhost:8000/api/commands', command)
// //       .then((response) => {
// //         console.log('Command created:', response.data);
// //       })
// //       .catch((error) => {
// //         console.error('Error creating command:', error);
// //       });
// //   };

//   return (
//     <div className="container">
//       <div className="card mt-4">
//         <div className="card-header">
//           <h2>{product.name}</h2>
//         </div>
//         <div className="card-body">
//           <img className="ProductDetails_image img-fluid" src={`http://localhost:8000/${product.file_path}`} alt="Product" />
//           <div className="ProductDetails_info">
//             <p>Price: {product.price}dh</p>
//             <p>Description: {product.description}</p>
//             <p>Brand: {product.brand}</p>
//             <p>Quantity: {product.quantity}</p>
//             <p>Category: {product.category}</p>
//           </div>
//         </div>
//         <hr />
//         <button type='button'
//           onClick={() => addToCart(product)}
//           className="ProductCard_button p-2 bg-green-600 text-white rounded hover:bg-green-500"
//         >
//           Add to cart
//         </button>
//         <div className="card-body">
//           <h3>Comments</h3>
//           {product.comments && product.comments.length > 0 ? (
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
//       </div>
//       {/* <Cart
//         cart={cart}
//         calculateTotalPrice={calculateTotalPrice}
//         verifyCommand={verifyCommand}
//         fetchCartItems={fetchCartItems}
//       /> */}
//     </div>
//   );
// };

// export default ProductDetails;


import React, { useState, useEffect } from 'react';
import Rating from './Rating';
import axios from 'axios';
import { useParams, useNavigate} from 'react-router-dom';
const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
const addToCart = () => {
    // const cartItem = {
    //   product_id: product.id,
    //   name: product.name,
    //   price: product.price,
    //   quantity: 1,
    // };
  
    // axios.post('http://localhost:8000/api/carts', cartItem)
    //   .then((response) => {
    //     console.log('Response:', response.data);
    //     alert('Added to cart successfully');
        return navigate('/panier');
      // })
      // .catch((error) => {
      //   console.error('Error adding product to cart:', error);
      // });
  };
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product data:', error);
      setError('Error fetching product data');
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }
  function removeProductPrefix(imageString) {
    return imageString.replace("products/", "");
  }
  let str = "products/KYDsCfjFfChZxrkX3x20AslI60z5WgdMvdJXY9zE.jpg";
  console.log(str.trim("products/"));
  console.warn("results", product);

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-header">
          <h2>{product.name}</h2>
        </div>
        <div className="card-body">
        <img
          style={{ width: 900, marginLeft:"12%"}}
          src={`http://localhost:8000/api/images/${removeProductPrefix(
            product.file_path
          )}`}
          alt="Product"
        />          
        <div className="ProductDetails_info">
            <p>Price: {product.price}dh</p>
            <p>Description: {product.description}</p>
            <p>Brand: {product.brand}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Category: {product.category}</p>
          </div>
        </div>
        <hr />
        <button
          type="button"
          style={{backgroundColor:"blue"}}
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
      </div>
    </div>
  );
};

export default ProductDetails;
