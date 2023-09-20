import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <main>
        <Navbar />
        <div>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </main>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/feliceNicolasBarcellona">
          Felice Nicolas Barcellona
        </a>
        .
      </div>
    </div>
  );
}

export default App;

// Features
//   Company
//   Careers
//   About

//   Login
//   Register

//   Make remote work

//   Get your team in sync, no matter your location. Streamline processes,
//   create team rituals, and watch productivity soar.

//   Learn more
