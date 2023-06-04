import React, { useEffect, useState} from "react";
import axios from "axios";
import { useParams, Link, useNavigate} from "react-router-dom";
import { Navbar, Text, Dropdown, Input } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FlashZone } from "../user/Components/nav/FlashZone";
import { SearchIcon } from "../user/Components/nav/SearchIcon";
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

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
                <Navbar.Brand css={{ mr: "$6" }}>
                <FlashZone />
                <div style={{ marginLeft: '20px' }}>
                <Navbar.Content hideIn="xs" variant="highlight">
                <Link style={{textDecoration:"none",backgroundColor:"orange"}}to="/Home"> <Navbar.Link href="">
                       Home
                </Navbar.Link></Link>
                    <Link style={{textDecoration:"none"}}to="/Categories"> <Navbar.Link>Categories</Navbar.Link></Link>
                </Navbar.Content></div>
                </Navbar.Brand>
                <Navbar.Content
                css={{
                    "@xsMax": {
                    w: "100%",
                    jc: "space-between",
                    },
                }}
                >
                <Navbar.Link href="#"><FontAwesomeIcon style={{
                        width: '30px',
                        height: '30px',
                        border: 'none',
                        padding: '0',
                        cursor: 'pointer',
                        }} icon={faShoppingCart} /></Navbar.Link>
                         <Navbar.Item
                    css={{
                    "@xsMax": {
                        w: "100%",
                        jc: "center",
                    },
                    }}
                ><Link style={{textDecoration:"none"}}to="/Register"><Navbar.Link>Subscribe <div><FontAwesomeIcon icon={faUserPlus} /></div> </Navbar.Link></Link>
                </Navbar.Item>
                </Navbar.Content>
            </Navbar>
        </div>
    )
}
export default NavHome;