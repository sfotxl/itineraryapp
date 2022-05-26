import Header from "../components/Header";
import { Container, Row, Col } from "reactstrap";
import { selectEventsByCity } from "../features/events/EventsSlice";

const BrusselsPage = () => {

const events = selectEventsByCity('Brussels');
    return (
        <Container>
        <Header />
        {events.map((event) => {
          return (
            <Row row-content className="align-items-center">
              <Col xs={5} key={event.id}>
                <a href={event.link}><img src={event.image} alt={event.description} width="100%" /></a>
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
    )
}

export default BrusselsPage;