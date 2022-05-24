import "./App.css";
import { Container, Row, Col } from "reactstrap";
import EventsList from "./features/events/EventsList";
import DisplayList from "./features/display/DisplayList";
import EventDetail from "./features/events/EventDetail";
import HomePage from "./pages/HomePage";
import BerlinPage from "./pages/BerlinPage";
import LondonPage from "./pages/LondonPage";
import BrusselsPage from "./pages/BrusselsPage";
import HamburgPage from "./pages/HamburgPage";

import Header from "./components/Header";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/London" element={<LondonPage/>} />
          <Route path="/Berlin" element={<BerlinPage />} />
          <Route path="/Hamburg" element={<HamburgPage />} />
          <Route path="/Brussels" element={<BrusselsPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
