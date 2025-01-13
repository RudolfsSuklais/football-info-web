import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <NavLink to="/">
            <h1>FOOTBALL HERO</h1>
          </NavLink>
        </div>

        <div className="footer-menu">
          <ul className="footer-menu-list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/premier-league"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsOpen(false)}
              >
                Premier League
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/la-liga"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsOpen(false)}
              >
                La Liga
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ligue-1"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsOpen(false)}
              >
                Ligue 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="link">
          <a href="https://www.fifa.com/en" target="_blank">
            https://www.fifa.com/en
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
