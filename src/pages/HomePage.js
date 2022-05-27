import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

const HomePage = () => {
  return (
    <div className="center">
      <Row>
        <Col>
          <nav>
            <Link to="/London">London</Link> |{" "}
            <Link to="/Brussels">Brussels</Link> |{" "}
            <Link to="/Hamburg">Hamburg</Link> |{" "}
            <Link to="/Berlin">Berlin</Link>
          </nav>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
