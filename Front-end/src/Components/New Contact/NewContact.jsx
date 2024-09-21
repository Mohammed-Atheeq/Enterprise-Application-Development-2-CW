import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import profile_img from "../Assets/profile_img.jpg";
import "./NewContact.css";

const NewContact = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="banner55">
        <div className="header55" id="home">
          <nav>
            <Link to="/HomePage" className="logo">
              <img src={logo} alt="" className="logo" />
            </Link>
            <ul className="navbar">
              <li>
                <Link to="/">Home</Link>
                <Link to="/Location">Locations</Link>
                <Link to="/NewAbout">About Us</Link>
                <Link to="/NewContact" className="A">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="button-container">
              <Link to="/loginSignup" className="login-button">
                Login
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-form">
            <h2>Contact Us</h2>
            <p>Please fill out the form below to contact us.</p>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="country">Email:</label>
                <input type="text" id="country" name="country" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Subject:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="question">Message:</label>
                <textarea id="question" name="question"></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="contact-image">
            <img src={logo} alt="Contact" />
            <div className="link-wrapper1">
              <Link to="/logout" className="button11">
                WhatsApp
              </Link>
            </div>
            <div className="link-wrapper">
              <Link to="/logout" className="button11">
                Email
              </Link>
            </div>
            <div className="link-wrapper">
              <Link to="/logout" className="button11">
                Address
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContact;
