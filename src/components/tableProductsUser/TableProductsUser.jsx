import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./TableProductsUser.css";
import Swal from "sweetalert2";

const TableProductsUser = () => {
  const navigate = useNavigate();
  const [cantidades, setCantidades] = useState({});
  const [carrito, setCarrito] = useState([]);

  const handleChangeQuantity = (id, ev) => {
    const nuevaCantidad = ev.target.value <= 0 ? 1 : ev.target.value;
    setCantidades({
      ...cantidades,
      [id]: nuevaCantidad,
    });
  };

  const borrarProducto = (idProducto) => {
    Swal.fire({
      title: "Estás seguro que deseas eliminar este producto?",
      text: "Después podrás cargarlo al carrito nuevamente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, estoy seguro",
    }).then((result) => {
      if (result.isConfirmed) {
        const carritoLs = JSON.parse(localStorage.getItem("carrito"));
        const carritoSinElProducto = carritoLs.filter(
          (producto) => producto.id !== idProducto
        );
        setCarrito(carritoSinElProducto);
        localStorage.setItem("carrito", JSON.stringify(carritoSinElProducto));

        Swal.fire({
          title: "Producto eliminado del carrito",
          text: "Tu producto fue eliminado con éxito",
          icon: "success",
        });
      }
    });
  };

  const comprarProductos = () => {
    Swal.fire({
      showCancelButton: true,
      title: "Compra realizada con éxito!",
      text: "Pronto te llegará un correo para ver el seguimiento de tus productos",
      icon: "success",
      cancelButtonColor: "#d33",
      confirmButtonText: "Volver al inicio",
    }).then((result) => {
      if (result.isConfirmed) {
        setCarrito([]);
        localStorage.setItem("carrito", JSON.stringify([]));
        navigate("/user");
      }
    });
  };

  useEffect(() => {
    const carritoLs = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoLs);
  }, []);

  return (
    <>
      {carrito.length ? (
        <div>
          <Table striped bordered hover className="my-5">
            <thead>
              <tr>
                <th className="text-center d-none d-md-table-cell">ID</th>
                <th className="text-center">Imagen</th>
                <th className="text-center d-none d-md-table-cell">Nombre</th>
                <th className="text-center d-none d-md-table-cell">Precio</th>
                <th className="text-center">Cantidad</th>
                <th className="text-center">Total</th>
                <th className="text-center">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((producto, i) => (
                <tr key={producto.id}>
                  <td className="text-center d-none d-md-table-cell">
                    {i + 1}
                  </td>
                  <td className="text-center">
                    <img
                      src={producto.images[0]}
                      alt={producto.title}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td className="text-center d-none d-md-table-cell">
                    {producto.title}
                  </td>
                  <td className="text-center d-none d-md-table-cell">
                    ${producto.price}
                  </td>
                  <td className="text-center">
                    <input
                      type="number"
                      className="text-center"
                      value={cantidades[producto.id] || 1}
                      onChange={(e) => handleChangeQuantity(producto.id, e)}
                      min="1"
                      max={producto.stock}
                    />
                  </td>
                  <td className="text-center">
                    <p className="precio-total">
                      $
                      {(cantidades[producto.id]
                        ? cantidades[producto.id] * producto.price
                        : producto.price
                      ).toFixed(2)}
                    </p>
                  </td>

                  <td className="text-center">
                    <Button
                      variant="danger"
                      onClick={() => borrarProducto(producto.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="text-center my-4">
            <h4>
              Total: $
              {carrito
                .reduce((suma, producto) => {
                  return (
                    suma +
                    (cantidades[producto.id] ? cantidades[producto.id] : 1) *
                      producto.price
                  );
                }, 0)
                .toFixed(2)}
            </h4>
            <Button variant="success" onClick={() => comprarProductos()}>
              Comprar
            </Button>
          </div>
        </div>
      ) : (
        <h2 className="text-center my-5">
          No hay productos cargados en el carrito
        </h2>
      )}
    </>
  );
};

export default TableProductsUser;
