import "./NavbarC.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarC = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Shopping-cart-transparent-icon.png?20210611024915"
              alt=""
              width="60"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
              <Nav.Link href="/contact">Contacto</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="#home">Iniciar Sesion</Nav.Link>
              <Nav.Link href="#link">Registrarse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
