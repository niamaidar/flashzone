import { Card, Text } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

function Comments() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/listReview"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
    fetchData();
  }, []);

  async function getData() {
    let result = await fetch("http://localhost:8000/api/listReview");
    result = await result.json();
    setData(result);
  }

  console.warn("results", data);

  return (
    <div>
      {data.length > 0 ? (
        data.map((item) => (
          <Card css={{ mw: "400px" }}>
            <Card.Body>
              <Text>{item.comment}</Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <Text>No comments available.</Text>
      )}
    </div>
  );
}

export default Comments;
