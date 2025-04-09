import { Accordion, Form } from "react-bootstrap";
import "./SidebarFilters.css";
import publicidad1 from "../../assets/imagenes/publicidad-calvin-klein.webp";
import publicidad2 from "../../assets/imagenes/publicidad-muebles.webp";

const SidebarFilters = ({
  buscar,
  setBuscar,
  categorias,
  filtros,
  setFiltros,
}) => {
  const handleCheckboxChange = (categoria) => {
    setFiltros(
      (prevFiltros) =>
        prevFiltros.includes(categoria)
          ? prevFiltros.filter((filtro) => filtro !== categoria) // Quitar si ya está
          : [...prevFiltros, categoria] // Agregar si no está
    );
  };

  return (
    <div className="mb-5 search">
      {/* Input de búsqueda */}
      <div className="mb-3">
        <Form.Control
          type="text"
          placeholder="Buscar productos..."
          className="mb-3"
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
        />
      </div>

      {/* Filtros de categorías */}
      <Accordion defaultActiveKey="0" alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Categorías</Accordion.Header>
          <Accordion.Body>
            {categorias.length > 0 ? (
              categorias.map((categoria, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  label={categoria}
                  checked={filtros.includes(categoria)}
                  onChange={() => handleCheckboxChange(categoria)}
                  className="py-2 box"
                />
              ))
            ) : (
              <p>No hay categorías disponibles</p>
            )}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <img
        src={publicidad1}
        alt="publicidad de calvin klein"
        className="pt-3"
      />
      <img
        src={publicidad2}
        alt="publicidad de calvin klein"
        className="pt-3"
      />
    </div>
  );
};

export default SidebarFilters;
