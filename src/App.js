import "./App.css";
import HomePage from "./pages/HomePage";
import BerlinPage from "./pages/BerlinPage";
import LondonPage from "./pages/LondonPage";
import BrusselsPage from "./pages/BrusselsPage";
import HamburgPage from "./pages/HamburgPage";
import { Routes, Route } from "react-router-dom";
import { Container } from "reactstrap";
import EventsListDate from './components/EventsListDate';
import EventsList from "./components/EventsList";
import EventMap from "./pages/EventMap";

function App() {
  return (
    <Container fluid className='bodyodyody'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/London" element={<LondonPage />} />
        <Route path="/Berlin" element={<BerlinPage />} />
        <Route path="/Hamburg" element={<HamburgPage />} />
        <Route path="/Brussels" element={<BrusselsPage />} />
        <Route path="/Map" element={<EventMap/>}/>
        <Route path="/11" element={<EventMap/>} />
        <Route path="12" element={EventsListDate(12)} />
        <Route path="13" element={EventsListDate(13)} />
        <Route path="14" element={EventsListDate(14)} />
        <Route path="15" element={EventsListDate(15)} />
        <Route path="16" element={EventsListDate(16)} />
        <Route path="17" element={EventsListDate(17)} />
        <Route path="18" element={EventsListDate(18)} />
        <Route path="19" element={EventsListDate(19)} />
      </Routes>
    </Container>
  );
}

export default App;
