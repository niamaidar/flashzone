import { Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './style.css';

function ProductByCategory() {
  const { category } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8000/api/categoryBycat/${category}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [category]);

  return (
    <div>
      <h1 className="text-center">List of Products</h1>
      <div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Marque</th>
              <th>Quantity</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.marque}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <img style={{ width: 100 }} src={`http://localhost:8000/${item.file_path}`} alt="Product" />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">Loading...</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ProductByCategory;
