import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import LogIn from "./components/LogIn/LogIn";
import Account from "./components/Account/Account";
function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/account" element={<Account />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
