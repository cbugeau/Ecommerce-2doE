import { NavLink, useNavigate } from "react-router";
import "./NavbarC.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarC = () => {
  const navigate = useNavigate();
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuarioLogueado"));

  const handleLogoutUser = () => {
    const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioFiltrado = usuariosLs.find(
      (usuario) => usuario.id === usuarioLogueado.id
    );
    usuarioFiltrado.login = false;

    localStorage.setItem("usuarios", JSON.stringify(usuariosLs));
    sessionStorage.removeItem("usuarioLogueado");

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-navbar">
        <Container>
          <NavLink className="nav-link" to={usuarioLogueado ? "/user" : "/"}>
            <img
              src="/src/assets/imagenes/logo-ecommerce.png"
              alt="img-logo"
              width="60"
            />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {usuarioLogueado && usuarioLogueado.rol === "usuario" ? (
              <Nav className="ms-auto">
                <NavLink className="nav-link" to="/user">
                  Inicio
                </NavLink>
                <NavLink className="nav-link" to="/Acerca-De-Nosotros">
                  Sobre Nosotros
                </NavLink>
                <NavLink className="nav-link" to="*">
                  Contacto
                </NavLink>
                <NavLink className="nav-link" to="/user/cart">
                  Carrito
                </NavLink>
              </Nav>
            ) : usuarioLogueado && usuarioLogueado.rol === "admin" ? (
              <Nav className="ms-auto">
                <NavLink className="nav-link" to="/admin">
                  Inicio
                </NavLink>
                <NavLink className="nav-link" to="/admin/productos">
                  Panel Usuario
                </NavLink>
                <NavLink className="nav-link" to="/user">
                  Vista Usuario
                </NavLink>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <NavLink className={"nav-link"} to="/">
                  Inicio
                </NavLink>
                <NavLink className={"nav-link"} to="/Acerca-De-Nosotros">
                  Acerca de Nosotros
                </NavLink>
                <NavLink className={"nav-link"} to="*">
                  Contacto
                </NavLink>
              </Nav>
            )}
            {usuarioLogueado ? (
              <Nav className="ms-auto">
                <NavLink className="nav-link" to="#" onClick={handleLogoutUser}>
                  Cerrar Sesión
                </NavLink>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <NavLink className="nav-link" to="/login">
                  Iniciar Sesión
                </NavLink>
                <NavLink className="nav-link" to="/register">
                  Registrarse
                </NavLink>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
