import React, { useState } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import profile_img from "../Assets/profile_img.jpg";
import flight from "../Assets/Flight.jpg";

const About = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="banner5">
        <div className="header5" id="home">
          <nav>
            <Link to="/HomePage" className="logo">
              <img src={logo} alt="" className="logo" />
            </Link>
            <ul className="navbar">
              <li>
                <Link to="/HomePage">Home</Link>
                <Link to="/LocationPage">Locations</Link>
                <Link to="/About" className="A">
                  About Us
                </Link>
                <Link to="/Contact">Contact Us</Link>
              </li>
            </ul>
            <div className="profile2" onClick={toggleMenu}>
              <img src={profile_img} alt="" className="profile2_img" />
              <span>John</span>
              {showMenu && (
                <div className="profile2-menu">
                  <ul>
                    <li>
                      <Link to="/Profile">Profile</Link>
                    </li>
                    <li>
                      <Link to="/UserBooking">Bookings</Link>
                    </li>
                    <li>
                      <Link to="/">Log out</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
      <div className="content-container">
        <div className="right-section">
          <h2>Who We Are</h2>
          <p>Welcome to FlyLoka Tour Booking!</p>
          <p>
            We're passionate about crafting unforgettable travel experiences at
            unbeatable prices. Our mission is to make every journey seamless,
            memorable, and enriching. With trusted local guides and personalized
            service, we're here to turn your travel dreams into reality.
          </p>
          <p>Let's embark on your next adventure together!</p>
        </div>
        <div className="left-section">
          <Link to="/" className="Explore">
            Contact Us
          </Link>
          <img src={flight} alt="" className="left-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
