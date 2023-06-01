 import "./ProductCard.css";
import Rating from "./Rating";
 const ProductCard = ({item}) => {
    function removeProductPrefix(imageString) {
        return imageString.replace("products/", "");
      } 
    return (
        <div className="ProductCard_wrapper">
            <div>
            <img
                    style={{ width: 500 }}
                    src={`http://localhost:8000/api/images/${removeProductPrefix(
                      item.file_path
                    )}`}
                    alt="Product"
                  />         
                 <h4>{item.name}</h4>
                 <div className="ProductCard_price">
                    <h5>{item.price}dh</h5>
                </div>
                <div className="ProductCard_Rateing">
                    <Rating value={item.rating} text={`${item.numReviews}  reviews`}/>
                </div>
                <button className="ProductCard_button">Add to basket</button>
            </div>
        </div>
    )
 }
 export default ProductCard;
 