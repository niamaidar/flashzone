import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">FlashZone</Navbar.Brand>
        <Nav className="mr-auto navbar_wrapper">
          <Link to="/add">Add Products</Link>
          <Link to="/update">Update Products</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </Nav>
        <Nav>
            <NavDropdown title="User Name">
                <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}
export default Header;
