import { Table, Button, Badge } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";

const ProductTable = ({ products, onEdit, onDelete }) => {
  return (
    <div className="container mt-4">
      <h2 className="fw-bold">Productos</h2>
      <Table striped bordered hover responsive className="shadow-sm mt-3">
        <thead className="bg-light">
          <tr>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td className={product.stock < 10 ? "text-danger fw-bold" : ""}>
                  {product.stock < 10
                    ? `${product.stock} Reponer`
                    : product.stock}
                </td>
                <td>
                  <Badge bg="primary">Activo</Badge>
                </td>
                <td>
                  <Button
                    variant="outline-dark"
                    size="sm"
                    className="me-2"
                    onClick={() => onEdit(product.id)}
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => onDelete(product.id)}
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center text-muted py-3">
                No hay productos disponibles
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;
