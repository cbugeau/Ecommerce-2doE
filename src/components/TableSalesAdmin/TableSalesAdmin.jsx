import { Table, Button, Badge } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const TableSalesAdmin = ({ sales, updateStatus }) => {
  const handleCancelSale = (id) => {
    Swal.fire({
      title: "Estás seguro de que quieres cancelar esta venta?",
      text: "Si cancelas la venta, no podrás recuperarla",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cancelar venta",
    }).then((result) => {
      if (result.isConfirmed) {
        updateStatus(id, "Cancelada");
        Swal.fire({
          title: "Venta cancelada",
          text: "La venta fue cancelada con éxito",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="container mt-4">
      <h2 className="fw-bold">Ventas</h2>
      <Table striped bordered hover responsive className="shadow-sm mt-3">
        <thead className="bg-light">
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sales.length > 0 ? (
            sales.map(({ id, title, category, price, status }) => (
              <tr key={id}>
                <td>{title}</td>
                <td>{category}</td>
                <td>${price}</td>
                <td>
                  <Badge
                    bg={
                      status === "Completada"
                        ? "success"
                        : status === "Pendiente"
                        ? "warning"
                        : "danger"
                    }
                  >
                    {status}
                  </Badge>
                </td>
                <td>
                  {status !== "Cancelada" && (
                    <>
                      <Button
                        variant="outline-success"
                        size="sm"
                        className="me-2"
                        onClick={() => updateStatus(id, "Completada")}
                      >
                        <FaCheckCircle />
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleCancelSale(id)}
                      >
                        <FaTimesCircle />
                      </Button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center text-muted py-3">
                No hay ventas disponibles
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TableSalesAdmin;
