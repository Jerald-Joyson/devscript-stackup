import "./App.css";
import Home from "./Pages/Home";
import Uploaded from "./Pages/Uploaded";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/reg" element={<Register />}></Route>

          <Route path="/Uploaded" element={<Uploaded />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
