import Language from "./Language";
import Container from "react-bootstrap/Container";
import { data } from "../helpers/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Card = () => {
  return (
    <Container className="mt-4 rounded-4 p-4" style={{ background: "#6e84ff" }}>
      <h1 className="text-white my-2">Language</h1>
      <Row className="g-3 justify-content-center ">
        {data.map((lang , index) => (
          <Col sm={6} md={4} lg={3} key={index}>
            <Language {...lang} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Card;
