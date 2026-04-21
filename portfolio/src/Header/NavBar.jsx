import { NavLink } from "react-router-dom"

function NavBar() {
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

    </div>
  )
  
}

export default NavBar