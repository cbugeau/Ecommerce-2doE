import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";

const TableProductsUser = () => {
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
      title: "Estás seguro de que quieres eliminar a este producto?",
      text: "Si te arrepientes después puedes cargarlo nuevamente",
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

  useEffect(() => {
    const carritoLs = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoLs);
  }, []);

  return (
    <>
      {carrito.length ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Nombre</th>
              <th className="text-center">Precio</th>
              <th className="text-center">Cantidad</th>
              <th className="text-center">Total</th>
              <th className="text-center">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((producto, i) => (
              <tr key={producto.id}>
                <td className="text-center">{i + 1}</td>
                <td className="text-center">{producto.title}</td>
                <td className="text-center">${producto.price}</td>
                <td className="text-center">
                  <input
                    type="number"
                    className="w-50"
                    value={cantidades[producto.id] || 1} // Si no hay cantidad guardada, usa 1
                    onChange={(e) => handleChangeQuantity(producto.id, e)}
                  />
                </td>
                <td className="text-center">
                  <p>
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
      ) : (
        <h2 className="text-center my-5">
          No hay productos cargados en el carrito
        </h2>
      )}
    </>
  );
};

export default TableProductsUser;
