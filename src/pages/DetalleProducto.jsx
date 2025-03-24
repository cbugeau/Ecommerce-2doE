import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row, Modal } from "react-bootstrap";
import { FaWhatsapp, FaInstagram, FaShareAlt } from "react-icons/fa";
import "./DetalleProducto.css";
import { useParams, useNavigate } from "react-router";

const DetalleProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [cargandoProducto, setCargandoProducto] = useState(true);
  const [imagenPrincipal, setImagenPrincipal] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const respuesta = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await respuesta.json();
        setProducto(data);
        setImagenPrincipal(data.thumbnail);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setCargandoProducto(false);
      }
    };

    obtenerProducto();
  }, [id]);

  if (cargandoProducto) {
    return <p className="text-center mt-4">Cargando producto...</p>;
  }

  if (!producto) {
    return (
      <p className="text-center mt-4 text-danger">Producto no encontrado.</p>
    );
  }
  const handleRedirect = () => {
    navigate("*");
  };

  return (
    <Container className="my-4 card-container">
      <Row>
        <Col md="6">
          <Row>
            <Col xs="3" className="d-flex flex-column align-items-center">
              {producto.images?.slice(0, 3).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Miniatura ${index + 1}`}
                  className="mb-2 img-fluid img-thumbnail miniatura"
                  onMouseEnter={() => setImagenPrincipal(img)}
                />
              ))}
            </Col>

            <Col xs="9">
              <img
                src={imagenPrincipal}
                alt="Producto principal"
                className="img-fluid img-principal"
              />
            </Col>
          </Row>

          <div className="mt-4 compartir">
            <span className="fw-bold">Compartir:</span>
            <Button variant="outline-success" size="sm" className="ms-2">
              <FaWhatsapp />
            </Button>
            <Button variant="outline-danger" size="sm" className="ms-2">
              <FaInstagram />
            </Button>
            <Button variant="outline-primary" size="sm" className="ms-2">
              <FaShareAlt />
            </Button>
          </div>
        </Col>

        <Col md="6" className="info-producto">
          <h2 className="titulo-producto">{producto.title}</h2>
          <h5 className="categoria">Categoría: {producto.category}</h5>
          <h4 className="precio">${producto.price}</h4>
          <h6 className={producto.stock > 0 ? "stock" : "agotado"}>
            {producto.stock > 0
              ? `Stock disponible: ${producto.stock}`
              : "Agotado"}
          </h6>

          {producto.rating && (
            <p className="rating">
              {"★".repeat(Math.round(producto.rating))}
              {"☆".repeat(5 - Math.round(producto.rating))}
              <span className="text-muted ms-2">
                (Rating: {producto.rating})
              </span>
            </p>
          )}

          <p>{producto.description?.substring(0, 100)}...</p>
          <Button
            variant="outline-secondary"
            className="p-0"
            onClick={() => setMostrarModal(true)}
          >
            Ver más
          </Button>

          <div className="mt-3 cantidad">
            <h6>Cantidad:</h6>
            <Button variant="outline-dark" size="sm">
              -
            </Button>
            <span className="mx-2">1</span>
            <Button variant="outline-dark" size="sm">
              +
            </Button>
          </div>

          <div className="mt-4 botones">
            <Button variant="dark" className="me-2" onClick={handleRedirect}>
              Agregar al Carrito
            </Button>
            <Button variant="outline-secondary" onClick={handleRedirect}>
              Lista de Deseos
            </Button>
          </div>
        </Col>
      </Row>

      <Modal show={mostrarModal} onHide={() => setMostrarModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Descripción del Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>{producto.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setMostrarModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default DetalleProducto;
