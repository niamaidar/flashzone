import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "../Components/nav/Box"
import ProductCard from "../Components/ProductCard"

function HomeScreen() {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const productsResponse = await axios.get("http://localhost:8000/api/list_Product");
      const dataResponse = await axios.get("http://localhost:8000/api/listReview");
      setProducts(productsResponse.data);
      setData(dataResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
        <div className="products_wrapper flex flex-row flex-wrap w-full">
          {products.length > 0 ? (
            products.map((product, index) => (
              <ProductCard key={product.id} product={product} review={data[index]} />
            ))
          ) : (
              <p>Out of stock</p>
            )}
        </div>
      </Box>
    </>
  );
}

export default HomeScreen;
