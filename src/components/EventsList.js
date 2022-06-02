import { selectEvents } from "../features/events/EventsSlice";
import Header from "./Header";
import { Row, Col } from "reactstrap";

const EventsList = (city, date) => {
  const events = selectEvents(city, date);
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
                <Col xs={8} className="eventName cyan" key={name}>
                  {name}
                </Col>
                <Col xs={4}>{place}</Col>
              </Row>
              <Row className="text-white">
                <Col xs={8}>
                  <em>{address}</em>
                </Col>
                <Col xs={4}>{day}</Col>
              </Row>
              <Row className="text-white">
                <Col xs={8}>
                  {description} <br /> {confirmation}
                </Col>
                <Col xs={4} className="text-warning">{time}</Col>
              </Row>
            </Col>
          </Row>
        );
      })}
    </>
  );
};
export default EventsList;
