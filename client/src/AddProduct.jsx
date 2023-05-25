import axios from "axios";
import Header from "./Header";
import React, { useState } from "react";
function AddProduct() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  async function addProduct() {
    // console.error(name, file, price, description);
    // const formData = new FormData();
    // formData.append("file_path", file);
    // formData.append("price", price);
    // formData.append("description", description);
    // formData.append("name", name);
    console.log({
      name: name,
      file: file,
      price: price,
      description: description,
    });
    const response = axios.post("http://localhost:8000/api/addproduct", {
      name: name,
      file_path: file,
      price: price,
      description: description,
    });
    console.log(response);
    alert("Data has been saved");
  }
  return (
    <div>
      <div className="col-sm-6 offset-sm-3">
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="file"
          onChange={(e) => setFile(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <button onClick={addProduct} className="btn btn-primary">
          Add product
        </button>
      </div>
    </div>
  );
}
export default AddProduct;
