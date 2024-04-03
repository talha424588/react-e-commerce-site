import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand><Link to='/' style={{textDecoration:"none",color:"azure"}}>Busybee</Link></Navbar.Brand>
          <Nav className="me-auto nav_wrapper">
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='register'>Register</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;