import { EVENTS } from "../../shared/EVENTS";

export const selectAllEvents = () => {
    return EVENTS;
};

export const selectEventsByCity = (city) => {
    const slice = EVENTS.filter((event) => event.city === city);
    slice.sort((a,b) => a.id-b.id);
    return slice;
};
