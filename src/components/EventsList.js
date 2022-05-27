import { Container, Col, Row } from "reactstrap";
import { selectEventsByCity } from "../features/events/EventsSlice";
import Header from "./Header";

const EventsList = (city) => {
  const events = selectEventsByCity(city);
  return (
    <>
      <Header />
      {events.map((event) => {
        const {
          name,
          id,
          place,
          confirmation,
          image,
          description,
          link,
          address,
          day,
          time,
        } = event;
        return (
          <Row row-content className="align-items-center">
            <Col sm={5} key={id}>
              <a href={link}>
                <img src={image} alt={description} width="100%" />
              </a>
            </Col>
            <Col>
              <Row className="bg-dark align-items-center" key={name}>
                <Col xs={7} className="eventName cyan" key={name}>
                  {name}
                </Col>
                <Col xs={5}>{place}</Col>
              </Row>
              <Row>
                <Col>
                  <em>{address}</em>
                </Col>
                <Col xs={3}>
                  <Row>
                    <Col>{day}</Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={9}>
                  {description} <br /> {confirmation}
                </Col>
                <Col className="text-warning">{time}</Col>
              </Row>
            </Col>
          </Row>
        );
      })}
    </>
  );
};
export default EventsList;
