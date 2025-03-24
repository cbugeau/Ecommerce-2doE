import { Carousel } from "react-bootstrap";
import "./CarouselC.css";
import { RiArrowLeftWideFill, RiArrowRightWideLine } from "react-icons/ri";

const CarouselC = () => {
  return (
    <Carousel
      fade
      prevIcon={
        <RiArrowLeftWideFill
          size={50}
          className="rounded-circle custom-arrow"
        />
      }
      nextIcon={
        <RiArrowRightWideLine
          size={50}
          className="rounded-circle custom-arrow"
        />
      }
      className="custom-carousel"
    >
      <Carousel.Item className="img-carousel">
        <div className="carousel-image-container">
          <img src="/src/assets/imagenes/carousel/img.1.webp" alt="imagen 1" />
        </div>
      </Carousel.Item>
      <Carousel.Item className="img-carousel">
        <div className="carousel-image-container">
          <img src="/src/assets/imagenes/carousel/img-2.webp" alt="imagen 2" />
        </div>
      </Carousel.Item>
      <Carousel.Item className="img-carousel">
        <div className="carousel-image-container">
          <img src="/src/assets/imagenes/carousel/img-3.webp" alt="imagen 3" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselC;
