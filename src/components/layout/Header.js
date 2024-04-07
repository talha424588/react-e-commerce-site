import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const user = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("user-info");
    navigate("/login");
  }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none", color: "azure" }}>
              Busybee
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto nav_wrapper">
            {localStorage.getItem("user-info") ? (
              <>
                <Link to="/">Home</Link>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </Nav>
          
          {localStorage.getItem("user-info") ? (
            <Nav>
              <NavDropdown title={(user.user.name)}>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : null}
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
