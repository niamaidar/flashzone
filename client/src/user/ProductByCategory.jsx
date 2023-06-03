import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function ProductByCategory() {
  const { category } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/categoryBycat/${category}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function removeProductPrefix(imageString) {
    return imageString.replace("products/", "");
  }

  return (
    <div>
      {data.length > 0 ? (
        <>
          <h1 className="text-center">List of {data[0].category}</h1>
          <div className="card-deck d-flex flex-wrap justify-content-between">
            {data.map((item) => (
              <Card 
                key={item.id}
                className="card rounded-e-md	ring-slate-900 border-sky-400	"
              >
                <Card.Img
                  variant="top"
                  src={`http://localhost:8000/api/images/${removeProductPrefix(
                    item.file_path
                  )}`}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    Price: {item.price} dh
                  </Card.Text>
                  <Card.Text>Marque: {item.marque}</Card.Text>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Buy Now
                  </button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ProductByCategory;
