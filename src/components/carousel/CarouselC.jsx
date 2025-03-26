import { Carousel } from "react-bootstrap";
import "./CarouselC.css";
import { RiArrowLeftWideFill, RiArrowRightWideLine } from "react-icons/ri";
// imagenes de escritorio
import img1 from "../../assets/imagenes/carousel1.webp";
import img2 from "../../assets/imagenes/carousel2.webp";
import img3 from "../../assets/imagenes/carousel3.webp";
// imagenes de dispositivos moviles
import imgmobile1 from "../../assets/imagenes/carousel-mobile1.webp";
import imgmobile2 from "../../assets/imagenes/carousel-mobile2.webp";
import imgmobile3 from "../../assets/imagenes/carousel-mobile3.webp";

const CarouselC = () => {
  return (
    /* carousel escritorio */
    <>
      <div className="desktop-carousel">
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
      </div>
      {/* carousel celular */}
      <div className="mobile-carousel">
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
              <img src={imgmobile1} alt="ImagenMovil1" />
            </div>
          </Carousel.Item>
          <Carousel.Item className="img-carousel">
            <div className="carousel-image-container">
              <img src={imgmobile2} alt="ImaagenMovil2" />
            </div>
          </Carousel.Item>
          <Carousel.Item className="img-carousel">
            <div className="carousel-image-container">
              <img src={imgmobile3} alt="ImagenMovil3" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselC;
