import React, { useState } from "react";
import { Container, Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        title: "Error",
        text: "Por favor, completa todos los campos.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
      return;
    }

    Swal.fire({
      title: "¡Mensaje enviado!",
      text: "Nos pondremos en contacto contigo pronto.",
      icon: "success",
      confirmButtonColor: "#28a745",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container className="contact-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center">¡Contáctanos!</h2>
          <p className="text-center text-muted">
            Déjanos tu mensaje y te responderemos a la brevedad.
          </p>

          <Form onSubmit={handleSubmit} className="contact-form">
            <Form.Group className="mb-3">
              <InputGroup>
                <InputGroup.Text>
                  <FaUser />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Tu nombre"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <InputGroup>
                <InputGroup.Text>
                  <FaEnvelope />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Tu email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3">
              <InputGroup>
                <InputGroup.Text>
                  <FaComment />
                </InputGroup.Text>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Escribe tu mensaje aquí..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>

            <Button variant="dark" type="submit" className="submit-btn">
              Enviar Mensaje
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
