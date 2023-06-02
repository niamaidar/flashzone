import { Navbar, Text, Dropdown, Input } from "@nextui-org/react";
import { BsPersonCircle } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Layout } from "./Layout";
import { FlashZone } from "./FlashZone";
import { SearchIcon } from "./SearchIcon";
import { Link } from "react-router-dom";



export default function Nav() {
  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand css={{ mr: "$4" }}>
          <FlashZone />
          <Text b color="inherit" css={{ mr: "$11" }} hideIn="xs">
          FlashZone
          </Text>
          <Navbar.Content hideIn="xs" variant="highlight">
            <Navbar.Link isActive href="#">
              Home
            </Navbar.Link>
            <Navbar.Link href="#">Categories</Navbar.Link>
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
                <Link to="register/addclient" style={{textDecoration:"none",color:"black"}}>My Profile</Link></Text>
            </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                <Link to="/register" style={{textDecoration:"none",color:"red"}}>Log Out</Link>
              </Dropdown.Item>
          </Dropdown.Menu>

          </Dropdown>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}
