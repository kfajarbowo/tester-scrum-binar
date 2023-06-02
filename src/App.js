import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
