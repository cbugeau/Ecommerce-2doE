import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../pages/AcercaDeNosotros.css";
import imagenes from "../assets/imagenes/imgTodas.js";

const Miembros = [
  { nombre: "Carlos", img: imagenes.carlos, rol: "Lider Técnico" },
  { nombre: "Gabriel", img: imagenes.gabriel, rol: "Scrum Master" },
  { nombre: "Nadia", img: imagenes.nadia, rol: "Desarrollador Frontend" },
  { nombre: "Leonardo", img: imagenes.leonardo, rol: "Desarrollador Frontend" },
];

const SobreNosotros = () => {
  return (
    <Container className="sobre-nosotros-conteiner text-center mt-5">
      <h1 className="title">Acerca de Nosotros</h1>
      <p className="description">
        Somos estudiantes de la carrera Fullstack de la academia Rolling Code
        School, ubicada en la ciudad de San Miguel de Tucumán. Nuestro equipo
        está conformado por personas con diversos niveles de experiencia: desde
        aquellos con formación universitaria y terciaria hasta quienes están
        dando sus primeros pasos en el desarrollo web.
      </p>
      <blockquote className="blockquote">
        <p>"Lo que con mucho trabajo se adquiere, más se ama"</p>
        <footer className="blockquote-footer">Aristóteles</footer>
      </blockquote>
      <Row className="mt-5">
        {Miembros.map((nosotros, index) => (
          <Col key={index} md={3} sm={6} className="mb-4">
            <Card className="team-card">
              <Card.Img
                variant="top"
                src={nosotros.img}
                alt={`Foto de ${nosotros.nombre}`}
                className="rounded-circle mx-auto d-block"
              />
              <Card.Body>
                <Card.Title className="nombre-img-card">
                  {nosotros.nombre}
                </Card.Title>
                <Card.Text>{nosotros.rol}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SobreNosotros;
