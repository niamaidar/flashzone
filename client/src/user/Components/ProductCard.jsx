 import "./ProductCard.css";
import Rating from "./Rating";
 const ProductCard = ({item}) => {
    return (
        <div className="ProductCard_wrapper">
            <div>
                <img className='ProductCard_img' src={`http://localhost:8000/api/images/${item.file_path}`}
                 alt=''/>
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
 