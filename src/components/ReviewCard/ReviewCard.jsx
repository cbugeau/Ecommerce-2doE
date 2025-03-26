import React from "react";
import { Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ name, review, rating }) => {
  return (
    <Card className="shadow-sm mb-4">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div className="mb-2">
          {/* Renderizando estrellas según el rating */}
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              color={index < rating ? "#ffcd3c" : "#e4e5e9"}
            />
          ))}
        </div>
        <Card.Text>{review}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;
