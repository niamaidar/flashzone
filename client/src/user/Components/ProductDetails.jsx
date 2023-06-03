// import { useState } from 'react';
// import Rating from './Rating';
// import axios from 'axios';

// const ProductPage = ({ productId }) => {
//     const [product, setProduct] = useState(null);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       const fetchProduct = async () => {
//         try {
//           const response = await axios.get(`http://localhost:8000/api/products/${productId}`);
//           setProduct(response.data);
//         } catch (error) {
//           setError('Error fetching product data');
//         }
//       };
  
//       fetchProduct();
//     }, [productId]);
// };

// const ProductDetails = ({ product, review }) => {
//   const [showMore, setShowMore] = useState(false);

//   const handleShowMore = () => {
//     setShowMore(!showMore);
//   };

  

//   return (
//     <div className="ProductDetails_wrapper">
//       <div className="ProductDetails_header">
//         {product && <h2>{product.name}</h2>}
//         {review && <Rating value={review.rating} text={`${review.numReviews} reviews`} />}
//         {review?.rating && <Rating value={review.rating} text={`${review.numReviews} reviews`} />}

//       </div>
//       <div className="ProductDetails_content">
//         {product && (
//           <img
//             className="ProductDetails_image"
//             src={`http://localhost:8000/api/images/${product.file_path}`}
//             alt="Product"
//           />
//         )}
//         <div className="ProductDetails_info">
//           {product && <p>Price: {product.price}dh</p>}
//           {showMore && (
//             <>
//               {product && <p>Description: {product.description}</p>}
//               {product && <p>Brand: {product.brand}</p>}
//               {product && <p>Quantity: {product.quantity}</p>}
//               {product && <p>Category: {product.category}</p>}
//             </>
//           )}
//         </div>
//       </div>
//       <button className="ProductDetails_button" onClick={handleShowMore}>
//         {showMore ? 'Show Less' : 'Show More'}
//       </button>
//       <hr />
//       <h3>Comments</h3>
//       {product?.comments.map((comment) => (
//         <div key={comment.id} className="ProductDetails_comment">
//           <Rating value={comment.rating} />
//           <p>{comment.comment}</p>
//         </div>
//       ))}
      
//     </div>
//   );
  
// };

// export default ProductDetails;



// // import { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import ProductDetails from './ProductDetails';

// // const ProductPage = ({ productId }) => {
// //   const [product, setProduct] = useState(null);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:8000/api/products/1`);
// //         setProduct(response.data);
// //       } catch (error) {
// //         setError('Error fetching product data');
// //       }
// //     };

// //     fetchProduct();
// //   }, [productId]);

// //   if (error) {
// //     return <div>{error}</div>;
// //   }

// //   if (!product) {
// //     return <div>Loading...</div>;
// //   }

// //   return <ProductDetails product={product} />;
// // };

// // export default ProductPage;


import { useState, useEffect } from 'react';
import Rating from './Rating';
import axios from 'axios';
const ProductPage = ({ productId }) => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const fetchProduct = async () => {
        try {
            
                const response = await axios.get(`http://localhost:8000/api/products/${productId}`);
                setProduct(response.data);
            
        } catch (error) {
            console.error('Error fetching product data:', error);
            setError('Error fetching product data');
        }
    };
    useEffect(() => {
        

        fetchProduct();
    }, [productId]);

    if (error) {
        return <div>{error}</div>;
    }
    if (!product) {
        return <div>Loading...</div>;
    } 
    return <ProductDetails product={product} />;
};

// const ProductDetails = ({ product, review }) => {
//     const [showMore, setShowMore] = useState(false);

//     // const handleShowMore = () => {
//     //     setShowMore(!showMore);
//     // };
    const ProductDetails = ({ product }) => {
        console.log('Product:', product);

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };
    const [newComment, setNewComment] = useState('');

    const handleAddComment = () => {
        const comment = {
        id: Date.now(),
        rating: 5,
        comment: newComment,
    };
      
    const updatedComments = [...product.comments, comment];
    const updatedProduct = { ...product, comments: updatedComments };
      
    setProduct(updatedProduct);
    setNewComment('');
    };

//     return (
//         <div className="ProductDetails_wrapper">
//             <div className="ProductDetails_header">
//                 {product && <h2>{product.name}</h2>}
//                 {review && <Rating value={review.rating} text={`${review.numReviews} reviews`} />}
//             </div>
//             <div className="ProductDetails_content">
//                 {product && (
//                     <img
//                         className="ProductDetails_image"
//                         src={`http://localhost:8000/api/images/${product.file_path}`}
//                         alt="Product"
//                     />
//                 )}
//                 <div className="ProductDetails_info">
//                     {product && <p>Price: {product.price}dh</p>}
//                     {showMore && product && (
//                         <>
//                             <p>Description: {product.description}</p>
//                             <p>Brand: {product.brand}</p>
//                             <p>Quantity: {product.quantity}</p>
//                             <p>Category: {product.category}</p>
//                         </>
//                     )}
//                 </div>
//             </div>
//             {/* <button className="ProductDetails_button" onClick={handleShowMore}>
//                 {showMore ? 'Show Less' : 'Show More'}
//             </button> */}
//             <hr />
//             <h3>Comments</h3>
//       {product.comments && product.comments.length > 0 ? (
//         product.comments.map((comment) => (
//           <div key={comment.id} className="ProductDetails_comment">
//             <Rating value={comment.rating} />
//             <p>{comment.comment}</p>
//           </div>
//         ))
//       ) : (
//         <p>No comments available</p>
//       )}
//         </div>
//     );
// };
return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-header">
          <h2>{product && product.name}</h2>
          {review && <Rating value={review.rating} text={`${review.numReviews} reviews`} />}
        </div>
        <div className="card-body">
          {product && (
            <img
              className="ProductDetails_image img-fluid"
              src={`http://localhost:8000/api/images/${product.file_path}`}
              alt="Product"
            />
          )}
          <div className="ProductDetails_info">
            {product && <p>Price: {product.price}dh</p>}
            {showMore && product && (
              <>
                <p>Description: {product.description}</p>
                <p>Brand: {product.brand}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Category: {product.category}</p>
              </>
            )}
          </div>
        </div>
        <hr />
        <div className="card-body">
          <h3>Comments</h3>
          {product && product.comments && product.comments.length > 0 ? (
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
        <div className="card-footer">
          <h4>Add a Comment</h4>
          <textarea
            className="form-control"
            value={newComment}
            onChange={handleCommentChange}
          />
          <button className="btn btn-primary mt-2" onClick={handleAddComment}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
