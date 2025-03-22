import { Accordion, Button, Form } from "react-bootstrap";
import "./SidebarFilters.css";

const SidebarFilters = ({ buscar, setBuscar }) => {
  return (
    <div className="mt-5 search">
      <div className="mb-3">
        <Form.Control
          type="text"
          placeholder="Buscar productos..."
          className="mb-3"
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
        />
      </div>

      <Accordion defaultActiveKey="0" alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Categorias</Accordion.Header>
          <Accordion.Body>
            <Form.Check type="checkbox" label="1" />
            <Form.Check type="checkbox" label="2" />
            <Form.Check type="checkbox" label="3" />
            <Form.Check type="checkbox" label="4" />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Marcas</Accordion.Header>
          <Accordion.Body>
            <Form.Check type="checkbox" label="1" />
            <Form.Check type="checkbox" label="2" />
            <Form.Check type="checkbox" label="3" />
            <Form.Check type="checkbox" label="4" />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Etiquetas</Accordion.Header>
          <Accordion.Body>
            <Form.Check type="checkbox" label="1" />
            <Form.Check type="checkbox" label="2" />
            <Form.Check type="checkbox" label="3" />
            <Form.Check type="checkbox" label="4" />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default SidebarFilters;
