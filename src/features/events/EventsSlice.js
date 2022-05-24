import { EVENTS } from "../../shared/EVENTS";

export const selectAllEvents = () => {
    return EVENTS;
};

export const londonEvents = (event) => {
    const londonslice = EVENTS.filter((event) => event.city === 'London');
    londonslice.sort((a,b) => a.time-b.time);

    return londonslice;
};


export const brusselsEvents = (event) => {
    const brusselslice = EVENTS.filter((event) => event.city === 'Brussels');
    brusselslice.sort((a,b) => a.time-b.time);

    return brusselslice;
};