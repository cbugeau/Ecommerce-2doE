import React, { useState } from "react";
import { Navbar, Nav, Button, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css"; // Asegúrate de que la ruta sea correcta

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="sidebar">
        <Offcanvas
          show={show}
          onHide={handleClose}
          responsive="lg"
          className="vh-100"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Hola Admin!</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="sidebar">
            {" "}
            {/* Aplica la clase aquí */}
            <Nav className="flex-column fs-5 ">
              <Nav.Link href="/admin">Principal</Nav.Link>
              <Nav.Link href="/admin/productos">Productos</Nav.Link>
              <Nav.Link href="/admin/ventas">Ventas</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Sidebar;
