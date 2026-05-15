import { useState } from "react";
import { NavLink } from "react-router-dom";

import "../css/header.css"


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__name">SIMON HOLT
      </div>
      <div className="navbar__nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/work" className="nav-link">
          Work
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </div>
      <div className="mobile-nav">

        <div
          className={`burger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>

        <div className={`drop-down-menu ${isOpen ? "open" : ""}`}>
          <NavLink to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/work" className="nav-link" onClick={() => setIsOpen(false)}>Work</NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>

      </div>

    </div>
  )
  
}

export default NavBar