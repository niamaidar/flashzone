import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function AddProduct() {
  const [name, setName] = useState("");
  const [file_path, setFile] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity,setQuantity] = useState("");
  const [marque,setMarque] = useState("");
  const [category,setCategory] = useState("");
  const navigate = useNavigate();
  async function addProduct() {
    const formData = new FormData();
    formData.append("file_path", file_path);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("name", name);
    formData.append("marque",marque);
    formData.append("quantity",quantity);
    formData.append("category",category);
    formData.append("rating",null);
    formData.append("numReviews",null);

    console.log({
      name: name,
      file_path: file_path,
      price: price,
      description: description,
      marque:marque,
      quantity:quantity,
      category:category,
    });
    const response = await fetch("http://localhost:8000/api/addproduct", {
      method: 'POST',
      body: formData,
    });
    navigate("/list");
    console.log(response);
    alert("Data has been saved");
  }
  return (
    <div>
      <Header />
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
          type="file"
          className="form-control"
          placeholder="file"
          onChange={(e) => setFile(e.target.files[0])}
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
        <input
          type="text"
          className="form-control"
          placeholder="brand"
          onChange={(e) => setMarque(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="category"
          onChange={(e) => setCategory(e.target.value)}
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
