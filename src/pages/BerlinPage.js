
import { Container, Col, Row } from "reactstrap";
import { berlinEvents } from "../features/events/EventsSlice";
import Header from "../components/Header";

const BerlinPage = () => {
    const events = berlinEvents();
    return (
        <Container>
        <Header />
        {events.map((event) => {
          return (
            <Row row-content className="align-items-center">
              <Col sm={5} key={event.id}>
                <img src={event.image} alt={event.name} width="100%" />
              </Col>
              <Col>
                <Row>
                  <Col className="bg-dark text-white" key={event.name}>
                    {event.name}
                  </Col>
                </Row>
                <Row>
                  <Col><em>{event.address}</em></Col>
                  <Col xs='2'>
                    <Row>
                        <Col>{event.day}</Col>
                    </Row>
                    <Row>
                        <Col>{event.time}</Col>
                    </Row>
                    </Col>
                </Row>
                <Row>
                  <Col>{event.description}</Col>
                </Row>
              </Col>
            </Row>
          );
        })}
      </Container>
    );
};

export default BerlinPage;