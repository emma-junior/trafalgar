import Trafalgar from "./screens/Trafalgar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/trafalgar" element={<Trafalgar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
