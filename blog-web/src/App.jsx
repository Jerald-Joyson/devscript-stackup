import "./App.css";
import Home from "./Pages/Home";
import Uploaded from "./Pages/Uploaded";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Uploaded" element={<Uploaded />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
