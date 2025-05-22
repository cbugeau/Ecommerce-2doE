import Sidebar from "../components/Sidebar/SidebarC";
import { Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import ProductTable from "../components/TableProductsAdmin/TableProductsAdmin";
import EditProductModal from "../components/EditProductModalAdmin/EditProductModalAdmin";
import Swal from "sweetalert2"; // Asegúrate de importar SweetAlert2

const ProductosAdminPage = () => {
  const [productos, setProductos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    title: "",
    price: "",
    stock: "",
  });

  // Cargar productos desde localStorage
  useEffect(() => {
    const getProducts = () => {
      try {
        const productosLs = JSON.parse(
          localStorage.getItem("productos") || "[]"
        );
        setProductos(productosLs);
        uniqueCategories(productosLs);
      } catch (error) {
        console.log("Error al cargar productos:", error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    if (productos.length > 0) {
      localStorage.setItem("productos", JSON.stringify(productos)); // Guardar en localStorage
    }
  }, [productos]);

  const uniqueCategories = (productos) => {
    const categorys = [...new Set(productos.map((p) => p.category))];
    setCategories(categorys);
  };

  useEffect(() => {
    uniqueCategories(productos);
  }, [productos]);

  const handleOpenModal = (product = null) => {
    if (product) {
      setIsEditMode(true);
      setSelectedProduct(product);
    } else {
      setIsEditMode(false);
      setSelectedProduct({
        title: "",
        description: "",
        price: "",
        stock: "",
      });
      setShowModal(true);
    }
  };

  const handleEdit = (id) => {
    const product = productos.find((p) => p.id === id);
    setIsEditMode(true);
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Estás seguro de que quieres eliminar este producto?",
      text: "Si te arrepientes después puedes cargarlo nuevamente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, estoy seguro",
    }).then((result) => {
      if (result.isConfirmed) {
        // Eliminar el producto del listado de productos
        const updatedProductos = productos.filter((p) => p.id !== id);
        setProductos(updatedProductos); // Actualiza el estado

        // También actualizamos el localStorage
        localStorage.setItem("productos", JSON.stringify(updatedProductos));

        // Mostrar notificación de éxito
        Swal.fire({
          title: "Producto eliminado",
          text: "El producto fue eliminado con éxito",
          icon: "success",
        });
      }
    });
  };

  const handleSaveChanges = () => {
    if (!selectedProduct || !selectedProduct.title || !selectedProduct.price) {
      console.error("Error: Datos del producto no válidos");
      return;
    }

    if (isEditMode) {
      setProductos((prevProductos) =>
        prevProductos.map((p) =>
          p.id === selectedProduct.id ? { ...p, ...selectedProduct } : p
        )
      );
    } else {
      setProductos((prevProductos) => [
        ...prevProductos,
        { ...selectedProduct, id: Date.now() },
      ]);
    }

    setShowModal(false);
  };

  return (
    <Row className="g-0">
      {/* Sidebar */}
      <Col xs={12} md={3} lg={2} className="bg-light">
        <Sidebar />
      </Col>

      {/* Tarjetas de productos */}
      <Col xs={12} md={9} lg={10} className="p-3">
        <div className="d-flex flex-column align-items-center align-items-md-start">
          {/* Botón de Agregar Producto */}
          <Button
            onClick={() => handleOpenModal()}
            style={{ backgroundColor: "#ee6c4d", border: "none" }}
          >
            + Agregar Producto
          </Button>

          {/* Tabla de productos */}
          <div className="w-100">
            <ProductTable
              products={productos.slice(0, 12)} // Mostramos solo 12
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </Col>

      {/* Modal para editar productos */}
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
