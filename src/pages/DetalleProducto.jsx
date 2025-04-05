import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row, Modal } from "react-bootstrap";
import { FaWhatsapp, FaInstagram, FaShareAlt } from "react-icons/fa";
import "./DetalleProducto.css";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";

const DetalleProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [cargandoProducto, setCargandoProducto] = useState(true);
  const [imagenPrincipal, setImagenPrincipal] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);
  const [cantidad, setCantidad] = useState(1);

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
  const aumentarCantidad = () => {
    if (cantidad < producto.stock) {
      setCantidad(cantidad + 1);
    } else {
      Swal.fire({
        title: "Stock insuficiente",
        text: "No puedes agregar más de lo disponible en stock.",
        icon: "warning",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const agregarAlCarrito = () => {
    const usuarioLogueado = JSON.parse(
      sessionStorage.getItem("usuarioLogueado")
    );
    const carritoLs = JSON.parse(localStorage.getItem("carrito")) || [];
    const productoExiste = carritoLs.find((prod) => prod.id === producto.id);

    if (!usuarioLogueado) {
      Swal.fire({
        icon: "info",
        title: "Debes iniciar sesion para poder comprar",
      });

      navigate("/login");

      return;
    }

    if (productoExiste) {
      Swal.fire({
        icon: "error",
        title: "Este producto ya está cargado en el carrito",
        text: "Dirígete al carrito para modificar la cantidad de productos para llevar",
      });
      return;
    }

    carritoLs.push(producto);
    Swal.fire({
      title: "Producto agregado",
      text: "El producto se añadió al carrito.",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    });
    localStorage.setItem("carrito", JSON.stringify(carritoLs));
  };

  const agregarAListaDeseos = () => {
    Swal.fire({
      title: "Añadido a Favoritos",
      text: "El producto se añadió a tu lista de deseos.",
      icon: "info",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <Container className="my-4 card-container">
      <Row>
        <Col md="6">
          <Row>
            <Col xs="2" className="d-flex flex-column align-items-center">
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

        <Col md="6">
          <h2 className="mt-2 fw-bold titulo-producto">{producto.title}</h2>
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
            variant="dark"
            className="p-1"
            onClick={() => setMostrarModal(true)}
          >
            Ver más
          </Button>

          <div className="mt-3 cantidad">
            <h6>Cantidad:</h6>
            <Button
              variant="outline-dark"
              size="sm"
              onClick={disminuirCantidad}
            >
              -
            </Button>
            <span className="mx-2">{cantidad}</span>
            <Button variant="outline-dark" size="sm" onClick={aumentarCantidad}>
              +
            </Button>
          </div>

          <div className="mt-4 botones">
            <Button variant="dark" className="me-2" onClick={agregarAlCarrito}>
              Agregar al Carrito
            </Button>
            <Button variant="secondary" onClick={agregarAListaDeseos}>
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
