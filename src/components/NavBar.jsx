import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  window.onscroll = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar-logo">
        <NavLink to="/">
          <h1>FOOTBALL HERO</h1>
        </NavLink>
      </div>

      <div className="btn" onClick={() => setIsOpen(!isOpen)}>
        <i
          className={`fas ${
            isOpen ? "fa-times close-btn" : "fa-bars menu-btn"
          }`}
        ></i>
      </div>

      <div className={`nav-bar-menu ${isOpen ? "display" : ""}`}>
        <ul className="nav-bar-menu-list">
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

          <NavLink to="/add-player">
            <button className="add-player-btn">Add Player</button>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
