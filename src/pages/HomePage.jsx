import { Carousel, Col, Container, Row } from "react-bootstrap";
import CardC from "../components/card/CardC";
import { useEffect, useState } from "react";
import SidebarFilters from "../components/SidebarFilters/SidebarFilters";
import CarouselC from "../components/carousel/CarouselC";
//import { fetchApiDummy } from "../helpers/useApi";

const HomePage = () => {
  const [productos, setProductos] = useState([]);
  const [buscar, setBuscar] = useState("");

  const obtenerProductos = async () => {
    try {
      const productos = await fetch("https://dummyjson.com/products?limit=9");
      const data = await productos.json();
      console.log(data);
      setProductos(data.products || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const productosFiltrados = productos.filter(
    (producto) =>
      producto.title?.toLowerCase().includes(buscar.toLowerCase()) ||
      "" ||
      producto.category?.toLowerCase().includes(buscar.toLowerCase()) ||
      ""
  );

  return (
    <>
      <CarouselC />
      <Container fluid className="my-5">
        <Row>
          <Col
            sm="12"
            md="3"
            lg="2"
            className="d-flex justify-content-center px-3"
          >
            <SidebarFilters buscar={buscar} setBuscar={setBuscar} />
          </Col>

          <Col sm="12" md="9" lg="10" className="px-3">
            <Row>
              {productosFiltrados.length > 0 ? (
                productosFiltrados.map((producto) => (
                  <Col key={producto.id} sm="12" md="6" lg="3" className="mb-4">
                    <CardC
                      idProd={producto.id}
                      urlImagen={producto.images}
                      titulo={producto.title}
                      stock={producto.stock}
                      descripcion={producto.description}
                      precio={producto.price}
                    />
                  </Col>
                ))
              ) : (
                <p className="mt-3">No se encontraron productos.</p>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
