import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// import {
//   MDBNavbar,
//   MDBContainer,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBBadge,
//   MDBBtn
// } from 'mdb-react-ui-kit';

function Header() {
  let user = JSON.parse(localStorage.getItem('user-info'))
  const navigate = useNavigate()
  function logOut()
  {
    localStorage.clear();
    navigate('/register')
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">FlashZone</Navbar.Brand>
        <Nav className="mr-auto navbar_wrapper">
          {localStorage.getItem('user-info') ? (
            <>
              <Link to="/list">Products</Link>
              <Link to="/category">Categories</Link>
              <Link to="/update">Commande</Link>
              <Link to="/search">Client </Link>

            </>
          ) : (
            <>
              {/* <Link to="/login">Login</Link> */}
              <Link to="/register">Register</Link>
            </>
          )}
        </Nav>
        
        {localStorage.getItem('user-info') ?
        <Nav>
          <NavDropdown title={('username')}>
          {/* <NavDropdown title={user.name}> */}
            <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        :null 
        }
        
      </Navbar>



{/* 
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarNav>
          <MDBNavbarItem>
            <MDBNavbarLink href='#'>
              <MDBBadge pill color='danger'>!</MDBBadge>
              <span>
                <MDBIcon fas icon='shopping-cart'></MDBIcon>
              </span>
            </MDBNavbarLink>
            <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar> */}
  </div>
  );
}
export default Header;
