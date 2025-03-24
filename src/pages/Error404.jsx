import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router";
import "../pages/Error404.css";
import imagenes from "../assets/imagenes/img404.webp";

const Error404 = () => {
  return (
    <Container className="error-container">
      <img src={imagenes} alt="Error 404" className="error-image" />
      <h1 className="error-title">Página no disponible</h1>
      <p className="error-message">
        Lo sentimos, la página que buscas no se encuentra disponible. Es posible
        que haya sido movida o eliminada.
      </p>
      <div className="button-group">
        <Link to="/">
          <Button variant="primary" className="me-1">
            Ir a Inicio
          </Button>
        </Link>
        <Link to="/Contact">
          <Button variant="secondary">Ir a Contacto</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Error404;
