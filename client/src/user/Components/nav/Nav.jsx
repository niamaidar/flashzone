import { Navbar, Text, Dropdown, Input } from "@nextui-org/react";
import { BsPersonCircle } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Layout } from "./Layout";
import { FlashZone } from "./FlashZone";
import { SearchIcon } from "./SearchIcon";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchProduct from "./SearchProduct";
import Footer from "./Footer";





export default function Nav() {
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
  return (
    <>   {searchTerm === "" ?
    <Layout>
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
                <Link to="/" style={{textDecoration:"none",color:"red"}}>Log Out</Link>
              </Dropdown.Item>
          </Dropdown.Menu>

          </Dropdown>
        </Navbar.Content>
      </Navbar>
    </Layout>: <SearchProduct searchTerm={searchTerm} /> }
    <Footer />
    </> 
  );
}
