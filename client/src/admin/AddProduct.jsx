import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function AddProduct() {
  const [name, setName] = useState("");
  const [file_path, setFile] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity,setQuantity] = useState("");
  const [brand,setBrand] = useState("");
  const [category,setCategory] = useState("");
  const navigate = useNavigate();
  async function addProduct() {
    const formData = new FormData();
    formData.append("file_path", file_path);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("name", name);
    formData.append("brand",brand);
    formData.append("quantity",quantity);
    formData.append("category",category);

    console.log({
      name: name,
      file_path: file_path,
      price: price,
      description: description,
      brand:brand,
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
     <div class="w-full bg-grey-500">
        <div class="container mx-auto py-8">
            <div class="w-88 mx-auto bg-white rounded shadow">

                <div class="mx-16 py-4 px-8 text-black text-xl font-bold border-b border-grey-500">Add Product
                </div>
      
      <div className="col-sm-6 offset-sm-3">
        <br />
  
                 
       <label class="block text-grey-darker text-sm font-bold mb-2">Name:</label>
        <input
          type="text"
          className="form-control"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
                  <label class="block text-grey-darker text-sm font-bold mb-2">Choose a picture:</label>

        <input
          type="file"
          className="form-control"
          placeholder="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
                  <label class="block text-grey-darker text-sm font-bold mb-2">Description:</label>

        <input
          type="text"
          className="form-control"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
                  <label class="block text-grey-darker text-sm font-bold mb-2">Price:</label>

        <input
          type="text"
          className="form-control"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
                  <label class="block text-grey-darker text-sm font-bold mb-2">Brand:</label>

        <input
          type="text"
          className="form-control"
          placeholder="brand"
          onChange={(e) => setBrand(e.target.value)}
        />
        <br />
                  <label class="block text-grey-darker text-sm font-bold mb-2">Quantity:</label>

        <input
          type="text"
          className="form-control"
          placeholder="quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <br />
                  <label class="block text-grey-darker text-sm font-bold mb-2">Category:</label>

        <input
          type="text"
          className="form-control"
          placeholder="category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <br />
        <button onClick={addProduct} className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none">
          Add product
        </button>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default AddProduct;
