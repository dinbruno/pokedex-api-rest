import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../components/home";
import { useApiContext } from "../contexts/ApiContext";

export const App: React.FC = () => {

  // const {pokemonList} = useApiContext()
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path={`/home/${pokemonList}`} element={<Home />} /> */}

      </Routes>
    </Router>
  );
};
