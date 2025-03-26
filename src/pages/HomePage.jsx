import { Col, Container, Row } from "react-bootstrap";
import CardC from "../components/card/CardC";
import { useEffect, useState } from "react";
import SidebarFilters from "../components/SidebarFilters/SidebarFilters";
import { fetchApiDummy } from "../helpers/useApi";
import CarouselC from "../components/carousel/CarouselC";

const HomePage = () => {
  const [productos, setProductos] = useState([]);
  const [buscar, setBuscar] = useState("");
  const [cargando, setCargando] = useState(true);
  const [filtros, setFiltros] = useState([]);

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
    } finally {
      setCargando(false); // Cambiar estado de carga cuando termina
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda = producto.title
      ?.toLowerCase()
      .includes(buscar.toLowerCase());
    const coincideCategoria =
      filtros.length === 0 || filtros.includes(producto.category);
    return coincideBusqueda && coincideCategoria;
  });

  const categorias = [...new Set(productos.map((p) => p.category))];

  return (
    <>
      <CarouselC />
      <Container fluid className="my-5">
        <Row>
          <Col
            sm="12"
            md="4"
            lg="3"
            className="d-flex justify-content-center px-3"
          >
            <SidebarFilters
              buscar={buscar}
              setBuscar={setBuscar}
              categorias={categorias}
              filtros={filtros}
              setFiltros={setFiltros}
            />
          </Col>

          <Col sm="12" md="8" lg="9" className="px-3">
            <Row>
              {cargando ? (
                <p className="text-center mt-3">Cargando productos...</p>
              ) : productosFiltrados.length > 0 ? (
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
                <h2 className="mt-3 text-center">
                  No se encontraron productos.
                </h2>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
