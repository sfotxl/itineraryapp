import { EVENTS } from "../../shared/EVENTS";

export const selectAllEvents = () => {
    return EVENTS;
};

export const selectEvents = (city, date) => {
    if (city) {
        const slice = EVENTS.filter((event) => event.city === city);
        slice.sort((a,b) => a.id-b.id);
        return slice;
    } else if (date) {
        const slice = EVENTS.filter((event) => event.date === date);
        slice.sort((a,b) => a.id-b.id);
        return slice;
}};

export const selectEventsByDate = (date) => {
    const slice = EVENTS.filter((event) => event.date === date);
    slice.sort((a,b) => a.id-b.id);
    return slice;
};