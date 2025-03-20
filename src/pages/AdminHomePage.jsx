import CardAdmin from "../components/CardAdmin/CardAdmin";
import SidebarC from "../components/Sidebar/SidebarC";
import { Col, Row, Container } from "react-bootstrap";

const AdminHomePage = () => {
  return (
    <>
      <SidebarC />
      <Container>
        <Row className="my-5">
          <Col xs={12} md={4}>
            <CardAdmin />
          </Col>
          <Col xs={12} md={4}>
            <CardAdmin />
          </Col>
          <Col xs={12} md={4}>
            <CardAdmin />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminHomePage;
