import { Container } from "react-bootstrap";
import TableProductsUser from "../components/tableProductsUser/TableProductsUser";

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
