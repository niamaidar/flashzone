import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import ProductCard from "../Components/ProductCard";

function HomeScreen() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);
  let str = "products/KYDsCfjFfChZxrkX3x20AslI60z5WgdMvdJXY9zE.jpg";
  console.log(str.trim("products/"));
  console.warn("results", data);


  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:8000/api/list_Product");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  console.warn("results", data);

  return (<>
    <Nav/>
    <div className="products_wrapper">
      {data.length > 0 ? (
        data.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))
      ) : (
        <p>Out of stock</p>
      )}
    </div>
    </>
  );
}

export default HomeScreen;
