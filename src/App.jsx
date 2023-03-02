import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Stocks from "./components/Portfolio/Stocks";
import LogIn from "./components/LogIn/LogIn";
import Account from "./components/Account/Account";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/stocks" element={<Stocks />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
