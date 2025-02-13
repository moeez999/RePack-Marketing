import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Datenshutz from "./pages/datenshutz";
import Home from "./pages/home";
import Impressum from "./pages/impressum";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datenshutz" element={<Datenshutz />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </Router>
  );
}

export default App;
