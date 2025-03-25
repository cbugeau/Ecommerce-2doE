import { Col, Container, Row } from "react-bootstrap";
import CardC from "../components/card/CardC";
import { useEffect, useState } from "react";
import SidebarFilters from "../components/SidebarFilters/SidebarFilters";
import { fetchApiDummy } from "../helpers/useApi";

const HomePage = () => {
  const [productos, setProductos] = useState([]);
  const [buscar, setBuscar] = useState("");

  const obtenerProductos = async () => {
    try {
      const productosLs = JSON.parse(localStorage.getItem("productos")) || [];

      if (productosLs.length) {
        setProductos(productosLs);
      } else {
        const res = await fetchApiDummy();
        console.log(res);

        localStorage.setItem("productos", JSON.stringify(res.products || []));
        setProductos(res.products || []);
      }
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
    <Container fluid>
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
                <Col key={producto.id} sm="12" md="6" lg="4" className="mb-4">
                  <CardC
                    idProd={producto.id}
                    urlImagen={producto.images}
                    titulo={producto.title}
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
  );
};

export default HomePage;
