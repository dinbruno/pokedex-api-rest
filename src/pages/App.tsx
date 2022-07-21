import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../components/home";
import { Content } from "../components/PokemonPerfil/content";

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/:name" element={<Content />} />
      </Routes>
    </Router>
  );
};
