import "./App.css";
import HomePage from "./pages/HomePage";
import BerlinPage from "./pages/BerlinPage";
import LondonPage from "./pages/LondonPage";
import BrusselsPage from "./pages/BrusselsPage";
import HamburgPage from "./pages/HamburgPage";
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
