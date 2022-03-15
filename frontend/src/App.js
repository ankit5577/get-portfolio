import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>hello home</h1>} />
        <Route path="about" element={<h1>hello about</h1>} />
      </Routes>
    </div>
  );
}

export default App;
