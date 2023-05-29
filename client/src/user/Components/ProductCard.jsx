 import "./ProductCard.css";

 const ProductCard = ({item}) => {
    return (
        <div className="ProductCard_wrapper">
            <div>
                <img className='ProductCard_img' src={`http://localhost:8000/${item.file_path}`}
                 alt=''/>
                 <h4>{item.name}</h4>
                 <div className="productCard_price">
                    <h5>{item.price}dh</h5>
                </div>
                <button className="ProductCard_button">Add to basket</button>
            </div>
        </div>
    )
 }
 export default ProductCard;
 