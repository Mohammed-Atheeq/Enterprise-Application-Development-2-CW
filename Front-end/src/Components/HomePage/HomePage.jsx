import React, { useState } from "react";
import "./HomePage.css";
import { Link, useParams } from "react-router-dom";
import logo from "../Assets/logo.png";
import travel from "../Assets/travel1.png";
import profile_img from "../Assets/profile_img.jpg";
import imgL1 from "../Assets/Burj Khalifa.jpg";
import imgL2 from "../Assets/Taj Mahal1.jpg";
import imgL3 from "../Assets/China Wall.jpg";
import imgL4 from "../Assets/Maldives.jpg";
import fbicon from "../Assets/facebook_icon.png";
import instaicon from "../Assets/Insta_icon.png";
import whatsappicon from "../Assets/whatsapp_icon.png";
import twittericon from "../Assets/twitter_icon.png";
import yticon from "../Assets/yt_icon4.png";
import linkedinicon from "../Assets/linkedin_icon1.png";

export const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);

  const {fetchedUserId} = useParams()
  console.log(fetchedUserId)

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="banner0">
        <div className="header0" id="home">
          <nav>
            <img src={logo} alt="" className="logo" />
            <ul className="navbar">
              <li>
                <Link to={`/HomePage/${fetchedUserId}`}>Home</Link>
                <Link to="/LocationPage">Locations</Link>
                <Link to="/About">About Us</Link>
                <Link to="/Contact">Contact Us</Link>
              </li>
            </ul>
            <div className="profile0" onClick={toggleMenu}>
              <img src={profile_img} alt="" className="profile0_img" />
              <span>John</span>
              {showMenu && (
                <div className="profile0-menu">
                  <ul>
                    <li><Link to={`/Profile`}>Profile</Link></li>
                    <li><Link to="/UserBooking">Bookings</Link></li>
                    <li><Link to="/">Log out</Link></li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
          <div className="home1">
            <div className="travel1">
              <img src={travel} alt="" className="travel1" />
            </div>

            <div className="title8">
              <h1>Let's Fly, FlyLoka</h1>

              <p>Plan your trip with us and travel around</p>
              <p>the world with the most affordable packages!</p>

              <Link to= {`/Book/${fetchedUserId}`}><a  className="button1">
                Book Now
              </a></Link>
            </div>
          </div>
        </div>
      </div>

      <section className="locations" id="locations">
        <div className="package-title00">
          <h2>Most Trending Locations</h2>
        </div>

        <div className="location-content">
          <a>
            <div className="col-content">
              <img src={imgL1} alt="" className="img1" />
              <h5>Dubai</h5>
              <p>U A E</p>
            </div>
          </a>

          <a>
            <div className="col-content">
              <img src={imgL2} alt="" className="img1" />
              <h5>Agra</h5>
              <p>India</p>
            </div>
          </a>

          <a>
            <div className="col-content">
              <img src={imgL3} alt="" className="img1" />
              <h5>Beijing</h5>
              <p>China</p>
            </div>
          </a>

          <a>
            <div className="col-content">
              <img src={imgL4} alt="" className="img1" />
              <h5>Anantara</h5>
              <p>Maldives</p>
            </div>
          </a>
        </div>
        <a href="" className="more-button">
          <Link to="/LocationPage">More --) </Link>
        </a>
      </section>

      <section className="footer">
        <div className="foot">
          <div className="footer-content">
            <div className="footlinks">
              <h4>Quick Links</h4>

              <ul>
                <li>
                  <a href="Book">Book Now</a>
                </li>
                <li>
                  <a href="About">About Us</a>
                </li>
                <li>
                  <a href="Contact">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="footlinks1">
              <h4>Connect</h4>
              <div className="social">
                <a href="https://web.facebook.com/login/?_rdc=1&_rdr" target="_blank">
                  <img src={fbicon} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank">
                  <img src={instaicon} alt="Facebook" />
                </a>
                <a href="https://wa.me/message/3JCGJBSQJPIUK1" target="_blank">
                  <img src={whatsappicon} alt="Facebook" />
                </a>
                <a href="" target="_blank">
                  <img src={twittericon} alt="Facebook" />
                </a>
                <a href="" target="_blank">
                  <img src={yticon} alt="Facebook" />
                </a>
                <a href="" target="_blank">
                  <img src={linkedinicon} alt="Facebook" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="end">
          <p>
            Copyright © 2024 Flyloka Travels & Tours (Pvt) Ltd. All Rights
            Reserved.
            <br />
            Website developed by: EAD Team
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
