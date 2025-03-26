import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { FaUser, FaEnvelope } from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      Swal.fire({
        title: "Error",
        text: "Por favor, completa todos los campos.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
      return;
    }

    Swal.fire({
      title: "¡Gracias por suscribirte!",
      text: "Te enviaremos novedades a tu correo.",
      icon: "success",
      confirmButtonColor: "#28a745",
    });

    setFormData({ name: "", email: "" });
  };

  return (
    <Container className="contact-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center">¡Únete a nuestra Comunidad!</h2>
          <p className="text-center text-muted">
            Suscríbete y recibe las mejores ofertas y novedades.
          </p>

          <Form onSubmit={handleSubmit} className="contact-form">
            <Form.Group className="mb-3">
              <div className="input-container">
                <FaUser className="input-icon" />
                <Form.Control
                  type="text"
                  placeholder="Tu nombre"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <div className="input-container">
                <FaEnvelope className="input-icon" />
                <Form.Control
                  type="email"
                  placeholder="Tu email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>

            <Button variant="dark" type="submit" className="submit-btn">
              Suscribirse
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
