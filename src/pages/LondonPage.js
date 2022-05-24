import Header from "../components/Header";
import { londonEvents } from "../features/events/EventsSlice";
import { Row, Col, Container } from "reactstrap";
import EventDetail from "../features/events/EventDetail";
import EventCard from "../features/events/EventCard";

const LondonPage = () => {
  const events = londonEvents();
  return (
    <Container>
        <Header />
        {events.map((event) => {
          return (
            <Row row-content className="align-items-center">
              <Col xs={5} key={event.id}>
                <img src={event.image} width="100%" />
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

export default LondonPage;
