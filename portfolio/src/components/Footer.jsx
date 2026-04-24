import { NavLink } from "react-router-dom"

import LinkedIn from "../assets/icons/linkedin.svg"
import GitHub from "../assets/icons/github.svg"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__thanks">Thanks for visiting, 
        <br></br>
        <br></br>
        Don't hesitate to get in contact if you have any questions or comments
      </div>
      <div className="footer__pages">
        <div>Pages</div>
        <div>-------</div>
        <div className="footer__nav-links">
          <NavLink to="/" className="footer__nav-link">
            Home
          </NavLink>
          <NavLink to="/work" className="footer__nav-link">
            Work
          </NavLink>
          <NavLink to="/about" className="footer__nav-link">
            About
          </NavLink>
          <NavLink to="/contact" className="footer__nav-link">
            Contact
          </NavLink>
        </div>
        
      </div>
      <div className="footer__contact">
        <div>Contact</div>
        <div>-------</div>
        <div>Email@email.com</div>
        <div className="footer__socials-box">
          <div className="footer__social-link">
            <a href="https://github.com/simonholt256" target="_blank"><img src={GitHub}/></a>
          </div>
          <div className="footer__social-link">
            <a href="https://www.linkedin.com/in/simon-holt-763282385/" target="_blank"><img src={LinkedIn}/></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer