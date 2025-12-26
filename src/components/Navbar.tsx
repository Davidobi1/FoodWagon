import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <img className="logo" src="/images/Logo.png" alt="foodwagon" />
      <div className="nav-right">
        <span className="Location-text">
          <b>Deliver to:</b> <img src="/images/map-marker-alt.png" alt=""/> Current Location<b> Mohammadpur Bus Stand, Dhaka</b> 
        </span>
        <div className="search">
          <FaSearch /> <input type="text" placeholder="Search Food" />
        </div>
        <div className="login">
          <button className="login-btn">
            <FaUser /> Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
