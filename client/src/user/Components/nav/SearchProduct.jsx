import React, { useState } from "react";

function SearchProduct() {
  const [data, setData] = useState([]);

  function removeProductPrefix(imageString) {
    return imageString.replace("products/", "");
  }

  async function search(key) {
    console.warn(key);
    let result = await fetch("http://localhost:8000/api/search/"+key);
    result = await result.json();
    setData(result);
  }

  let str = "products/KYDsCfjFfChZxrkX3x20AslI60z5WgdMvdJXY9zE.jpg";
  console.log(str.trim("products/"));
  console.warn("results", data);

  return (
    <div>
      <div className="col-sm-6 offset-sm-3">
        <h1>Search Product</h1>
        <br />
        <input
          type="text"
          onChange={(e) => search(e.target.value)}
          className="form-control"
          placeholder="Search Product"
        />
        <br />
        <br />
        <table className="table table-stripped text-center">
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
              <th>Operations</th>
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
                <td>{item.category}</td>
                <td>
                  <img
                    style={{ width: 100 }}
                    src={`http://localhost:8000/api/images/${removeProductPrefix(
                      item.file_path
                    )}`}
                    alt="Product"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchProduct;
