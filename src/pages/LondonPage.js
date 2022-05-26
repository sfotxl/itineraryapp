import Header from "../components/Header";
import { londonEvents } from "../features/events/EventsSlice";
import { Row, Col, Container } from "reactstrap";
import { selectEventsByCity } from "../features/events/EventsSlice";

const LondonPage = () => {
  // const events = londonEvents();
  const events = selectEventsByCity('London');
  return (
    <Container>
        <Header />
        {events.map((event) => {

          const {name, id, image, description, link, address, day, time} = event;
          return (
            <Row row-content className="align-items-center">
              <Col sm={5} key={id}>
                <a href={link}><img src={image} alt={description} width="100%" /></a>
              </Col>
              <Col>
                <Row>
                  <Col className="bg-dark text-white" key={name}>
                    {name}
                  </Col>
                </Row>
                <Row>
                  <Col><em>{address}</em></Col>
                  <Col xs='2'>
                    <Row>
                        <Col>{day}</Col>
                    </Row>
                    <Row>
                        <Col>{time}</Col>
                    </Row>
                    </Col>
                </Row>
                <Row>
                  <Col>{description}</Col>
                </Row>
              </Col>
            </Row>
          );
        })}
      </Container>
  );
};

export default LondonPage;
