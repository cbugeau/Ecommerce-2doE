import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import {
  FaCcAmex,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router";
import { SiMercadopago } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-footer py-4">
      <Container>
        <Row>
          <Col
            sm="12"
            md="6"
            lg="3"
            className="d-flex flex-column align-items-center text-center text-lg-start"
          >
            <h5>Información</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="*">Quiénes Somos</Link>
              </li>
              <li>
                <Link to="*">Preguntas Frecuentes</Link>
              </li>
              <li>
                <Link to="*">Envíos y devoluciones</Link>
              </li>
              <li>
                <Link to="*">Guía de talles</Link>
              </li>
              <li>
                <Link to="*">Cómo comprar</Link>
              </li>
              <li>
                <Link to="*">Promociones vigentes</Link>
              </li>
            </ul>
          </Col>
          <Col
            sm="12"
            md="6"
            lg="3"
            className="d-flex flex-column align-items-center text-center text-lg-start"
          >
            <h5>Legales</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="*">Términos y Condiciones</Link>
              </li>
              <li>
                <Link to="*">Política de Privacidad</Link>
              </li>
              <li>
                <Link to="*">Cambios y Devoluciones</Link>
              </li>
              <li>
                <Link to="*">Defensa del Consumidor</Link>
              </li>
            </ul>
          </Col>
          <Col
            sm="12"
            md="6"
            lg="3"
            className="d-flex flex-column align-items-center text-center text-lg-start"
          >
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://maps.app.goo.gl/2A54rtqf6GU1VzMe6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  General Paz 576, Piso 9, Oficina 2 San Miguel de Tucumán
                </a>
              </li>
              <li>academy@rollingcodeschool.com</li>
              <li>Cel: +54 9 381 123-4567</li>
              <li>Tel: +54 381 456-7890</li>
            </ul>
          </Col>
          <Col
            sm="12"
            md="6"
            lg="3"
            className="d-flex flex-column align-items-center text-center text-lg-start"
          >
            <h5>Métodos de pago</h5>
            <ul className="list-unstyled">
              <li className="icons-footer">
                <Link to="*">
                  <FaCcVisa size={30} color="black" />
                </Link>
                <Link to="*">
                  <FaCcMastercard size={30} color="black" />
                </Link>
                <Link to="*">
                  <FaCcAmex size={30} color="black" />
                </Link>
                <Link to="*">
                  <FaCcPaypal size={30} color="black" />
                </Link>
                <Link to="*">
                  <SiMercadopago size={35} color="black" />
                </Link>
              </li>
            </ul>
            <h5>Síguenos</h5>
            <ul className="list-unstyled">
              <li className="pt-1 icons-footer">
                <Link to="*" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={26} color="black" />
                </Link>
                <Link to="*" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={26} color="black" />
                </Link>
                <Link to="*" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={26} color="black" />
                </Link>
                <Link to="*" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={26} color="black" />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="text-center pt-3">
            <hr className="pb-4" />
            <p className="copyright-text">
              &copy; 2025 Ecommerce. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
