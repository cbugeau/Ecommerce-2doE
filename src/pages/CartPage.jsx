import { Container } from "react-bootstrap";
import TableProductsUser from "../components/tableProductsUser/TableProductsUser";

//Averiguar como podrian identificar y relacionar al usuario, el carrito y los productos
//Averiguar como van a lograr que la cantidad de un producto solo sea modificado en ese producto
const CartPage = () => {
  return (
    <>
      <Container className="my-5">
        <TableProductsUser idPage="userCart" />
      </Container>
    </>
  );
};

export default CartPage;
