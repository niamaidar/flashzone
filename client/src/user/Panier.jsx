import React from 'react';
import img from '../images/login3.jpg';
import { Navbar, Text, Dropdown, Input } from "@nextui-org/react";
import { BsPersonCircle } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FlashZone } from "./Components/nav/FlashZone";
import { SearchIcon } from "./Components/nav/SearchIcon";
import { Link} from "react-router-dom";
function Panier(){
    return(
        <div>
            <Navbar isBordered variant="sticky">
        <Navbar.Brand css={{ mr: "$4" }}>
          <FlashZone />
          <Navbar.Content hideIn="xs" variant="highlight">
          <Link style={{textDecoration:"none"}}to="/Nav"> <Navbar.Link  href="">
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
          >
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
            />
          </Navbar.Item>
          <Navbar.Link isActive href="#"><FontAwesomeIcon style={{
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
            <div className='py-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='table-responsive'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th className='text-center'>Image</th>
                                            <th className='text-center'>Price</th>
                                            <th className='text-center'>Quantity</th>
                                            <th className='text-center'>Total Price</th>
                                            <th className='text-center' >Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr>
                                                <td> &&&&&&&&&&&&&&&&&&&&&&
                                                    <img src={img} alt="Prod Image" style={{ width: "100%", height: "auto" }}/>
                                                </td>
                                                <td className='text-center'>500  dh</td>
                                                <td >
                                                    <div className="input-group">
                                                        <button className='input-group-text'>-</button>
                                                        <div className='form-control text-center'>2</div>
                                                        <button className='input-group-text'>+</button>
                                                    </div>
                                                </td>
                                                <td className='text-center'>100</td>
                                                <td className='text-center'>
                                                    <button className='btn btn-danger btn-sm'>Remove</button>
                                                </td> 
                                            </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Panier;