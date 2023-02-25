import React from "react";
import { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
// import { Button } from "./Button";
// import food from './photo/Plate.png'


function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click); // clicking changes the icon
  const closeMobileMenu = () => setClick(false); // When clicking on links it closes navbar

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span style={{ fontWeight: 'bold' }}>Stocks</span>
          {/* <img src={food} className="food" alt="food" /> */}
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-links" onClick={closeMobileMenu}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Account"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Account
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
        </ul>
       {/* {button && <Button buttonStyle="btn--outline">About</Button>} */}
      </div>
    </nav>
  );
}
export default NavBar;
// Home, About, Countries