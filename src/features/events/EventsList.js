
import EventCard from "./EventCard";
import { selectAllEvents } from "./EventsSlice";



const EventsList = ({setEventId}) => {
    const events = selectAllEvents();

    return (
        <div>
            {events.map((event) => {
                return (
                    <div key={events.id} >
                        <EventCard event={event} />
                    </div>
                );
            })}
        </div>
    );
};

export default EventsList;

//onClick={() => setEventId(event.id)}