import { getByTitle } from '@testing-library/react';
import planeImg from '../assets/img/plane.jpeg';
import popImg from '../assets/img/pop.jpeg';
import menagerieImg from '../assets/img/menagerie.jpeg';
import kensingtonImg from '../assets/img/kensington.jpeg';
import schwerinImg from '../assets/img/schwerin.jpeg';
import harwoodImg from '../assets/img/harwood.png';
import eurostarImg from '../assets/img/eurostar.jpeg';
import courtyardImg from '../assets/img/courtyard.jpeg';
import beauxImg from '../assets/img/beauxarts.png';

export const EVENTS = [
    {   
        id: 1,
        name: 'Arrive - London Heathrow Airport', 
        city: 'London',
        place: 'London - Heathrow Airport',
        date: '11',
        time: '7:40am',
        image: planeImg,
        day: 'Saturday',
        address: 'Longford TW6, United Kingdom',
        description: 'Arrive at London-Heathrow Airport via UA',
        cost: 220
    },
    {
        id: 2,
        name: 'Harwood Arms',
        city: 'London',
        date: '11',
        day: 'Saturday',
        image: harwoodImg,
        address: 'Walham Grove, London SW6 1QP, United Kingdom',
        description: 'Sunday Roast',
        confirmation: '#2109907687',
        time: '12:00pm'
    },
    {
        id: 3,
        name: 'Check In', 
        place: 'Residence Inn London Kensington',
        date: '11',
        day: 'Saturday',
        city: 'London',
        time: '3:00pm',
        image: kensingtonImg,
        address: '181-183 Warwick Road, London, England, United Kingdom, W14 8PU',
        description: 'Confirmation: 86579042',
        cost: 64.77
    },
    {
        id: 4,
        name: 'The Glass Menagerie', 
        place: 'Duke of York\'s Theatre',
        date: '11',
        day: 'Saturday',
        city: 'London',
        time: '7:30pm',
        image: menagerieImg,
        address: 'St Martin\'s Ln, London WC2N 4BG, United Kingdom',
        description: 'Confirmation 21923592, Stalls D19, D20',
        cost: 243.74
    },
    {
        id: 5,
        name: 'Pop!', 
        place: 'Eagle - London',
        date: '11',
        day: 'Saturday',
        city: 'London',
        time: '9:00pm-4:00am',
        image: popImg,
        address: '349 Kennington Ln, London SE11 5QY, United Kingdom',
        description: 'Confirmation: 86579042',
        cost: 64.77
    },
    {
        id: 6,
        name: 'Schloss Schwerin', 
        place: 'Schloss Schwerin',
        date: '15',
        time: '4:00pm-6:00pm',
        image: schwerinImg,
        address: 'Lennéstrasse 1, 19053 Schwerin, Germany',
        description: 'Confirmation: 86579042',
        confirmation: '86579042',
        cost: 64.77,
        link: 'https://en.wikipedia.org/wiki/Schwerin_Castle'
    },
    {
        id: 7,
        name: 'Harwood Arms',
        city: 'London',
        date: '11',
        day: 'Saturday',
        image: harwoodImg,
        address: 'Walham Grove, London SW6 1QP, United Kingdom',
        description: 'Sunday Roast',
        confirmation: '#2109907687',
        time: '12:00pm'
    },
    {
        id: 8,
        name: 'London St Pancras Int\' to Brussels-Midi/Zuid',
        city: 'London',
        image: eurostarImg,
        date: '12',
        day: 'Sunday',
        description: 'Booking reference 4VW4WZ',
        time: '7:34pm',
        confirmation: '4VW4WZ'

    },
    {
        id: 9,
        name: 'Arrive Brussels-Midi/Zuid',
        city: 'Brussels',
        image: eurostarImg,
        address: 'Avenue Fonsny 47B, 1060 Brussel, Belgium',
        date: '12',
        day: 'Sunday',
        description: 'Arrive Brussels-Midi',
        time: '10:35pm'
    },
    {
        id: 10,
        name: 'Check In Courtyard Brussels-EU',
        city: 'Brussels',
        image: courtyardImg,
        address: 'Rue Joseph II 32, Brussels, 1000 Belgium',
        date: '12',
        description: 'Check In at the Courtyard-Brussels EU Quarter',
        time: '11:00pm',
        day: 'Sunday',
        confirmation: '85671967'
    },
    {
        id: 11,
        name: 'Royal Museums of Fine Arts of Belgium',
        city: 'Brussels',
        image: beauxImg,
        address: 'Rue du Musée 9 / Museumstraat 9 - 1000 Brussels',
        time: '10:00am',
        day: 'Monday'
    }
];
