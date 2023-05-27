import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

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
              <Link to="/list">Product List</Link>
              <Link to="/add">Add Products</Link>
              <Link to="/update">Update Products</Link>
              <Link to="/search">Search Products</Link>

            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
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
    </div>
  );
}
export default Header;
