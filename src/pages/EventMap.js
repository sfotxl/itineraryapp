import EventCard from "../features/events/EventCard";
import { selectAllEventsRandom } from "../features/events/EventsSlice";
import Header from "../components/Header";
import { Row, Col } from "reactstrap";

const EventMap = () => {
    const events = selectAllEventsRandom();
    
    return (
        <>
            
            <Header/>
            <Row>
            {events.map((event) => {
                return (
                    <Col xs={6} md={4} lg={3} xl={2}>
                        <EventCard event={event}/>
                    </Col>
                )
             })}
             </Row>
        </>
            );
}

export default EventMap;