import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import img from '../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';


function Header() {
  let user = JSON.parse(localStorage.getItem('user-info'))
  const navigate = useNavigate()
  function logOut()
  {
    localStorage.clear();
    navigate('/login')
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"><img className="img" src={img} width="70" height="70" alt="Logo" /></Navbar.Brand>
        <Nav className="mr-auto navbar_wrapper">
          {localStorage.getItem('user-info') ? (
            <>
              <Link to="/list" style={{textDecoration:"none",color:"orange"}} >Products</Link>
              <Link to="/Command" style={{textDecoration:"none",color:"orange"}}>Commands</Link>
              <Link to="/clientlist"style={{textDecoration:"none",color:"orange"}} >Clients </Link>

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
        <FontAwesomeIcon icon={faUserTie} />

          <NavDropdown title={<FontAwesomeIcon icon={faUserTie} size="2xl"/>}>
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
