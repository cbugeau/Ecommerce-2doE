import { Col, Container, Row } from "react-bootstrap";
import CardC from "../components/card/CardC";
import { useEffect, useState } from "react";
//import { fetchApiDummy } from "../helpers/useApi";

const HomePage = () => {
  const [productos, setProductos] = useState([]);

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

  return (
    <>
      <Container>
        <Row>
          {productos.map((producto) => (
            <Col key={producto.id} sm="12" md="6" lg="4">
              <CardC
                idProd={producto.id}
                urlImagen={producto.images}
                titulo={producto.title}
                descripcion={producto.description}
                precio={producto.price}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
