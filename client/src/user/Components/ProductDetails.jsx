

import { useState, useEffect } from 'react';
import Rating from './Rating';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const ProductPage = () => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const {id} = useParams()

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

console.log(product)
return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-header">
          <h2>{product && product.name}</h2>
          {/* {review && <Rating value={review.rating} text={`${review.numReviews} reviews`} />} */}
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
            {product && (
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
                {/* <Rating value={comment.rating} /> */}
                <p>{comment.comment}</p>
              </div>
            ))
          ) : (
            <p>No comments available</p>
          )}
        </div>
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
      </div>
    </div>
  );
};

export default ProductPage;

