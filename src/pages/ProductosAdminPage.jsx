import Sidebar from "../components/Sidebar/SidebarC";
import { Row, Col, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductTable from "../components/TableProductsAdmin/TableProductsAdmin";
import { useState, useEffect } from "react";
import EditProductModal from "../components/EditProductModalAdmin/EditProductModalAdmin";

const ProductosAdminPage = () => {
  const [productos, setProductos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const getProducts = () => {
      try {
        const productosLs = JSON.parse(
          localStorage.getItem("productos") || "[]"
        );

        setProductos(productosLs.slice(0, 12));
        uniqueCategories(productosLs);
      } catch (error) {
        console.log("Error al cargar productos:", error);
      }
    };
    getProducts();
  }, []);

  const uniqueCategories = (productos) => {
    const categorys = [...new Set(productos.map((p) => p.category))];
    setCategories(categorys);
  };

  const handleEdit = (id) => {
    const product = productos.find((p) => p.id === id);
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setProductos(productos.filter((p) => p.id !== id));
    localStorage.setItem(
      "productos",
      JSON.stringify(productos.filter((p) => p.id !== id))
    );
  };

const handleSaveChanges = () => {
  if (!selectedProduct || !selectedProduct.id) {
    console.error("Error: Producto seleccionado no válido");
    return;
  }

  const updatedProducts = productos.map((p) =>
    p.id === selectedProduct.id ? { ...p, ...selectedProduct } : p
  );

  setProductos(updatedProducts);
  localStorage.setItem("productos", JSON.stringify(updatedProducts));
  setShowModal(false);
};

  return (
    <Row className="g-0">
      {/* Sidebar */}
      <Col xs={12} md={3} lg={2} className="bg-light">
        <Sidebar />
      </Col>
      {/* Tarjetas de productos */}
      <Col xs={12} md={9} lg={10} className="p-4">
        <Button variant="primary" className="mb-3">
          <Link
            to="/agregar-producto"
            style={{ textDecoration: "none", color: "white" }}
          >
            + Agregar Producto{" "}
          </Link>
        </Button>
        <ProductTable
          products={productos}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Col>
      <EditProductModal
        show={showModal}
        onHide={() => setShowModal(false)}
        product={selectedProduct}
        setProduct={setSelectedProduct}
        onSave={handleSaveChanges}
        categories={categories}
      />
    </Row>
  );
};

export default ProductosAdminPage;
