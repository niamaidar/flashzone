// import { Link } from "react-router-dom";
// import "./ProductCard.css";
// import Rating from "./Rating";

// const ProductCard = ({ product, review }) => {
//   function removeProductPrefix(imageString) {
//     return imageString.replace("products/", "");
//   }

//   return (
//     <div className="ProductCard_wrapper border flex-column border-2 m-2 flex  p-2 rounded items-between flex-wrap w-[300px]">
//       <>
//         <img
//           style={{ width: 300 }}
//           className="w-52"
//           src={`http://localhost:8000/api/images/${removeProductPrefix(
//             product.file_path
//           )}`}
//           alt="Product"
//         />
//         <h4>{product.name}</h4>
//         <div className="ProductCard_price">
//           <h5>{product.price}dh</h5>
//         </div>
//         {review && review.rating !== undefined ? (
//           <div className="ProductCard_Rating">
//             <Rating value={review.rating} text={`${review.numReviews} reviews`} />
//           </div>
//         ) : (
//           <p>No rating available</p>
//         )}
       
       
//        <Link className="btn btn-outline-light" to={`/products/${product.id}`}>
//         <button className="ProductCard_button p-2 bg-orange-600 text-white rounded hover:bg-orange-500">
//           Show More
//         </button>
//       </Link>
//       </>
//     </div>
//   );
// };

// export default ProductCard;
import { Link } from "react-router-dom";
import "./ProductCard.css";
import Rating from "./Rating";

const ProductCard = ({ product, review }) => {
  function removeProductPrefix(imageString) {
    return imageString.replace("products/", "");
  }

  return (
    <div className="ProductCard_wrapper border flex-column border-2 m-2 flex  p-2 rounded items-between flex-wrap w-[300px]">
      <>
        <img
          style={{ width: 300 }}
          className="w-52"
          src={`http://localhost:8000/api/images/${removeProductPrefix(
            product.file_path
          )}`}
          alt="Product"
        />
        <h4>{product.name}</h4>
        <div className="ProductCard_price">
          <h5>{product.price}dh</h5>
        </div>
        {review && review.rating !== undefined ? (
          <div className="ProductCard_Rating">
            <Rating value={review.rating} text={`${review.numReviews} reviews`} />
          </div>
        ) : (
          <p>No rating available</p>
        )}
       
        <Link to={`/products/${product.id}`} className="ProductCard_button p-2 bg-orange-600 text-white rounded hover:bg-orange-500">
          Show More
        </Link>
      </>
    </div>
  );
};

export default ProductCard;

