import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CardC.css";
import { CardText } from "react-bootstrap";

const CardC = ({ urlImagen, titulo, descripcion, precio }) => {
  return (
    <>
      <Card className="mt-5 mb-5">
        <Card.Img variant="top" src={urlImagen[0]} />
        <Card.Body className="text-center">
          <Card.Title className="text-truncate">{titulo}</Card.Title>
          <Card.Text className="text-truncate">{descripcion}</Card.Text>
          <CardText>{precio}</CardText>
          <Button variant="primary">Añadir al carrito</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardC;
