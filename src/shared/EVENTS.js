import popImg from "../assets/img/pop.jpeg";
import menagerieImg from "../assets/img/menagerie.jpeg";
import kensingtonImg from "../assets/img/kensington.jpeg";
import schwerinImg from "../assets/img/schwerin.jpeg";
import harwoodImg from "../assets/img/harwood.png";
import eurostarImg from "../assets/img/eurostar.jpeg";
import courtyardImg from "../assets/img/courtyard.jpeg";
import beauxImg from "../assets/img/beauxarts.png";
import alanisImg from "../assets/img/alanis.png";
import hamburgstationImg from "../assets/img/hamburgstation.jpg";
import hamptonImg from "../assets/img/hampton.jpeg";
import stpancrasImg from "../assets/img/stpancras.jpeg";
import heathrowImg from "../assets/img/lhr.png";
import baseImg from "../assets/img/basejump.png";

export const EVENTS = [
  {
    id: 1,
    name: "Arrive - London Heathrow Airport",
    city: "London",
    place: "London - Heathrow Airport",
    date: "11",
    time: "7:40am",
    link: "https://www.heathrow.com/",
    image: heathrowImg,
    day: "Saturday",
    address: "Longford TW6, United Kingdom",
    description: "Arrive at London-Heathrow Airport via UA",
    cost: 220,
  },
  {
    id: 2,
    name: "Harwood Arms",
    city: "London",
    date: "11",
    day: "Saturday",
    image: harwoodImg,
    address: "Walham Grove, London SW6 1QP, United Kingdom",
    description: "Sunday Roast",
    confirmation: "#2109907687",
    time: "12:00pm",
    link: "https://harwoodarms.com/",
  },
  {
    id: 3,
    name: "Check In",
    place: "Residence Inn London Kensington",
    date: "11",
    day: "Saturday",
    city: "London",
    time: "3:00pm",
    image: kensingtonImg,
    link: "https://www.marriott.com/en-us/hotels/lonrk-residence-inn-london-kensington/overview/",
    address: "181-183 Warwick Road, London, England, United Kingdom, W14 8PU",
    description: "Confirmation: 86579042",
    cost: 64.77,
  },
  {
    id: 4,
    name: "The Glass Menagerie",
    place: "Duke of York's Theatre",
    date: "11",
    day: "Saturday",
    city: "London",
    time: "7:30pm",
    link: "https://www.theglassmenageriewestend.com/",
    image: menagerieImg,
    address: "St Martin's Ln, London WC2N 4BG, United Kingdom",
    description: "Confirmation 21923592, Stalls D19, D20",
    cost: 243.74,
  },
  {
    id: 5,
    name: "Pop!",
    place: "Eagle - London",
    date: 11,
    day: "Saturday",
    city: "London",
    time: "9:00pm-4:00am",
    link: "https://www.eaglelondon.com/event-details/pop-5",
    image: popImg,
    address: "349 Kennington Ln, London SE11 5QY, United Kingdom",
    description: "Confirmation: 86579042",
    cost: 64.77,
  },
  {
    id: 6,
    name: "Schloss Schwerin",
    place: "Schloss Schwerin",
    date: 15,
    time: "4:00pm-6:00pm",
    city: "Hamburg",
    day: "Wednesday",
    image: schwerinImg,
    address: "Lennéstrasse 1, 19053 Schwerin, Germany",
    description: "Confirmation: 86579042",
    confirmation: "86579042",
    cost: 64.77,
    link: "https://en.wikipedia.org/wiki/Schwerin_Castle",
  },
  {
    id: 7,
    name: "Harwood Arms",
    city: "London",
    date: "11",
    day: "Saturday",
    image: harwoodImg,
    address: "Walham Grove, London SW6 1QP, United Kingdom",
    description: "Sunday Roast",
    confirmation: "#2109907687",
    time: "12:00pm",
  },
  {
    id: 8,
    name: "London St Pancras Int' to Brussels-Midi/Zuid",
    city: "London",
    image: stpancrasImg,
    date: "12",
    day: "Sunday",
    description: "Booking reference 4VW4WZ",
    link: "https://stpancras.com/",
    time: "7:34pm",
    confirmation: "4VW4WZ",
  },
  {
    id: 9,
    name: "Arrive Brussels-Midi/Zuid",
    city: "Brussels",
    image: eurostarImg,
    address: "Avenue Fonsny 47B, 1060 Brussel, Belgium",
    date: "12",
    day: "Sunday",
    description: "Arrive Brussels-Midi",
    link: "https://www.eurostar.com/us-en/travel-info/stations/brussels-midi",
    time: "10:35pm",
  },
  {
    id: 10,
    name: "Check In Courtyard Brussels-EU",
    city: "Brussels",
    image: courtyardImg,
    address: "Rue Joseph II 32, Brussels, 1000 Belgium",
    date: "12",
    description: "Check In at the Courtyard-Brussels EU Quarter",
    link: "https://www.marriott.com/en-us/hotels/brumt-courtyard-brussels-eu/overview/?scid=554ff96d-1f1d-4761-a71d-dfe66c104af5&gclid=Cj0KCQjwhLKUBhDiARIsAMaTLnEYaG-otfrWCbtUWAHg6xfqsynltDbYI016mFVS-Ot16rTc7JPqT7MaAveuEALw_wcB&gclsrc=aw.ds",
    time: "11:00pm",
    day: "Sunday",
    confirmation: "85671967",
  },
  {
    id: 11,
    name: "Royal Museums of Fine Arts of Belgium",
    city: "Brussels",
    image: beauxImg,
    address: "Rue du Musée 9 / Museumstraat 9 - 1000 Brussels",
    link: "https://www.fine-arts-museum.be/en",
    time: "10:00am",
    day: "Monday",
  },
  {
    id: 12,
    name: "Depart Brussels-Midi via ICE 13 for Cologne Hbf",
    city: "Brussels",
    image: eurostarImg,
    address: "Avenue Fonsny 47B, 1060 Brussel, Belgium",
    link: "https://www.eurostar.com/us-en/travel-info/stations/brussels-midi",
    date: 14,
    time: "8:23am",
    confirmation: "3O6B16",
    day: "Tuesday",
  },
  {
    id: 13,
    name: "Arrive Hamburg via IC 2216 from Cologne Hbf",
    city: "Hamburg",
    image: hamburgstationImg,
    address: "Sylvesterallee 10, Hamburg, Germany",
    link: "https://www.hamburg.com/visitors/getting-here/11874992/hauptbahnhof/",
    date: 14,
    time: "3:12pm",
    day: "Tuesday",
  },
  {
    id: 14,
    name: "Check-In Hampton Inn Hamburg",
    city: "Hamburg",
    image: hamptonImg,
    address: "Nordkanalstrasse 18, Hamburg, 20097, Germany",
    link: "https://www.hilton.com/en/hotels/hamhxhx-hampton-hamburg-city-centre/",
    date: 14,
    time: "3:00pm",
    day: "Tuesday",
  },
  {
    id: 15,
    name: "Alanis Morissette - Jagged Little Pill Tour",
    city: "Hamburg",
    image: alanisImg,
    address: "Sylvesterallee 10, Hamburg, Germany",
    link: "https://alanis.com/events",
    date: 14,
    time: "8:00pm",
    day: "Tuesday",
  },
  {
    id: 16,
    name: "Base Flying in Berlin",
    city: "Berlin",
    image: baseImg,
    address: "Park Inn Hotel, Alexanderplatz 7, 10178 Berlin, Germany",
    link: "https://www.base-flying.de/",
    date: 18,
    time: "8:00pm",
    day: "Saturday",
  }
];
