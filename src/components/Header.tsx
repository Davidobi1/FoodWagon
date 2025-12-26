import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import "./header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-text">
        <h1>Are you starving?</h1>
        <p>Within a few clicks, find meals that are accessible near you</p>
        <div className="delivery-type">
          <button className="active">
            <img src="/images/icon.png" alt="Delivery" />
            Delivery
          </button>
          <button>
            <img src="/images/icon2.png" alt="Pickup" />
            Pickup
          </button>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Enter Your Address" />
          <button>Find Food</button>
        </div>
      </div>
      <div className="header-image">
        <img src="/images/Image Base.png" alt="Food" />
      </div>
    </header>
  );
};

export default Header;
