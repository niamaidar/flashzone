import { Table } from "react-bootstrap";
import Header from "./Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './style.css'
function ProductList()
 {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8000/api/list_Product");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, getData());

  console.warn("results", data);

  async function deleteOperation(id)
  {
    let result=await fetch("http://localhost:8000/api/delete/"+id,{
       method:"DELETE",

  });
    result=await result. json();
    console.warn(result)
                           I
    getData();
  }
async function getData()
{
     let result = await fetch("http://localhost:8000/api/list_Product");
     result =await result.json();
    setData(result)
  
  }



  return (
    <div>
      <Header />
      <h1 className="text-center">Product list</h1>
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
              <th>Category</th>
              <th>Image</th>
              <th colSpan={2}>Operations</th>
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
                  <td>{item.category}</td>
                  <td>
                  <img style={{ width: 100 }} src={`http://localhost:8000/api/images/${item.file_path}`} alt="Product" />
                  </td>
                  <td><span><button onClick={()=>deleteOperation(item.id)} className="btn btn-danger">Delete </button></span></td>
                  <td>
                  <Link to={"/update/"+item.id}>
                  <span><button  className="btn btn-primary">Update </button></span>
                  </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">Loading...</td>
              </tr>
            )}
          </tbody>
        </Table>
        <button className="btn btn-info"><Link style={{color:"white",textDecoration:"none"}} to="/add">Add new Product </Link></button>
      </div>
    </div>
  );
            }

export default ProductList;
