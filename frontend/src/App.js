import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="App dark">
      <Routes>
        <Route path="/" element={<h1>hello home</h1>} />
        <Route path="about" element={<h1>hello about</h1>} />
        <Route path="/portfolio/ankit5577" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
