import { Accordion, Form } from "react-bootstrap";
import "./SidebarFilters.css";

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
    </div>
  );
};

export default SidebarFilters;
