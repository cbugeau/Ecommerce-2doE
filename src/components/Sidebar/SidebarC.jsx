import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import "./Sidebar.css";

const SidebarC = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="d-flex bg-custom">
        {/* Botón para abrir el sidebar en pantallas pequeñas */}
        <Button
          variant="dark"
          className="d-md-none m-2"
          onClick={() => setShow(!show)}
        >
          ☰
        </Button>

        {/* Sidebar: se muestra solo si 'show' es true en pantallas pequeñas */}
        <div
          className={`${
            show ? "d-block" : "d-none"
          } d-md-block position-fixed  text-white p-3 vh-100 bg-custom`}
          style={{}}
        >
          <Nav className="flex-column">
            <Nav.Link href="/admin/dashboard" className="text-light">
              Panel Principal
            </Nav.Link>
            <Nav.Link href="/admin/products" className="text-light">
              Productos
            </Nav.Link>
            <Nav.Link href="/admin/orders" className="text-light">
              Bajo Stock
            </Nav.Link>
            <Nav.Link href="/admin/users" className="text-light">
              Ventas
            </Nav.Link>
            <Nav.Link href="/admin/customers" className="text-light">
              Clientes
            </Nav.Link>
          </Nav>
        </div>
      </div>
    </>
  );
};

export default SidebarC;
