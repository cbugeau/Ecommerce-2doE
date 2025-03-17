import { Col, Container, Row } from "react-bootstrap";
import CardC from "../components/card/CardC";

const HomePage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm="12" md="6" lg="4">
            <CardC />
          </Col>
          <Col sm="12" md="6" lg="4">
            <CardC />
          </Col>
          <Col sm="12" md="6" lg="4">
            <CardC />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
