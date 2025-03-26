import Card from "react-bootstrap/Card";
import "./CardC.css";
import { CardText } from "react-bootstrap";
import { Link } from "react-router";
import defaultImage from "../../images/misterybox.png";

const CardC = ({ idProd, urlImagen, titulo, descripcion, stock, precio }) => {
  return (
    <>
      <Link to={`/detalle-producto/${idProd}`} className="no-decoration">
        <Card className="">
          <Card.Img
            variant="top"
            src={urlImagen ? urlImagen[0] : defaultImage}
            className="img-card"
          />
          <Card.Body className="">
            <Card.Title className="titulo-card text-truncate">
              {titulo}
            </Card.Title>
            <Card.Text className="text-truncate">{descripcion}</Card.Text>
            <Card.Text className={stock > 0 ? "stock" : "agotado"}>
              {stock > 0 ? `Stock disponible: ${stock}` : "Agotado"}
            </Card.Text>
            <CardText className="precio-card">${precio}</CardText>
            {/*           <Link
            to={`/detalle-producto/${idProd}`}
            className="btn btn-primary fw-bold"
          >
            Ver Mas
          </Link> */}
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export default CardC;
