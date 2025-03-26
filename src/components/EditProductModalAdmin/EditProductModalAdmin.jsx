import { Modal, Button, Form } from "react-bootstrap";

const EditProductModal = ({
  show,
  onHide,
  product,
  setProduct,
  onSave,
  categories,
}) => {
  const isEditMode = !!product?.id; // Determina si es edición o creación

  const handleStockChange = (increment) => {
    setProduct({
      ...product,
      stock: Math.max(0, (product.stock || 0) + increment),
    });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          {isEditMode ? "Editar Producto" : "Agregar Producto"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={product.title || ""}
              onChange={(e) =>
                setProduct({ ...product, title: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              type="text"
              value={product.description || ""}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              value={product.price || ""}
              onChange={(e) =>
                setProduct({
                  ...product,
                  price: parseFloat(e.target.value) || 0,
                })
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              value={product.stock || ""}
              onChange={(e) =>
                setProduct({ ...product, stock: parseInt(e.target.value) || 0 })
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Categoría</Form.Label>
            <Form.Select
              value={product.category || ""}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
            >
              <option value="">Seleccione una categoría</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={onSave}>
          {isEditMode ? "Guardar Cambios" : "Agregar Producto"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProductModal;
