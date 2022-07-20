import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../components/home";

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
