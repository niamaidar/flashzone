import React, { useState } from "react";
import { Navbar, Text, Dropdown, Input } from "@nextui-org/react";
import { BsPersonCircle } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Layout } from "./Layout";
import { FlashZone } from "./FlashZone";
import { SearchIcon } from "./SearchIcon";
import { Link, useNavigate } from "react-router-dom";

function SearchProduct() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search logic here
    // Use the searchTerm variable to access the entered value
    navigate(`/search?term=${searchTerm}`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const [data, setData] = useState([]);

  function removeProductPrefix(imageString) {
    return imageString.replace("products/", "");
  }

  async function search(key) {
    console.warn(key);
    let result = await fetch("http://localhost:8000/api/search/" + key);
    result = await result.json();
    setData(result);
  }

  let str = "products/KYDsCfjFfChZxrkX3x20AslI60z5WgdMvdJXY9zE.jpg";
  console.log(str.trim("products/"));
  console.warn("results", data);

  return (
    <div>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand css={{ mr: "$4" }}>
          <FlashZone />
          <Navbar.Content hideIn="xs" variant="highlight">
          <Link style={{textDecoration:"none"}}to="/Nav"> <Navbar.Link>
              Home
            </Navbar.Link> </Link>
            <Link style={{textDecoration:"none"}}to="/Categories"><Navbar.Link>Categories</Navbar.Link></Link>
          </Navbar.Content>
        </Navbar.Brand>
        <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          ><form onSubmit={handleSearchSubmit}>
             <Input
              clearable
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Search..."
              onChange={(e) => search(e.target.value)}
              
            />
            </form>
          </Navbar.Item>
          <Navbar.Link href="#"><FontAwesomeIcon style={{
                  width: '30px',
                  height: '30px',
                  border: 'none',
                  padding: '0',
                  cursor: 'pointer',
                }} icon={faShoppingCart} /></Navbar.Link>
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
              <button
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: 'black',
                  border: 'none',
                  padding: '0',
                  cursor: 'pointer',
                }}
              >
              <BsPersonCircle style={{ width: '100%', height: '100%', color: 'white' }} />
            </button>
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
            aria-label="User menu actions"
            color="secondary"
          >
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                <Link to="/clients/2" style={{textDecoration:"none",color:"black"}}>My Profile</Link></Text>
            </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                <Link to="/register" style={{textDecoration:"none",color:"red"}}>Log Out</Link>
              </Dropdown.Item>
          </Dropdown.Menu>

          </Dropdown>
        </Navbar.Content>
      </Navbar>
      <div className="col-sm-6 offset-sm-3">
        <br />
        <br />
        <div className="card-deck d-flex flex-wrap justify-content-between">
          {data.map((item) => (
            <div className="card mb-6 border flex-column border-2 m-2 flex  p-2 rounded items-between flex-wrap w-[500px]" key={item.id} style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={`http://localhost:8000/api/images/${removeProductPrefix(
                  item.file_path
                )}`}
                alt="Product"
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">
                  Price: {item.price}, Quantity: {item.quantity}
                </p>
                <p className="card-text">Category: {item.category}</p>
                <p className="card-text">Marque: {item.marque}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchProduct;
