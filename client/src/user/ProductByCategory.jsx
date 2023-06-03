import React, { useEffect, useState} from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import { useParams, Link, useNavigate} from "react-router-dom";
import { Navbar, Text, Dropdown, Input } from "@nextui-org/react";
import { BsPersonCircle } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FlashZone } from "./Components/nav/FlashZone";
import { SearchIcon } from "./Components/nav/SearchIcon";
function ProductByCategory() {
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
       <Navbar isBordered variant="sticky">
        <Navbar.Brand css={{ mr: "$4" }}>
          <FlashZone />
          <Navbar.Content hideIn="xs" variant="highlight">
          <Link style={{textDecoration:"none"}}to="/Nav"> <Navbar.Link isActive href="">
              Home
            </Navbar.Link></Link>
            <Link style={{textDecoration:"none"}}to="/Categories"> <Navbar.Link>Categories</Navbar.Link></Link>
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
              value={searchTerm}
              onChange={handleSearchChange}
              
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
