import { Col, Container, Row } from "react-bootstrap";
<<<<<<< HEAD
import CardC from "../components/Card/CardC";
=======
import CardC from "../components/card/CardC";
import { useEffect, useState } from "react";
>>>>>>> addf98f86921fd8cc61d0bbf462d5b0875038c2e

const HomePage = () => {
  const [productos, setProductos] = useState([]);

  const obtenerProducto = async () => {
    try {
      const productos = await fetch("https://dummyjson.com/products?limit=9"); // El limit=9 es el limite de productos que ingresan desde la API, se puede modificar.
      const data = await productos.json();
      setProductos(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerProducto();
  }, []);

  return (
    <>
      <Container>
        <Row>
          {productos.map((producto) => (
            <Col key={producto.id} sm="12" md="6" lg="4">
              <CardC
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
