import { Col, Row } from "react-bootstrap";
import SidebarC from "../components/Sidebar/SidebarC";
import TableSalesAdmin from "../components/TableSalesAdmin/TableSalesAdmin";
import { useState, useEffect } from "react";

const SalesAdminPage = () => {
  const [ventas, setVentas] = useState([]);

  // Función para obtener un estado aleatorio para cada venta
  const getEstadoVenta = () => {
    const estados = ["Pendiente", "Completada", "Cancelada"];
    const randomIndex = Math.floor(Math.random() * estados.length);
    return estados[randomIndex];
  };

  const salesStatusController = (id, nuevoEstado) => {
    const updateSales = ventas.map((v) => {
      if (v.id === id) {
        return { ...v, status: nuevoEstado };
      }
      return v;
    });
    setVentas(updateSales);
  };

  const getVentas = () => {
    try {
      // Obtén las ventas desde el localStorage
      const ventasLs = JSON.parse(localStorage.getItem("productos") || "[]");

      // Agrega el estado aleatorio a cada venta con el operador spread
      const ventasConEstado = ventasLs.map((venta) => ({
        ...venta, // Propiedades de la venta
        status: getEstadoVenta(), // Estado aleatorio
      }));
      setVentas(ventasConEstado.slice(0, 12)); // Establecer las ventas en el estado
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getVentas();
  }, []);

  return (
    <>
      {console.log(ventas)}
      <Row className="g-0">
        {/* Sidebar */}
        <Col xs={12} md={3} lg={2} className="bg-light">
          <SidebarC />
        </Col>
        <Col xs={12} md={9} lg={10} className="p-3">
          <div className="d-flex flex-column align-items-center align-items-md-start">
            {/* Tabla de productos */}
            <div className="w-100">
              {
                <TableSalesAdmin
                  sales={ventas}
                  updateStatus={salesStatusController}
                />
              }
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SalesAdminPage;
