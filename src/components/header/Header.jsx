import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="#" className="logo">
            <img className="logo" src="assets/Logo.svg" alt="Logo" />
          </a>
          <p className="Product">Arber</p>
          <div className="nav-items">
            <div className="nav-links">
              <a href="#about" className="nav-link">
                Home
              </a>
              <a href="#fet" className="nav-link">
                History
              </a>
              <a href="#pr" className="nav-link">
                Services
              </a>
              <a href="#tes" className="nav-link">
                Gallery
              </a>
            </div>

            <img className="logo2" src="assets/logo3.svg" alt="" />
            <img className="logo3" src="assets/logo2.svg" alt="" />
            <div className="headerbtn">
              <button className="btn2">Sign up</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
