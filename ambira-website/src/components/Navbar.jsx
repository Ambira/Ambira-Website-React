// src/components/Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleBurger = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand mt-2 mb-2">
        <a
          role="button"
          className={`navbar-burger has-text-white ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={isActive ? "true" : "false"}
          data-target="navbarBasicExample"
          onClick={toggleBurger}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <a href="/" className="navbar-item is-tab">
            Home
          </a>
          <a href="/about" className="navbar-item is-tab">
            About
          </a>
          <a href="/blog" className="navbar-item is-tab">
            Blog
          </a>
          <a href="/art" className="navbar-item is-tab">
            Art
          </a>
          <a href="/food" className="navbar-item is-tab">
            Food
          </a>
          <a href="/contact" className="navbar-item is-tab">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
