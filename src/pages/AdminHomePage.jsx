import { useEffect, useState } from "react";
import CardAdmin from "../components/CardAdmin/CardAdmin";
import SidebarC from "../components/Sidebar/SidebarC";
import { Col, Row, Container, Card } from "react-bootstrap";
import { FaShoppingCart, FaStar, FaExclamationTriangle } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import BarGraphAdmin from "../components/BarGraphAdmin/BarGraphAdmin";
import reviewsUsers from "../database/reviewsUsers";

const AdminHomePage = () => {
  const [VentaMes, setVentaMes] = useState(0);
  const [ProductoDestacado, setProductoDestacado] = useState(null);
  const [BajoStock, setBajoStock] = useState([]);
  const [VentaCuatrimestral, SetVentaCuatrimestral] = useState([]);

  const getProductos = () => {
    try {
      const productosLs = JSON.parse(localStorage.getItem("productos") || "[]");
      procesarProductos(productosLs);
    } catch (error) {
      console.log(error);
    }
  };

  const procesarProductos = (productos) => {
    let ventasTotales = 0;
    let Maxventas = 0;
    let destacado = null;
    let productosBajoStock = [];

    productos.forEach((producto) => {
      const ventasFalsas = Math.floor(Math.random() * 200);
      const stockFalso = Math.floor(Math.random() * 50);

      ventasTotales += ventasFalsas;

      if (ventasFalsas > Maxventas) {
        Maxventas = ventasFalsas;
        destacado = { ...producto, ventas: ventasFalsas };
      }

      if (stockFalso < 10) {
        productosBajoStock.push({ ...producto, stock: stockFalso });
      }
    });

    if (!destacado) {
      destacado = { nombre: "No hay producto destacado", ventas: 0 };
    }

    setBajoStock(productosBajoStock);
    setVentaMes(ventasTotales);
    setProductoDestacado(destacado);
  };

  const falseQuatertlySales = () => {
    const ventas = [];
    for (let i = 0; i < 4; i++) {
      const venta = Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000;
      ventas.push(venta);
    }
    SetVentaCuatrimestral(ventas);
  };

  useEffect(() => {
    getProductos();
    falseQuatertlySales();
  }, []);

  return (
    <>
      <Row className="g-0">
        {/* Sidebar */}
        <Col xs={12} md={3} lg={2} className="bg-light">
          <SidebarC />
        </Col>

        {/* Main content */}
        <Col xs={12} md={9} lg={10}>
          <Container>
            <Row className="my-5">
              {/* Ventas del mes */}
              <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
                <CardAdmin
                  title="Ventas Totales Del mes"
                  subtitule={`$${VentaMes}`}
                  text="Se registraron este mes"
                  icon={FaShoppingCart}
                />
              </Col>

              {/* Producto destacado */}
              <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
                <CardAdmin
                  title="Producto destacado del mes"
                  subtitule={
                    ProductoDestacado
                      ? ProductoDestacado.title
                      : "No hay producto destacado"
                  }
                  text={`Este producto se vendió ${
                    ProductoDestacado ? ProductoDestacado.ventas : 0
                  } veces`}
                  icon={FaStar}
                />
              </Col>

              {/* Productos bajo stock */}
              <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
                {BajoStock.length > 0 ? (
                  <CardAdmin
                    title="Bajo Stock"
                    subtitule={BajoStock.length}
                    text="Productos por reponer"
                    icon={FaExclamationTriangle}
                  />
                ) : (
                  <Card className="shadow-sm rounded bg-success text-white">
                    <Card.Body>
                      <Card.Title className="h5">
                        <BiSolidLike /> Excelente
                      </Card.Title>
                      <Card.Subtitle className="mb-2">
                        Todo en orden
                      </Card.Subtitle>
                      <Card.Text>No hay productos en bajo stock</Card.Text>
                    </Card.Body>
                  </Card>
                )}
              </Col>
            </Row>

            {/* Nueva fila para el nuevo componente y los reviews */}
            <Row className="my-5">
              <Col xs={12} md={6} lg={6} className="mb-4">
                <BarGraphAdmin salesData={VentaCuatrimestral} />
              </Col>

              {/* Section de Reviews */}
              <Col xs={12} md={6} lg={6} className="mb-4">
                {reviewsUsers.map((review, i) => {
                  return (
                    <ReviewCard
                      key={i}
                      name={review.name}
                      review={review.description}
                      rating={review.rating}
                    />
                  );
                })}
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default AdminHomePage;
