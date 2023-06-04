import React, { useEffect, useState} from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import { useParams, Link, useNavigate} from "react-router-dom";
import { Navbar, Text, Dropdown, Input } from "@nextui-org/react";
import { BsPersonCircle } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FlashZone } from "../user/Components/nav/FlashZone";
import { SearchIcon } from "../user/Components/nav/SearchIcon";
import Image from "./Image"
function NavHome(){
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
  
    // function removeProductPrefix(imageString) {
    //   return imageString.replace("products/", "");
    // }
    return (
        <div>
            <Navbar isBordered variant="sticky">
                <Navbar.Brand css={{ mr: "$4" }}>
                <FlashZone />
                <Navbar.Content hideIn="xs" variant="highlight">
                <Link style={{textDecoration:"none"}}to="/Home"> <Navbar.Link isActive href="">
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
                </Navbar.Content>
            </Navbar>
            <Image/>
        </div>
    )
}
export default NavHome;