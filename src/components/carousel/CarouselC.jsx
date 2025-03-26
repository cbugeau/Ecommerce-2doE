import { Carousel } from "react-bootstrap";
import "./CarouselC.css";
import { RiArrowLeftWideFill, RiArrowRightWideLine } from "react-icons/ri";
import img1 from "../../assets/imagenes/carousel1.webp";
import img2 from "../../assets/imagenes/carousel2.webp";
import img3 from "../../assets/imagenes/carousel3.webp";

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
          <img src={img1} alt="imagen 1" />
        </div>
      </Carousel.Item>
      <Carousel.Item className="img-carousel">
        <div className="carousel-image-container">
          <img src={img2} alt="imagen 2" />
        </div>
      </Carousel.Item>
      <Carousel.Item className="img-carousel">
        <div className="carousel-image-container">
          <img src={img3} alt="imagen 3" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselC;
