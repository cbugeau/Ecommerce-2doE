import Card from "react-bootstrap/Card";
import "./CardC.css";
import { CardText } from "react-bootstrap";
import { Link } from "react-router";

const CardC = ({ idProd, urlImagen, titulo, descripcion, precio }) => {
  return (
    <>
      <Card className="mt-5 mb-5">
        <Card.Img variant="top" src={urlImagen[0]} />
        <Card.Body className="text-center">
          <Card.Title className="text-truncate">{titulo}</Card.Title>
          <Card.Text className="text-truncate">{descripcion}</Card.Text>
          <CardText>{precio}</CardText>
          <Link to={`/detalle-producto/${idProd}`} className="btn btn-primary">
            Ver Mas
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardC;
