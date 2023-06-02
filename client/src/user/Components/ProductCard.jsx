import "./ProductCard.css";
import Rating from "./Rating";
const ProductCard = ({ item }) => {
  function removeProductPrefix(imageString) {
    return imageString.replace("products/", "");
  }
  return (
    <div className="ProductCard_wrapper border flex-column border-2 m-2 flex  p-2 rounded items-between flex-wrap w-[300px]">
      <>
        <img
          style={{ width: 500 }}
          className="w-52"
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
          <Rating value={item.rating} text={`${item.numReviews}  reviews`} />
        </div>
        <button className="ProductCard_button p-2 bg-orange-600 text-white rounded hover:bg-orange-500 ">
          Add to basket
        </button>
      </>
    </div>
  );
};
export default ProductCard;
