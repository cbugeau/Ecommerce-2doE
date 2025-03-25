import { Modal, Button, Form } from "react-bootstrap";

const EditProductModal = ({
  show,
  onHide,
  product,
  setProduct,
  onSave,
  categories,
}) => {
  const handleStockChange = (increment) => {
    setProduct({ ...product, stock: Math.max(0, product.stock + increment) });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {product && (
          <Form>
            {/* Nombre */}
            <Form.Group>
              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control
                type="text"
                value={product.title}
                onChange={(e) =>
                  setProduct({ ...product, title: e.target.value })
                }
              />
            </Form.Group>

            {/* Precio */}
            <Form.Group className="mt-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: parseFloat(e.target.value) })
                }
              />
            </Form.Group>

            {/* Stock con botones */}
            <Form.Group className="mt-3">
              <Form.Label>Stock</Form.Label>
              <div className="d-flex align-items-center">
                <Button variant="danger" onClick={() => handleStockChange(-1)}>
                  -
                </Button>
                <Form.Control
                  type="number"
                  value={product.stock}
                  className="mx-2 text-center"
                  style={{ width: "70px" }}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      stock: Math.max(0, parseInt(e.target.value)),
                    })
                  }
                />
                <Button variant="success" onClick={() => handleStockChange(1)}>
                  +
                </Button>
              </div>
            </Form.Group>

            {/* Categoría */}
            <Form.Group className="mt-3">
              <Form.Label>Categoría</Form.Label>
              <Form.Select
                value={product.category}
                onChange={(e) =>
                  setProduct({ ...product, category: e.target.value })
                }
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={onSave}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProductModal;
