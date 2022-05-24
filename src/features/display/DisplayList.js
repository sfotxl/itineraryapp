import { Col, Row } from "reactstrap";
import DisplayCard from "./DisplayCard";
import { selectAllEvents } from "../events/EventsSlice";

const DisplayList = () => {
  const items = selectAllEvents();

  return (
    <Row>
      {items.map((item, idx) => {
        return (
              <DisplayCard key={idx} item={item} />
        );
      })}
    </Row>
  );
};

export default DisplayList;
