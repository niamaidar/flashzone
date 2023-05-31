import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import './style.css';
import Header from "./Header";


function ProductByCategory() {
  const { category } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/categoryBycat/${category}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  const deleteOperation = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/delete/${id}`);
      console.warn(response.data);
      fetchData();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <Header />
      {data.length > 0 ? (
        <>
          <h1 className="text-center">List of {data[0].category}</h1>
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
                  <th>Delete_Product</th>
                  <th>Update_Product</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
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
                    <td>
                      <span>
                        <button onClick={() => deleteOperation(item.id)} className="btn btn-danger">Delete</button>
                      </span>
                    </td>
                    <td>
                      <Link to={`/update/${item.id}`}>
                        <button className="btn btn-primary">Update</button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ProductByCategory;
