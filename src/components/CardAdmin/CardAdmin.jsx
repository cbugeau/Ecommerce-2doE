import { Card } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const SalesCard = ({ title, subtitule, text, icon: Icon }) => {
  return (
    <Card className="shadow-sm border-0 p-3">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <Card.Title className="text-muted">{title}</Card.Title>
            <h2 className="fw-bold">{subtitule}</h2>
            <Card.Text className="text-success">{text}</Card.Text>
          </div>
          {Icon && <Icon size={20} className="text-muted" />}
        </div>
      </Card.Body>
    </Card>
  );
};

export default SalesCard;
